/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from "react"
import { Link } from "react-router" 
import moment from "moment"
import _ from "lodash"
import {createCalendar} from "../Calendar/Calendar.js"
import FluxComponent from 'flummox/component';
import flux from "../../flux/flux"

class ClickableDay extends React.Component {
  render() {
    const url_date = moment(this.props.date).format("YYYY-MM-DD")
    const url_day = moment(this.props.date).format("D")
    return (
      <div>
        <Link to="day" params={{date: url_date}} >
          {url_day}
        </Link>
    </div>
    )
  }
}

const Calendar = createCalendar(ClickableDay)

export default class DayOverview extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['kronos']}>
        <Overview {...this.props} />
      </FluxComponent>
    )
  }
}

function kronosMoment(date, time, kronosTimeZone) {
  // The following are the expected formats and examples
  // date: M/DD/YYYY - 10/01/1990
  // time: HH:mm - 10:14
  // kronosTimeZone - (GMT -05:00) Eastern Time
  const timeZoneOffset = kronosTimeZone ? kronosTimeZone.match(/[+-]\d\d:\d\d/)[0] : '-07:00'
  return moment(
    `${date} ${time} ${timeZoneOffset}`,
    'M/DD/YYYY HH:mm Z'
  )
}

class Overview extends React.Component {                              
  render() {  
    // XXX Hack! Need to pull from API in a better way
    let lastKronosTimeZone = ""

    const { Timesheet, Schedule, params } = this.props

    // inPunchesChain is a lodash chain which returns all the
    // inpunches and adds a `type` and `time` property.
    // 
    // Expects:
    // ```
    // Timesheet: {
    //   TotaledSpans: {
    //     TotaledSpan: [
    //       Date: "M/DD/YYYY", // The day the span.
    //       InPunch.Punch: {
    //          Date: "M/DD/YYYY, // The day of the span.
    //          Time: "HH:mm", // The time of the in punch.
    //          KronosTimeZone: {""}, // time zone of the Time.
    //       }, 
    //     ]
    //   }
    // }```
    // Produces:
    // ```
    // [
    //   {
    //     type: "InPunch",
    //     time: Moment, // A moment object represeting Time & KronosTimeZone
    //     Date: "M/DD/YYYY, // The day of the span.
    //   }
    //  
    // ]
    // ```
    const inPunchesChain = _.chain(Timesheet)
      .get('TotaledSpans.TotaledSpan', [])
      .filter({Date: moment(params.date).format("M/DD/YYYY")})
      .pluck('InPunch.Punch')
      .compact()
      .map(eachPunch => ({
          type: "InPunch",
          time: kronosMoment(eachPunch.Date, eachPunch.Time,
              eachPunch.KronosTimeZone),
          Date: eachPunch.Date,
      }))

    // outPunchesChain is a lodash chain which returns all the
    // outpunches and adds a `type` and `time` property.
    // 
    // Expects:
    // ```
    // Timesheet: {
    //   TotaledSpans: {
    //     TotaledSpan: [
    //       Date: "M/DD/YYYY", // The day the span.
    //       OutPunch.Punch: {
    //          Date: "M/DD/YYYY, // The day of the span.
    //          Time: "HH:mm", // The time of the in punch.
    //          KronosTimeZone: {""}, // time zone of the Time.
    //       }, 
    //     ]
    //   }
    // }```
    // Produces:
    // ```
    // [
    //   {
    //     type: "OutPunch",
    //     time: Moment, // A moment object represeting Time & KronosTimeZone
    //     Date: "M/DD/YYYY, // The day of the span.
    //   }
    // ]
    // ```
    const outPunchesChain = _.chain(Timesheet)
      .get('TotaledSpans.TotaledSpan', [])
      .filter({Date: moment(params.date).format("M/DD/YYYY")})
      .pluck('OutPunch.Punch')
      .compact()
      .map(eachPunch => {
          // XXX Hack! Need to pull from API in a better way
          lastKronosTimeZone = eachPunch.KronosTimeZone
          return {
            type: "OutPunch",
            time: kronosMoment(eachPunch.Date, eachPunch.Time, 
                eachPunch.KronosTimeZone),
            Date: eachPunch.Date,
          }
      })


    // shiftsChain is a lodash chain which returns all the
    // shifts and adds a `type` and `time` property.
    // 
    // Expects:
    // ```
    // Schedule: {
    //   ScheduleItems: {
    //     ScheduleShift: [
    //       StartDate: "M/DD/YYY",
    //       EndDate: "M/DD/YYY",
    //       StartTime: "hh:mm",
    //       EndTime: "hh:mm",
    //     ]
    //   }
    // }```
    // Produces:
    // ```
    // [
    //   {
    //     type: "scheduledIn",
    //     time: Moment, // A moment object represeting Time & KronosTimeZone
    //   }, {
    //     type: "scheduledOut",
    //     time: Moment, // A moment object represeting Time & KronosTimeZone
    //   }
    // ]
    // ```
    const shiftsChain = _.chain(Schedule)
      .get('ScheduleItems.ScheduleShift', [])
      .filter({StartDate: moment(params.date).format("M/DD/YYYY")})
      .pluck('ShiftSegments.ShiftSegment')
      .compact()
      .map(eachShift => {
        const { StartDate, EndDate, StartTime, EndTime} = eachShift
        return [
          {
            time: kronosMoment(StartDate, StartTime, lastKronosTimeZone),
            type: 'scheduledIn'
          },{
            time: kronosMoment(EndDate, EndTime, lastKronosTimeZone),
            type: 'scheduledOut'
          }
        ]
      })
      .flatten()

    const punches = inPunchesChain
       .concat(outPunchesChain.value())
       .concat(shiftsChain.value())
       .sortBy('time')
       .map(punch => <Entry {...punch} />)
       .value()

    const date = moment(params.date)
    const year = date.format("YYYY")
    const month = date.format("MM")

    const dayHeaders = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    
    return (
      <div>  
        <DayHeader date={date}/> 
        <div className="row">
          <div className="col-xs-12 col-md-7">
            { punches.length > 0 ? punches : <div><h3>No punches today</h3></div>}
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="calendar hidden-xs hidden-sm">
              <Calendar year={year} month={month-1} headers={dayHeaders} />
            </div>
              <FluxComponent connectToStores={['kronos']}>
                <DayStats date={this.props.params.date}/>
              </FluxComponent>
          </div>
        </div>
      </div>
    )
  }
}

