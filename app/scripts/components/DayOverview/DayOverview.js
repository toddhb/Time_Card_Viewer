/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React, { PropTypes } from "react"
import { Link } from "react-router" 
import moment from "moment"
import _ from "lodash"
import FluxComponent from 'flummox/component';
import flux from "../../flux/flux"
import DayOverviewCalendar from '../DayOverviewCalendar/DayOverviewCalendar'

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

    const { timesheet, Schedule, params } = this.props

    const inPunchesChain = _.chain(timesheet.inPunches)
      .filter(eachPunch => moment(params.date).isSame(eachPunch.time, 'day'))
      .map(eachPunch => ({
          type: "InPunch",
          time: eachPunch.time,
      }))

    const outPunchesChain = _.chain(timesheet.outPunches)
      .filter(eachPunch => moment(params.date).isSame(eachPunch.time, 'day'))
      .map(eachPunch => {
          // XXX Hack! Need to pull from API in a better way
          //lastKronosTimeZone = eachPunch.KronosTimeZone
          return {
            type: "OutPunch",
            time: eachPunch.time,
          }
      })

    /*
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
    */

    const punches = inPunchesChain
       .concat(outPunchesChain.value())
       //.concat(shiftsChain.value())
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
              <DayOverviewCalendar year={year} month={month-1} headers={dayHeaders} />
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
  propTypes: {
    timesheet: PropTypes.object.isRequired,
  }
  render() {
    const { date, timesheet } = this.props
    const total = _.chain(timesheet.days)
        .find(each => moment(date).isSame(each.date, 'day'))
        .get('total')
        .value()
    return (
      <div className="panel period-totals">
        <div className="panel-body">
          <p><strong>Total Hours Worked:</strong> <span className="period-stat">{total}</span></p>
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
