/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react'
import Router, { Link } from "react-router"
import _ from 'lodash'

export default class PayPeriodDays extends React.Component {
  // Day component displays a date and the total number
  // of hours worked that day. Both date and hours are 
  // passed through props.
  render() {
    const { days } = this.props

    const rows = _.get(this.props, 'days', [])
        .map(each => <Row {...each} />)

    return (
      <table className="table table-hover">
        <tr>
          <th>Date</th>
          <th className="text-center">Hours Worked</th>
          <th className="text-center">PTO</th>
          <th className="text-center">OT</th>
          <th className="text-center">Total</th>
        </tr>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class Row extends React.Component {
  static propTypes ={
    totals: React.PropTypes.string.isRequired,
  }
  static contextTypes = {
    router: React.PropTypes.func.isRequired,
  }
  handleClick = () => {
    this.context.router.transitionTo(
        'day', { date: this.props.date.format('YYYY-MM-DD') })
  }
  render() {
    const { totals, total, date } = this.props
    const grandTotal = total ? total : '0.00'
    const workedTotal = _.chain(totals)
        .find(total => total.payCodeId == "134")
        .get('amountInTime', 0)
        .thru(total => total.toFixed(2))
        .value()
    const overtimeTotal = _.chain(totals)
        .find(total => total.payCodeId == "141")
        .get('amountInTime', 0)
        .thru(total => total.toFixed(2))
        .value()
    const ptoTotal = _.chain(totals)
        .find(total => total.payCodeId == "501")
        .get('amountInTime', 0)
        .thru(total => total.toFixed(2))
        .value()
    return (
      <tr className="active" onClick={this.handleClick}>
        <td>{date.format("ddd M/D")}</td>
        <td className="text-center"><span className="badge">{workedTotal}</span></td>
        <td className="text-center"><span className="badge">{ptoTotal}</span></td>
        <td className="text-center"><span className="badge">{overtimeTotal}</span></td>
        <td className="text-center"><span className="badge">{grandTotal}</span></td>
      </tr>
    )
  }
}

