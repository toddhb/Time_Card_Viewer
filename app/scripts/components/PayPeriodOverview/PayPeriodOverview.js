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
import _ from "lodash"
import moment from "moment"
import FluxComponent from 'flummox/component';
import flux from "../../flux/flux"
import PayPeriodStats from "../PayPeriodStats/PayPeriodStats.js"
  

export default class PayPeriodOverview extends React.Component {
  // PayPeriodsOverview connects to the datastore timesheet
  // and produces a component that displays all recent timesheet
  // stamps with date and culmulative hours
  render() {
    return (
      <FluxComponent connectToStores={['kronos']}>
        <PayPeriod {...this.props}/>
      </FluxComponent>
    )
  }
}

class PayPeriod extends React.Component {
  componentWillMount() {

    flux.getActions('kronos').fetchDateRangeTimesheet(this.props.dateRange)
  }
  // PayPeriods creates a list of PayPeriod Components
  // Needs tested with more data
  render() {
    const { timesheet } = this.props

    const days = _.map(timesheet.days, each => <Day {...each} />)
    const dateRange = _.chain([_.first(days), _.last(days)])
         .compact()
         .map(each => each.props.date.format("MMMM DD"))
         .join(' - ')
         .value()

    return (
      <div className="row time-overview">
        <div className="col-xs-12">
          <div className="payperiod-overview">
            <PeriodHeader periodType={this.props.periodType} />
            <h3 className="text-center"><small>{dateRange}</small></h3>

            <h6 className="text-center"><OtherPayPeriodLink {...this.props} /></h6>
            <FluxComponent connectToStores={['kronos']}>
              <PayPeriodStats />
            </FluxComponent>
            <ul className="week-overview clearfix">
                {days}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class OtherPayPeriodLink extends React.Component {
  // Shows a link to previous payperiod if current component's props.periodType="current"
  // else returns null
  render() {
    if(this.props.periodType == "Current") {
      return(
        <Link to="previous" name="period-link previous">Previous Pay Period</Link>
      )
    } 
    if(this.props.periodType == "Previous") {
      return(
        <Link to="app" name="period-link current">Current Pay Period</Link>
      )
    } else {
      return null
    }
  }
}

class PeriodHeader extends React.Component {
  // Returns the header for the period as period span and dates
  render() {
    const header = this.props.periodType + " Pay Period"
    return(
      <h3 className="text-center"><strong>{{header}}</strong></h3>
    );
  }
}


class Day extends React.Component {
  // Day component displays a date and the total number
  // of hours worked that day. Both date and hours are 
  // passed through props.
  render() {
    const { date, total } = this.props
    const amountInTime = total ? total : '0:00'
    return (
      <li className="day-as-txt">
        <div className="time-entry shadowed-box">
          <Link to="day" params={{ date: date.format("YYYY-MM-DD")}}>
            <div className="date-side-box">
                <p className="day-as-text text-center">{date.format("dddd")}</p>
                <p className="date text-center"><span className="day-as-number">{date.format("M/D")}</span></p>
            </div>
            <p className="hours-worked-text"><span className="hours-worked-number text-center">{total}</span> hours worked</p>
          </Link>
        </div>
      </li>
    )
  }
}