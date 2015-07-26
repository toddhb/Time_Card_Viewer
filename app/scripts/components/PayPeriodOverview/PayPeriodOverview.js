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
import flux from "../../stores/flux"
import AlertBar from "../AlertBar/AlertBar.js"
import PeriodStats from "../PeriodStats/PeriodStats.js"
  

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
    flux.getActions('kronos').fetch()
  }
  // PayPeriods creates a list of PayPeriod Components
  // Needs tested with more data
  render() {
    const { Timesheet } = this.props
  
    const days = _.chain(Timesheet)
      .get('DailyTotals.DateTotals', [])
      .compact()
      .map(each => <Day {...each} />)
      .value()

    const dateRange = _.chain([_.first(days), _.last(days)])
         .compact()
         .map(each => moment(each.props.Date.split('/'), 'M/DD/YYY'))
         .map(each => each.format("MMMM DD"))
         .join(' - ')
         .value()

    return (
      <div className="row time-overview">
        <div className="col-xs-12">
          <div className="payperiod-overview" style={{ minHeight: 500 + "px" }}>
            <PeriodHeader periodType="Current Pay Period" />
            <h3 className="text-center"><small>{dateRange}</small></h3>
            <FluxComponent connectToStores={['kronos']}>
              <PeriodStats />
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

class PeriodHeader extends React.Component {
  // Returns the header for the period as period span and dates
  render() {
    return(
      <h3 className="text-center"><strong>{this.props.periodType}</strong></h3>
    );
  }
}


class Day extends React.Component {
  // Day component displays a date and the total number
  // of hours worked that day. Both date and hours are 
  // passed through props.
  render() {
    const date = moment(this.props.Date, 'M/DD/YYYY')
    const grandTotal = this.props.GrandTotal
    const AmountInTime = grandTotal ? grandTotal : '0:00'
    var SplitTime = AmountInTime.split(':')
    var hours = SplitTime[0]
    var minutes = Math.round((SplitTime[1])*(5/3))
    return (
      <li className="day-as-txt">
        <div className="time-entry shadowed-box">
          <Link to="day" params={{ date: date.format("YYYY-MM-DD")}}>
            <div className="date-side-box">
                <p className="day-as-text text-center">{date.format("dddd")}</p>
                <p className="date text-center"><span className="day-as-number">{date.format("M/D")}</span></p>
            </div>
            <p className="hours-worked-text"><span className="hours-worked-number text-center">{hours}.{minutes}</span> hours worked</p>
          </Link>
        </div>
      </li>
    )
  }
}