import React from "react"
import { Link } from "react-router" 
import moment from "moment"
import _ from "underscore"
import Calendar from "./Calendar.js"
import FluxComponent from 'flummox/component';
import flux from "../stores/flux"

export default class DayOverview extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['daystream']}>
        <Overview {...this.props} />
      </FluxComponent>
    )
  }
}

class Overview extends React.Component {                              
  render() {  
    const date = moment(this.props.params.date)
    const year = date.format("YYYY")
    const month = date.format("MM")
    const dayHeaders = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    const punchLog = _.chain(this.props.dayStamps)
       .sortBy(punchLog => punchLog.time) 
       .map(punch => <Entry {...punch} />)
    return (
      <div>  
        <DayHeader date={date}/> 
        <div className="row">
          <div className="col-xs-12 col-md-7">
            {punchLog}
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="calendar hidden-xs hidden-sm">
              <Calendar year={year} month={month-1} headers={dayHeaders} />
            </div>
              <DayStats payPeriod={this.props.payPeriod}/>
            </div>
          </div>
      </div>
    )
  }
}

class DayHeader extends React.Component {
  render() { 
    const displayDate = this.props.date.format("MMMM DD") 
    return ( 
      <div className="row">
        <div className="col-xs-2">
          <Link to="day" params={{date: this.props.date.clone().subtract(1, "days")}} 
                type="button" className="btn btn-default pull-left">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </Link> 
        </div>
        <div className="col-xs-8">
          <h4 className="text-center">{displayDate}</h4>
        </div>
        <div className="col-xs-2">
          <Link to="day" params={{date: this.props.date.clone().add(1, "days")}} 
                type="button" className="btn btn-default pull-left">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </Link> 
        </div>
        <div className="row"><br/></div> {/*For space*/}
        <div className="row"><br/></div>
      </div>
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
    const panelClassDefault = "panel panel-default time-entry"
    const glyphClassDefault = "glyphicon pull-left"

    const settings = {
      timeIn: {
        action: "Clocked in at ",
        panelClass: panelClassDefault + " " + "time-in",
        glyphClass: glyphClassDefault + " " + "glyphicon-ok-sign"
      },
      timeOut: {
        action: "Clocked out at ",
        panelClass: panelClassDefault + " " + "time-out",
        glyphClass: glyphClassDefault + " " + "glyphicon-minus-sign"
      },
      scheduledIn: {
        action: "Shift started at ",
        panelClass: panelClassDefault + " " + "time-out",
        glyphClass: glyphClassDefault + " " + "glyphicon-time"
      },
      scheduledOut: {
        action: "Shift ended at ",
        panelClass: panelClassDefault + " " + "shiftl-info",
        glyphClass: glyphClassDefault + " " + "glyphicon-time"
      }
    }

    const {action, panelClass, glyphClass} = settings[this.props.type]

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