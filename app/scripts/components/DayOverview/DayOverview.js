/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React, { PropTypes } from "react"
import { Link } from "react-router" 
import moment from "moment"
import _ from "lodash"
import FluxComponent from 'flummox/component';
import flux from "../../flux/flux"
import DayOverviewCalendar from '../DayOverviewCalendar/DayOverviewCalendar'
import Page from '../Page/Page'
import { getId } from '../Login/Login'

export default class DayOverview extends React.Component {
  render() {
    return (
      <FluxComponent 
        connectToStores={['kronos']}
        stateGetter={([kronos]) => {
          const { params } = this.props
          const date = moment(params.date, 'YYYY-MM-DD')
          const day = kronos.getDay(date)
          const inPunches = kronos.getInPunchesForDate(date)
          const outPunches = kronos.getOutPunchesForDate(date)
          const exceptions = kronos.getExceptionsForDate(date)
          const startPeriodDate = kronos.getPeriodStartDate()
          const endPeriodDate = kronos.getPeriodEndDate()
          return {
            day,
            inPunches, 
            outPunches,
            exceptions,
            startPeriodDate,
            endPeriodDate,
          }
        }}
      >
        <Overview {...this.props} />
      </FluxComponent>
    )
  }
}

class Overview extends React.Component {                              
  render() {  
    // XXX Hack! Need to pull from API in a better way
    let lastKronosTimeZone = ""

    const { params, day, inPunches, outPunches, exceptions, startPeriodDate, endPeriodDate} = this.props

    const inPunchesChain = _.chain(inPunches)
        .map(each => {
          // XXX Hack! Need to pull from API in a better way
          //lastKronosTimeZone = eachPunch.KronosTimeZone
          return _.assign(each, {
            type: "InPunch",
          })
        })
    const outPunchesChain = _.chain(outPunches)
        .map(each => {
          // XXX Hack! Need to pull from API in a better way
          //lastKronosTimeZone = eachPunch.KronosTimeZone
          return _.assign(each, {
            type: "OutPunch",
          })
        })
    const ExceptionsChain = _.chain(exceptions)
        .map(each => {
          // XXX Hack! Need to pull from API in a better way
          //lastKronosTimeZone = eachPunch.KronosTimeZone
          return _.assign(each, {
            type: "Exception",
          })
        })
    const execp = ExceptionsChain
    /*const execp = ExceptionsChain
		.map(punch => <Entry {...punch} />)
       .value()*/
    const punches = outPunchesChain
       .concat(inPunchesChain.value())
       //.concat(shiftsChain.value())
       .sortBy('time')
       .map(punch => <Entry {...punch} />)
       .value()
	   
	   
    const date = moment(params.date)
    const year = date.format("YYYY")
    const month = date.format("MM")

    const dayHeaders = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
    
    return (
      <Page>  
        <DayHeader {...this.props} /> 
        <div className="row">
          <div className="col-xs-12 col-md-7">
            { punches.length > 0 ? <table className="table"><tbody>{punches}</tbody></table> : <div><h3 className="text-center">No punches today</h3></div>}
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="panel hidden-xs hidden-sm"
                 style={{padding: 10, marign: 0, border: 0}}>
              <DayOverviewCalendar {...this.props} year={year} month={month-1} headers={dayHeaders}  />
            </div>
              <FluxComponent connectToStores={{
                  kronos: store => ({
                    day: store.getDay(moment(this.props.params.date, 'YYYY-MM-DD'))
                  })
              }}>
                <DayStats />
              </FluxComponent>
          </div>
        </div>
      </Page>
    )
  }
}

class DayHeader extends React.Component {
  render() { 
    var id = getId()

    const displayDate = this.props.day.date.format("dddd, MMMM DD, YYYY")

    return ( 
      <div className="row">
        <h3 className="text-center"><small>{id}</small></h3>
        <div className="col-xs-2">
          <ChangeDayLink {...this.props} direction="Previous" />
        </div>
        <div className="col-xs-8">
          <h4 className="text-center">{displayDate}</h4>
        </div>
        <div className="col-xs-2">
          <ChangeDayLink {...this.props} direction="Next" />
        </div>
        <div className="row"><br/></div> {/*For space*/}
        <div className="row"><br/></div>
      </div>
    )
  }
}

