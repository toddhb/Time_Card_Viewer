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
  
// Period.TimeFramePeriod.PeriodDateSpan = Gives a string of the time period span
// as "startDate (MM/DD/YYYY) - endDate(MM/DD/YYYY)"

  
// TODO:  Rename this component..  
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
  // PayPeriods
  render() {
    // An array of Objects with { -Date, -GrandTotal (hours) }
    const dateTotals = this.props.Timesheet.DailyTotals.DateTotals;
    
    var totalsByWeek = _.chain(dateTotals)
      .groupBy((element, index) => Math.floor(index/7))
      .map(eachWeek => {
        const days = _.chain(eachWeek).reverse().map(eachDay => <Day {...eachDay} />) 
        // Produces array [month, day, year]
        const start_parts = _.first(eachWeek).Date.split('/').map(part => parseInt(part))
        // Creates a Moment object from the date parts
        const start_date = moment().set({'M': (start_parts[0] - 1), 
                                         'D': start_parts[1],
                                         'Y': start_parts[2]}).format("MMMM DD")
        const end_parts = _.last(eachWeek).Date.split('/').map(part => parseInt(part))
        const end_date = moment().set({'M': (end_parts[0] - 1), 
                                       'D': end_parts[1],
                                       'Y': end_parts[2]}).format("MMMM DD")
        return (<Week>{days}</Week>)
      })  
        
    return (
      <div className="row time-overview">
        <div className="col-xs-12">
            <AlertBar />
            {totalsByWeek}
        </div>
      </div>
    )
  }
}

class Week extends React.Component {    
  render() {
    const children = this.props.children
    // How do I extract this operation out? I've written it too many times...  
    const start_parts = children.first().value().props.Date.split('/').map(part =>
                                                                           parseInt(part))
    const start = moment().set({'M': (start_parts[0] - 1), 
                                     'D': start_parts[1],
                                     'Y': start_parts[2]})
    const end_parts = children.last().value().props.Date.split('/').map(part =>
                                                                           parseInt(part))
    const end_date = moment().set({'M': (end_parts[0] - 1), 
                                     'D': end_parts[1],
                                     'Y': end_parts[2]}).format("MMMM DD")   
    const start_date = start.format("MMMM DD")
    const url_date = start.format("YYYY-MM-DD")
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
    const dateSt = this.props.Date.split('/').map(part =>parseInt(part))
    const date = moment().set({'M': (dateSt[0] - 1), 
                                     'D': dateSt[1],
                                     'Y': dateSt[2]}) 
    var hoursWorked = this.props.GrandTotal
    console.log(this.props.GrandTotal)
    if((hoursWorked === "0:00") ||(hoursWorked === undefined)){
      console.log("Here!")
      hoursWorked = "0" 
    }
    else {
      console.log("There")
     hoursWorked = this.props.GrandTotal 
    }
    return (
      <li className="day-as-txt">
        <div className="time-entry shadowed-box">
      {<Link to="day" params={{ date: date.format("YYYY-MM-DD")}}>
            <div className="date-side-box">
                <p className="day-as-text text-center">{date.format("dddd")}</p>
                <p className="date text-center">{date.format("M.")}<span className="day-as-number">{date.format("D")}</span></p>
            </div>
                {<p className="hours-worked-text"><span className="hours-worked-number text-center">{hoursWorked}</span>
            hours worked</p>}
          </Link>
        }
        </div>
      </li>
    )
  }
}