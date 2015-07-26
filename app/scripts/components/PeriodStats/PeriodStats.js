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

export default class PeriodStats extends React.Component {
  render() {
    const { Timesheet } = this.props

    const totals = _.chain(Timesheet)
        .get('PeriodTotalData.PeriodTotals.Totals.Total', [])
        .map(each => 
          _.chain(each)
           .pick("AmountInTime", "PayCodeId", "PayCodeName")
           .value()
        )
        .value()
    const allPaidHours = _.chain(totals) 
        .filter(each => each.PayCodeId == "142")
        .first()
        .value()
    const allOvertime = _.chain(totals) 
        .filter(each => each.PayCodeId == "141")
        .first()
        .value()
    const allPTO = _.chain(totals) 
        .filter(each => each.PayCodeId == "501")
        .first()
        .value()
    const amountInTime = allPaidHours ? allPaidHours.AmountInTime : 0
    return (
      <div className="clearfix" style={{minHeight: 170 + "px"}}>
        <hr/>
        <div className="col-xs-12 col-md-4 has-right-border">
          <div>
            <p className="pull-left">Hours Worked</p>
            <p className="text-right"><strong>{amountInTime}</strong></p>
          </div>
          <div>
            <p className="pull-left">Overtime Hours</p>
            <p className="text-right"><strong>{amountInTime}</strong></p>
          </div>
        </div>
        <div className="col-md-2 hidden-xs">
          <FluxComponent connectToStores={['kronos']}>
            <LatePunches />
          </FluxComponent>
        </div>
        <div className="col-md-2 hidden-xs">
        </div>
        <hr/>
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