class DayStats extends React.Component {
  render() {
    const { totals, total } = this.props.day ? this.props.day : ""
	
    const grandTotal = total ? total : '0:00'
    const workedTotal = _.chain(totals)
        .find(total => total.payCodeId == "134")
        .get('amountInTime', 0)
        .value()
    const overtimeTotal = _.chain(totals)
        .find(total => total.payCodeId == "141")
        .get('amountInTime', 0)
        .value()
    const ptoTotal = _.chain(totals)
        .find(total => total.payCodeId == "501")
        .get('amountInTime', 0)
        .value()
    return (
      <div className="panel period-totals">
        <div className="panel-body">
          <p><strong>Hours:</strong> <span className="period-stat">{workedTotal}</span></p>
		  <p><strong>PTO:</strong> <span className="period-stat">{ptoTotal}</span></p>
		  <p><strong>OT:</strong> <span className="period-stat">{overtimeTotal}</span></p>
		  <p><strong>Total:</strong> <span className="period-stat">{grandTotal}</span></p>
        </div>
      </div>   
    )
  }
}

class Entry extends React.Component {
  render() {
    const panelClassDefault = "panel time-entry day"
    const glyphClassDefault = "day-icon"

    const settings = {
      InPunch: {
        action: "Clocked in",
        panelClass: panelClassDefault + " " + "time-in",
        glyphClass: "icon-truck"
      },
      OutPunch: {
        action: "Clocked out",
        panelClass: panelClassDefault + " " + "time-out",
        glyphClass: "icon-truck"
      },
      scheduledIn: {
        action: "Shift started",
        panelClass: panelClassDefault + " " + "shift-info",
        glyphClass: "icon-clock"
      },
      scheduledOut: {
        action: "Shift ended",
        panelClass: panelClassDefault + " " + "shift-info",
        glyphClass: "icon-clock"
      },
	  Exception: {
        action: "Exception",
        panelClass: panelClassDefault + " " + "time-in",
        glyphClass: "icon-truck"
      },
    }

    const {action, panelClass, glyphClass} = settings[this.props.type]
    if(this.props.type == "Exception") {
      const expection = this.props.typeName
  		return (
  			<tr>
  			  <td><ActionIcon action = {action}/></td>
  			  <td>{expection}</td>
  			  <td></td>
  			  <td></td>
  			</tr>	
  		)					
	} else {
		const time = moment(this.props.time).format('h:mma') 
		const code = this.props.laborName.match(/[^/]+\/[^/]+$/)
  		return ( 
  			<tr>
  			  <td><ActionIcon action = {action}/></td>
  			  <td>{action}</td>
  			  <td>{time}</td>
  			  <td>{code}</td>
  			</tr>
  		)
    }
  }
}



class ActionIcon extends React.Component {
    render () {
       if (this.props.action == "Clocked in") {
         return (
           <img src={"/images/truck-right.png"} width="39" height="20" /> 
         )
       }

        if (this.props.action == "Clocked out") {
         return (
           <img src={"/images/truck-left.png"} width="39" height="20" /> 
         )
       }

        if (this.props.action == "Shift started" || "Shift ended") {
         return (
           <img src={"/images/three_oclock.png"} width="20" height="20" /> 
         )
       }

        else {
           return null
       }
    }
}

class ChangeDayLink extends React.Component {
  render() {
    const startDate = this.props.startPeriodDate 
    const endDate = this.props.endPeriodDate
    const currentDate = this.props.day.date

    var newDate = currentDate.clone()
    var arrowCode  

    if(this.props.direction === "Previous") {
      arrowCode = '\u00ab'
      newDate = newDate.subtract(1, "days")
      
      // This should be checking if the newDate.isBefore(startDate) or isSame(startDate), but store data
      // holds information for startDate + 1 to endDate - 1
      if(!newDate.isBefore(startDate)) {
        newDate = newDate.format("YYYY-MM-DD")
      } else {
        //console.log("newDate null because " + newDate.toString("MM-DD") + " is before " + startDate.toString("MM-DD"))
        newDate = null
      }
    }

    if(this.props.direction == "Next") {
      arrowCode = '\u00bb'
      newDate = newDate.add(1, "days")

      // This should be checking if the newDate.isAfter(startDate) or isSame(startDate) per note above
      if(!newDate.isAfter(endDate)) {
        newDate = newDate.format("YYYY-MM-DD")
      } else {
        //console.log("newDate null because " + newDate.toString("MM-DD") + " is after " + endDate.toString("MM-DD"))
        newDate = null
      }
    } 

    return (
      <div>
      { newDate
        ? <Link to="day" params={{date: newDate}} 
                   type="button" className="pull-left subtle-btn">
              <h4><strong>
                {arrowCode}
              </strong></h4>
            </Link>
        : null
      }
      </div>
    )
  }
}
ChangeDayLink.propTypes = { direction: React.PropTypes.oneOf(['Next', 'Previous']) };
