/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react'
import moment from "moment"
import Calendar from "./Calendar.js"
    
class CalendarMonthHeader extends React.Component {
  render() {
    const month = moment().format("MMMM"); 
    return (
      <h3 className="text-center">{month}</h3>
    ) 
  } 
}
    
export default class CalendarOverview extends React.Component {
  render() {
    const date = moment()
    const year = date.format("YYYY")
    const month = date.format("MM")
    const dayHeaders = [ "S", "M", "T", "W", "T", "F", "S" ]
    return (
        <div className="full-height-calendar">
            <CalendarMonthHeader />
            <Calendar year={year} month={month} headers={dayHeaders} />
        </div>
    ) 
  }
}
