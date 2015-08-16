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
import _ from 'lodash'

export default class PayPeriodDay extends React.Component {
  // Day component displays a date and the total number
  // of hours worked that day. Both date and hours are 
  // passed through props.
    render() {
    const { date, total, totals } = this.props
    console.log(this.props.exceptions)
    const amountInTime = total ? total : '0:00'
    console.log(totals)

    const workedTotal = _.chain(totals)
        .find(each => each.payCodeId == "134")
        .get('amountInTime', 0)
        .value()

    const overtimeTotal = _.chain(totals)
        .find(each => each.payCodeId == "141")
        .get('amountInTime', 0)
        .value()

    const ptoTotal = _.chain(totals)
        .find(each => each.payCodeId == "501")
        .get('amountInTime', 0)
        .value()

    return (
      <tr className="active">
          <td>{date.format("dddd M/D")}</td>
          <td><span className="badge">{workedTotal}</span></td>
          <td><span className="badge">{ptoTotal}</span></td>
          <td><span className="badge">{overtimeTotal}</span></td>
          <td><span className="badge">{total}</span></td>
      </tr>
    )
  }
}