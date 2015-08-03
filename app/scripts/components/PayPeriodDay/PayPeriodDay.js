/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react'
import { Link } from "react-router"

export default class PayPeriodDay extends React.Component {
  // Day component displays a date and the total number
  // of hours worked that day. Both date and hours are 
  // passed through props.
  render() {
    const { date, total } = this.props
    const amountInTime = total ? total : '0:00'
    return (
      <li className="day-as-txt">
        <div className="time-entry shadowed-box">
          <Link to="day" params={{ date: date.format("YYYY-MM-DD")}}>
            <div className="date-side-box">
                <p className="day-as-text text-center">{date.format("dddd")}</p>
                <p className="date text-center"><span className="day-as-number">{date.format("M/D")}</span></p>
            </div>
            <p className="hours-worked-text"><span className="hours-worked-number text-center">{total}</span> hours worked</p>
          </Link>
        </div>
      </li>
    )
  }
}