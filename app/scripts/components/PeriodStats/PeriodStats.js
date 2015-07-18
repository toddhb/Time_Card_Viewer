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
  // Returns a three-columned Period Stats from the period's context
    render() {
    return (
      <FluxComponent connectToStores={['currentPeriod']}>
        <PeriodTotals {...this.props}/>
      </FluxComponent>
    )
  }
}


class PeriodTotals extends React.Component {
  render() {
    // TODO:  Where do these numbers come from in the current period API results?
    var foo = (9.13 + 10.73 + 9.63 + 0)
    const hoursWorked = Math.round((foo) * 100) / 100 // Me faking the math. Rounding the total hours to 2 decimal places
    const hoursScheduled = 55
    const overTimeWorked = 0 

    return (
      <div className="clearfix" style={{minHeight: 170 + "px"}}>
        <hr/>
        <div className="col-xs-12 col-md-4 has-right-border">
          <div>
            <p className="pull-left">Hours Worked</p>
            <p className="text-right"><strong>{hoursWorked}</strong></p>
          </div>
          <div>
            <p className="pull-left">Hours Scheduled</p>
            <p className="text-right"><strong>{hoursScheduled}</strong></p>
          </div>
          <div>
            <p className="pull-left">Overtime Hours</p>
            <p className="text-right"><strong>{overTimeWorked}</strong></p>
          </div>
        </div>
        <div className="col-md-4 hidden-xs">
          <HoursPerCode />
        </div>
        <div className="col-md-2 hidden-xs">
          <LatePunches />
        </div>
        <div className="col-md-2 hidden-xs">
          <HoursPTO />
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
    const PTOHours = 0
    return (
      <div>
        <p className="text-center"><strong>{PTOHours}</strong></p>
        <h4 className="text-center">PTO</h4>
        <h5 className="text-center"><small>Needs Implementing</small></h5>
      </div>
    );
  }
}

class LatePunches extends React.Component {
  // Returns the number times the pay period has late punches
  render() {
    // TODO: Replace with appropriate API result
    const TimesLate = 0
    return (
      <div>
        <p className="text-center"><strong>{TimesLate}</strong></p>
        <h4 className="text-center">Late Punches</h4>
        <h5 className="text-center"><small>Needs Implementing</small></h5>
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