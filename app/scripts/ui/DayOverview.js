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
import _ from "underscore"
import {createCalendar} from "./Calendar.js"
import FluxComponent from 'flummox/component';
import flux from "../stores/flux"

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
      <FluxComponent connectToStores={['daystream', 'timeSheet', 'schedule']}>
        <Overview {...this.props} />
      </FluxComponent>
    )
  }
}

class Overview extends React.Component {                              
  render() {  
    const date = moment(this.props.params.date)
    const year = date.format("YYYY")
    const month = date.format("MM")
    const dayHeaders = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    const punchLog = _.chain(this.props.dayStamps)
       .sortBy(punchLog => punchLog.time) 
       .map(punch => <Entry {...punch} />)
    return (
      <div>  
        <DayHeader date={date}/> 
        <div className="row">
          <div className="col-xs-12 col-md-7">
            {punchLog}
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="calendar hidden-xs hidden-sm">
              <Calendar year={year} month={month-1} headers={dayHeaders} />
            </div>
              <DayStats payPeriod={this.props.payPeriod}/>
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
    const payPeriod = this.props.payPeriod
    return (
      <div className="panel period-totals">
        <div className="panel-heading">
          <h4 className="panel-title"><a href="payperiod">{payPeriod.start} - {payPeriod.end} Period</a> Totals</h4>
        </div>
        <div className="panel-body">
          <p><strong>Total Hours Worked:</strong> <span className="period-stat">{payPeriod.hoursWorked}</span></p>
          <p><strong>Total Hours Scheduled:</strong> <span className="period-stat">{payPeriod.hoursScheduled}</span></p>
          <p><strong>Other Fact</strong> <span className="period-stat">{payPeriod.etc}</span></p>
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
      timeIn: {
        action: "Clocked in",
        panelClass: panelClassDefault + " " + "time-in",
        glyphClass: glyphClassDefault + " fa-flip-horizontal" + " fa fa-truck"
      },
      timeOut: {
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

    return ( 
        <div className={panelClass}>
            <div className="date-side-box">
                <p className="text-center"><i className={glyphClass}></i></p>
                <p>{action}</p>
            </div>
            <p className="hours-worked-text"><span className="hours-worked-number">{this.props.time} {this.props.suffix}</span></p>
        </div>
    )
  }
}
