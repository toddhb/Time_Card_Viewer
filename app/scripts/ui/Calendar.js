'use strict';

import React from 'react'
import _ from 'underscore'

export default class Calendar extends React.Component {
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
  render() {
    const headers = !this.props.headers
               || this.props.headers.map(each => <th>{each}</th>)

    const day = this.dayOfDate(+this.props.year, +this.props.month, 1)
    const daysInMonth = this.daysInMonth(+this.props.year, +this.props.month)
    const daysInPreviousMonth = this.daysInPreviousMonth(+this.props.year, +this.props.month)

    const days = [].concat(
        _.range(daysInPreviousMonth-day+1, daysInPreviousMonth+1)
         .map(i => <td className="previousMonth">{i}</td>)
      ).concat(
        _.range(1, daysInMonth+1)
         .map(i => <td>{i}</td>)
      ).concat(
        _.range(1, (7-((day+daysInMonth)%7))%7+1)
         .map(i => <td className="nextMonth">{i}</td>)
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
