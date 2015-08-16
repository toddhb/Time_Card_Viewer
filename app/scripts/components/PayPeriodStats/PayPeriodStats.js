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

export default class PayPeriodStats extends React.Component {
  render() {
    const { timesheet } = this.props
    const totals = timesheet.totals

    const allPaidHours = _.chain(totals)
        .find(each => each.payCodeId == "142")
        .get('amountInTime', 0)
        .value()
    const allOvertime = _.chain(totals)
        .find(each => each.payCodeId == "141")
        .get('amountInTime', 0)
        .value()
    const allPTO = _.chain(totals)
        .find(each => each.payCodeId == "501")
        .get('amountInTime', 0)
        .value()

    return (
      <div className="well well-sm clearfix">
        <div className="col-xs-12 col-md-4">
          <p className="pull-left">Hours Worked</p>
          <p className="badge pull-right"><strong>{allPaidHours}</strong></p>
        </div>
        <div className="col-xs-12 col-md-4">
          <p className="pull-left">OT Hours</p>
          <p className="badge pull-right"><strong>{allOvertime}</strong></p>
        </div>
        <div className="col-xs-12 col-md-4">
          <p className="pull-left">PTO Hours</p>
          <p className="badge pull-right"><strong>{allPTO}</strong></p>
        </div>
      </div>
    );
  }
}

class HoursPTO extends React.Component {
  // Returns the number of PTO hours used in the pay period
  render() {
    // TODO: Replace with appropriate API result
    const {AmountInTime, AmountInCurrency} = this.props.allPTO
    return (
      <div>
        <p className="text-center"><strong>{AmountInTime}</strong></p>
        <h4 className="text-center">PTO</h4>
      </div>
    );
  }
}

class LatePunches extends React.Component {
  // Returns the number times the pay period has late punches
  render() {
    const { Timesheet } = this.props
    const timesLate = _.chain(Timesheet)
        .get('TotaledSpans.TotaledSpan', {})
        .pluck('Exceptions')
        .compact()
        .pluck('TimekeepingException')
        .map(each => {
          if (_.isObject(each) && each.ExceptionTypeName == "LATE") {
            return 1
          } else {
            return _.chain(each)
             .filter(each => each.ExceptionTypeName == "LATE") 
             .value()
             .length
          }
        })
        .reduce((memo, each) => memo + each)
        .value()
    return (
      <div>
        <p className="text-center"><strong>{timesLate}</strong></p>
        <h4 className="text-center">Late Punches</h4>
      </div>
    );
  }
}
// 