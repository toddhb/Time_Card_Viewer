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

export default class PeriodStats extends React.Component {
  render() {
    const { Timesheet } = this.props
    const totals = _.chain(Timesheet.PeriodTotalData.PeriodTotals.Totals.Total)
        .map(each => 
          _.chain(each)
           .pick("AmountInCurrency", "AmountInTime", "PayCodeId", "PayCodeName")
           .mapObject((value, key) => {
              switch (key) {
                case "AmountInCurrency":
                  return Number(value.replace(/,/g, ""))
                case "AmountInTime":
                  return Number(value.replace(":", "."))
                default:
                  return value
              }
           })
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
    return (
      <div className="clearfix" style={{minHeight: 170 + "px"}}>
        <hr/>
        <div className="col-xs-12 col-md-4 has-right-border">
          <div>
            <p className="pull-left">Hours Worked</p>
            <p className="text-right"><strong>{allPaidHours.AmountInTime}</strong></p>
          </div>
          <div>
            <p className="pull-left">Amount Made</p>
            <p className="text-right"><strong>${allPaidHours.AmountInCurrency}</strong></p>
          </div>
          <div>
            <p className="pull-left">Overtime Hours</p>
            <p className="text-right"><strong>{allOvertime.AmountInTime}</strong></p>
          </div>
          <div>
            <p className="pull-left">Overtime Amount Made</p>
            <p className="text-right"><strong>${allOvertime.AmountInCurrency}</strong></p>
          </div>
        </div>
        <div className="col-md-4 hidden-xs">
          <HoursPerCode />
        </div>
        <div className="col-md-2 hidden-xs">
          <FluxComponent connectToStores={['currentPeriod']}>
            <LatePunches />
          </FluxComponent>
        </div>
        <div className="col-md-2 hidden-xs">
          <HoursPTO allPTO={allPTO}/>
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
    const timesLate = _.chain(Timesheet.TotaledSpans.TotaledSpan)
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

class HoursPerCode extends React.Component {
  // Returns the hours break down per each code in the pay period
  render() {
    return (
      <div>
        <h4 style={{marginTop:0 + "px"}}>Hours per clock code</h4>
        <p>Needs implementing</p>
      </div>
    );
  }
}