class DayHeader extends React.Component {
  render() { 
    const displayDate = this.props.date.format("MMMM DD") 
    return ( 
      <div className="row">
        <div className="col-xs-2">
          <Link to="day" params={{date: this.props.date.clone().subtract(1, "days").format("YYYY-MM-DD")}} 
                type="button" className="pull-left subtle-btn">
            <i className="fa fa-chevron-left"></i>
          </Link> 
        </div>
        <div className="col-xs-8">
          <h4 className="text-center">{displayDate}</h4>
        </div>
        <div className="col-xs-2">
          <Link to="day" params={{date: this.props.date.clone().add(1, "days").format("YYYY-MM-DD")}} 
                type="button" className="pull-right subtle-btn">
            <i className="fa fa-chevron-right"></i>
          </Link> 
        </div>
        <div className="row"><br/></div> {/*For space*/}
        <div className="row"><br/></div>
      </div>
    )
  }
}

class DayStats extends React.Component {
  render() {
    const { date, Timesheet } = this.props
    const [hours, minutes] = _.chain(Timesheet)
        .get('DailyTotals.DateTotals', [])
        .find(each => each.Date == moment(date).format("M/DD/YYYY"))
        .get('GrandTotal', '0:00')
        .thru(total => moment(total, 'h:mm'))
        .thru(total => [
            total.hours(), ((total.minutes()/60+'').charAt(2) + (total.minutes()/60+'').charAt(3)) ?
                           ((total.minutes()/60+'').charAt(2) + (total.minutes()/60+'').charAt(3)) : '00'
        ])
        .value()
    return (
      <div className="panel period-totals">
        <div className="panel-body">
          <p><strong>Total Hours Worked:</strong> <span className="period-stat">{hours}.{minutes}</span></p>
        </div>
      </div>   
    )
  }
}

class Entry extends React.Component {
  render() {
    const panelClassDefault = "panel time-entry day"
    const glyphClassDefault = "day-icon"

    const settings = {
      InPunch: {
        action: "Clocked in",
        panelClass: panelClassDefault + " " + "time-in",
        glyphClass: glyphClassDefault + " fa-flip-horizontal" + " fa fa-truck"
      },
      OutPunch: {
        action: "Clocked out",
        panelClass: panelClassDefault + " " + "time-out",
        glyphClass: glyphClassDefault + " " + "fa fa-truck"
      },
      scheduledIn: {
        action: "Shift started",
        panelClass: panelClassDefault + " " + "shift-info",
        glyphClass: glyphClassDefault + " " + "fa fa-clock-o"
      },
      scheduledOut: {
        action: "Shift ended",
        panelClass: panelClassDefault + " " + "shift-info",
        glyphClass: glyphClassDefault + " " + "fa fa-clock-o"
      }
    }

    const {action, panelClass, glyphClass} = settings[this.props.type]

    const time = moment(this.props.time).format('hh:mm a') 
    return ( 
        <div className={panelClass}>
            <div className="date-side-box">
                <p className="text-center"><i className={glyphClass}></i></p>
                <p>{action}</p>
            </div>
            <p className="hours-worked-text"><span className="hours-worked-number">{time}</span></p>
        </div>
    )
  }
}
