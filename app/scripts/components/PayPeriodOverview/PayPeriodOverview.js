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
import PayPeriodDays from "../PayPeriodDays/PayPeriodDays"
import Page from '../Page/Page'
import { getId } from '../Login/Login'

export default class PayPeriodOverview extends React.Component {
  // PayPeriodsOverview connects to the datastore timesheet
  // and produces a component that displays all recent timesheet
  // stamps with date and culmulative hours
  render() {
    return (
      <FluxComponent connectToStores={{
        kronos: store => ({
          timesheet: store.getTimesheetByName(this.props.dateRange)
        })
      }}>
        <PayPeriod {...this.props}/>
      </FluxComponent>
    )
  }
}

class PayPeriod extends React.Component {
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  }
  componentDidMount() {
    flux.getActions('kronos').fetchTimesheet()
  }
  // PayPeriods creates a list of PayPeriod Components
  // Needs tested with more data
  render() {
    var id = getId()

    const { timesheet } = this.props

    const startDate = timesheet.startDate 
      ? timesheet.startDate.format('MMMM DD, YYYY')
      : ''
    const endDate = timesheet.endDate
      ? timesheet.endDate.format('MMMM DD, YYYY')
      : ''
    const dateRange = startDate + " - " + endDate
     
    return (
      <Page>
        <div className="row time-overview">
          <div className="col-xs-12">
            <div className="payperiod-overview">
              <h3 className="text-center"><small>{id}</small></h3>
              <PeriodHeader periodType={this.props.periodType} />
              <h6 className="text-center"><OtherPayPeriodLink {...this.props} /></h6>
              <h3 className="text-center"><small>{dateRange}</small></h3>
              <FluxComponent connectToStores={{
                  kronos: store => ({
                    timesheet: store.getTimesheetByName(this.props.dateRange),
                  })
              }}>
                <PayPeriodStats />
              </FluxComponent>
              { timesheet.days.length
                ? <PayPeriodDays days={timesheet.days} />
                 : <div className="alert alert-info text-center" role="alert">
                      No day data available.
                  </div>
              }
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

class OtherPayPeriodLink extends React.Component {
  // Shows a link to previous payperiod if current component's props.periodType="current"
  // else returns null
  render() {
    if(this.props.periodType == "Current") {
      return(
        <Link to="previous" name="period-link previous">Go To Previous Pay Period</Link>
      )
    } 
    if(this.props.periodType == "Previous") {
      return(
        <Link to="app" name="period-link current">Go To Current Pay Period</Link>
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