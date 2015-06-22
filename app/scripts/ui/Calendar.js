'use strict';

import React from 'react'
import _ from 'underscore'


export const createCalendar = (Day) => class extends React.Component {
  daysInMonth(year, month) {
    return new Date(year, month+1, 0).getDate();
  }
  daysInPreviousMonth(year, month) {
    const date = new Date(year, month, 1)
    date.setMonth(date.getMonth()-1)
    return this.daysInMonth(date.getYear(), date.getMonth())
  }
  dayOfDate(year,month,day) {
    return new Date(year, month, day).getDay();
  }
  createDay(currentYear, currentMonth, year, month, day) {
    const date = new Date(year, month, day)
    return (
      <Day currentYear={currentYear}
           currentMonth={currentMonth}
           date={date} />
    )
  }
  render() {
    const headers = !this.props.headers
               || this.props.headers.map(each => <th>{each}</th>)
    const currentMonth = +this.props.month
    const currentYear = +this.props.year
    const day = this.dayOfDate(currentYear, currentMonth, 1)
    const daysInMonth = this.daysInMonth(currentYear, currentMonth)
    const daysInPreviousMonth = this.daysInPreviousMonth(currentYear, currentMonth)

    const days = [].concat(
        _.range(daysInPreviousMonth-day+1, daysInPreviousMonth+1)
         .map(i => <td className="previousMonth">
              {this.createDay(currentYear, currentMonth, currentYear, currentMonth-1, i)}
            </td>
          )
      ).concat(
        _.range(1, daysInMonth+1)
         .map(i => <td>
              {this.createDay(currentYear, currentMonth, currentYear, currentMonth, i)}
          </td>
        )
      ).concat(
        _.range(1, (7-((day+daysInMonth)%7))%7+1)
         .map(i => <td className="nextMonth">
              {this.createDay(currentYear, currentMonth, currentYear, currentMonth+1, i)}
          </td>
        )
      )

    const rows = _.chain(days)
      .groupBy((element, index) => Math.floor(index/7))
      .map(eachWeek => <tr className="week">{eachWeek}</tr>)

    return (
      <div className="container-fluid">
        <div className="calendar">
          <div className="row calendar-row">
            <div>
              <table width="100%" id="calendar">
                {headers}
                {rows}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

class DefaultDay extends React.Component {
  render() {
    return (
      <div>{this.props.date.getDate()}</div>
    )
  } 
}

export default createCalendar(DefaultDay)
