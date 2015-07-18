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
import flux from "../../stores/flux"
import AlertBar from "../AlertBar/AlertBar.js"
import PeriodStats from "../PeriodStats/PeriodStats.js"
  

//TODO: Rename containing forlder to PayPeriodOverview and fix references 
export default class PayPeriodOverview extends React.Component {
  // PayPeriodsOverview connects to the datastore timesheet
  // and produces a component that displays all recent timesheet
  // stamps with date and culmulative hours
  render() {
    return (
      <FluxComponent connectToStores={['currentPeriod']}>
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
        return (<DailyTotals>{days}</DailyTotals>)
      })  

    return (
      <div className="row time-overview">
        <div className="col-xs-12">
            {/* <AlertBar />  Commenting this out for now until we have time to implement it */ }
            {weeks}
        </div>
      </div>
    )
  }
}

class PeriodHeader extends React.Component {
  // Returns the header for the period as period span and dates
  render() {
    return(
      <h3 className="text-center"><strong>{this.props.periodType}</strong></h3>
    );
  }
}


class DailyTotals extends React.Component {    
  // DailyTotals assumes a week pay period and creates a unordered list of 
  // day components from the dates provided 
  render() {
    const week = this.props.children
    const dateRange = 
        _.chain([week.first(), week.last()])
         .map(each => moment(each.value().props.Date.split('/'), 'M/DD/YYY'))
         .map(each => each.format("MMMM DD"))
         .join(' - ')
         .value()
    return (
      <div className="payperiod-overview" style={{ minHeight: 500 + "px" }}>
        <PeriodHeader periodType="Current Pay Period" />
        <h3 className="text-center"><small>{dateRange}</small></h3>
        <FluxComponent connectToStores={['currentPeriod']}>
          <PeriodStats />
        </FluxComponent>
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
    const { GrandTotal } = this.props
    const date = moment(this.props.Date, 'M/DD/YYYY')
    const hoursWorked = GrandTotal ? Number(GrandTotal.replace(':', '.')) : 0
    return (
      <li className="day-as-txt">
        <div className="time-entry shadowed-box">
          <Link to="day" params={{ date: date.format("YYYY-MM-DD")}}>
            <div className="date-side-box">
                <p className="day-as-text text-center">{date.format("dddd")}</p>
                <p className="date text-center"><span className="day-as-number">{date.format("M/D")}</span></p>
            </div>
            <p className="hours-worked-text"><span className="hours-worked-number text-center">{hoursWorked}</span> hours worked</p>
          </Link>
        </div>
      </li>
    )
  }
}