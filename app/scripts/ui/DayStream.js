'use strict';

import React from 'react'
import { Resolver } from "react-resolver"
import Calendar from './Calendar.js'
import moment from 'moment'
import _ from 'underscore'

class DayStream extends React.Component {                              
  render() {  
    const date = moment(this.props.params.date)
    const year = date.format("YYYY")
    const month = date.format("MM")
    const dayHeaders = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    const punchLog = _.chain(this.props.dayStamps)
       .sortBy(punchLog => punchLog.time) 
       .map(punch => <Entry type={punch.type} time={punch.time} suffix={punch.suffix} />)
    return (
      <div>  
        <DayHeader date={date}/> 
        <div className="row">
          <div className="col-xs-12 col-md-7">
            {punchLog}
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="calendar hidden-xs hidden-sm">
              <Calendar year={year} month={month} headers={dayHeaders} />
            </div>
              <DayStats payPeriod={this.props.payPeriod}/>
            </div>
          </div>
      </div>
    )
  }
}

DayStream.displayName = "DayStream"

class DayHeader extends React.Component {
  render() { 
    const displayDate = this.props.date.format("MMMM DD") 
    return ( 
      <div className="row">
        <div className="col-xs-2">
          <PrevDayButton />
        </div>
        <div className="col-xs-8">
          <h4 className="text-center">{displayDate}</h4>
        </div>
        <div className="col-xs-2">
          <NextDayButton />
        </div>
        <div className="row"><br/></div> {/*For space*/}
        <div className="row"><br/></div>
      </div>
    )
  }
}

class PrevDayButton extends React.Component {
  handleClick() {
    // stuff with the state 
  }
  render() { 
    return(
      <button onClick={this.handleClick} type="button" className="btn btn-default pull-left">
        <span className="glyphicon glyphicon-chevron-left"></span>
      </button> 
    )
  }
}

class NextDayButton extends React.Component {
  handleClick() {
    // stuff with the state 
  }
  render() { 
    return(
      <button type="button" className="btn btn-default pull-right">
        <span className="glyphicon glyphicon-chevron-right "></span>
      </button>
    )
  }
}

class DayStats extends React.Component {
  render() {
    const payPeriod = this.props.payPeriod
    return (
      <div className="panel panel-default period-totals">
        <div className="panel-heading">
          <h4 className="panel-title"><a href="payperiod">{payPeriod.start} - {payPeriod.end} Period</a> Totals</h4>
        </div>
        <div className="panel-body">
          <p><strong>Total Hours Worked:</strong> <span className="period-stat">{payPeriod.hoursWorked}</span></p>
          <p><strong>Total Hours Scheduled:</strong> <span className="period-stat">{payPeriod.hoursScheduled}</span></p>
          <p><strong>Other Fact</strong> <span className="period-stat">{payPeriod.etc}</span></p>
        </div>
      </div>   
    )
  }
}

class Entry extends React.Component {
  render() {
    var action = '';
    var panelClass = 'panel panel-default time-entry';
    var glyphClass = 'glyphicon pull-left';

    // There's a better way than these ifs, I'm sure of it!
    if(this.props.type == 'timeIn') {
      action = "Clocked in at ";
      panelClass += " " + "time-in";   
      glyphClass += " " + "glyphicon-ok-sign";
    }
    if(this.props.type == 'timeOut') {
      action = "Clocked out at ";
      panelClass += " " + "time-out";   
      glyphClass += " " + "glyphicon-minus-sign";
    }
    if(this.props.type == 'scheduledIn') {
      action = "Shift started at ";
      panelClass += " " + "shift-info";   
      glyphClass += " " + "glyphicon-time";
    }
    if(this.props.type == 'scheduledOut') {
      action = "Shift ended at ";
      panelClass += " " + "shift-info";   
      glyphClass += " " + "glyphicon-time";
    }
    return ( 
      <div className={panelClass}>
        <div className="panel-body">
          <span className={glyphClass}></span>
          <p>{action}<strong>{this.props.time}{this.props.suffix}</strong> </p>
        </div>
      </div> 
    )
  }
}

export default Resolver.createContainer(DayStream, {
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },
  resolve: {
    params: (props, context) => {
      return props.params
    },
    payPeriod: (props, context) => {
      return {
        start: "May 1",
        end: "May 15",
        hoursWorked: "50",
        hoursScheduled: "55",
        etc: "Wow!" // Replace with...
      }
    },
    dayStamps: (props, context) => {
      return [
        {
          type:   "scheduledIn",
          time:   "08:00",  // Assuming this comes parsed from 24-hr format
          suffix: "a.m."
        },
        {
          type:   "scheduledOut",
          time:   "17:00",
          suffix: "p.m."   
        },
        {
          type:   "timeIn",
          time:   "07:59",
          suffix: "a.m."   
        },
        {
          type:   "timeIn",
          time:   "12:00",
          suffix: "a.m."     
        },
        {
          type:   "timeOut",
          time:   "13:31",
          suffix: "p.m."   
        },
        {
          type:   "timeOut",
          time:   "16:48",
          suffix: "p.m."     
        }
      ]
    }
  }
})
