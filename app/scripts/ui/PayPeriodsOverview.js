/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from "react"
import Router, { RouteHandler, Link} from "react-router"
import _ from "underscore"
import moment from "moment"
import FluxComponent from 'flummox/component';
import flux from "../stores/flux"
import AlertBar from "./AlertBar.js"
  
 
export default class PayPeriodsOverview extends React.Component {
  // PayPeriodsOverview connects to the datastore timesheet
  // and produces a component that displays all recent timesheet
  // stamps with date and culmulative hours
  render() {
    return (
      <FluxComponent connectToStores={['timeSheet']}>
        <PayPeriods {...this.props}/>
      </FluxComponent>
    )
  }
}

class PayPeriods extends React.Component {
  // PayPeriods creates a list of PayPeriod Components
  // Needs tested with more data
  render() {
    var dateTotals = this.props.Timesheet.DailyTotals.DateTotals
    
    // Splits dateTotals into weeks arranged by descending recent dates
    var weeks = _.chain(dateTotals)
      .reverse()
      .groupBy((element, index) => Math.floor(index/7))
      .map(eachWeek => {
        const days = _.chain(eachWeek).map(eachDay => <Day {...eachDay} />) 
        return (<PayPeriod>{days}</PayPeriod>)
      })  
        
    return (
      <div className="row time-overview">
        <div className="col-xs-12">
            <AlertBar />
            {weeks}
        </div>
      </div>
    )
  }
}

class PayPeriod extends React.Component {    
  // PayPeriod assumes a week pay period and creates a unordered list of 
  // day components from the dates provided 
  render() {
    const week = this.props.children
    var date_range = [ week.first(), week.last() ].map(date =>
                                                        date.value().props.Date.split('/'))
    date_range = date_range.map(date =>
                                 moment().set({'M': (date[0] - 1), 
                                               'D': date[1],
                                               'Y': date[2]}))
    const start_date = date_range[0].format("MMMM DD")
    const url_date = date_range[0].format("MMMM DD")
    const end_date = date_range[1].format("MMMM DD")
    return (
      <div className="payperiod-overview">
        <Link to="payperiod" params={{date: url_date}}>
          <h3>{start_date + " - " + end_date}</h3>
        </Link>
        <ul className="week-overview clearfix">
            {this.props.children}
        </ul>
      </div>
    );
  }
}


class Day extends React.Component {
  // Day component displays a date and the total number
  // of hours worked that day. Both date and hours are 
  // passed through props.
  render() {
    var date = this.props.Date.split('/').map(part =>parseInt(part))
    date = moment().set({'M': (date[0] - 1), 
                         'D': date[1],
                         'Y': date[2]}) 
    var timeDisplay = ""
    var hoursWorked = this.props.GrandTotal

    //a day off from work
    if(hoursWorked === undefined){
      timeDisplay = "0"
    }
    //a workday
    else {
      const hours = hoursWorked.split(":")[0]
      var minutes = hoursWorked.split(":")[1]

      //convert minutes from
      //time xx:xx to decimal xx.xx
      minutes = Math.round((minutes*1)*(5/3))

      if(minutes === 0) {
        timeDisplay = hours
      }
      else {
        timeDisplay = hours + "." + minutes
      }
    }
    return (
      <li className="day-as-txt">
        <div className="time-entry shadowed-box">
      {<Link to="day" params={{ date: date.format("YYYY-MM-DD")}}>
            <div className="date-side-box">
                <p className="day-as-text text-center">{date.format("dddd")}</p>
                <p className="date text-center">{date.format("M.")}<span className="day-as-number">{date.format("D")}</span></p>
            </div>
                {<p className="hours-worked-text"><span className="hours-worked-number text-center">{timeDisplay}</span>
            hours worked</p>}
          </Link>
        }
        </div>
      </li>
    )
  }
}