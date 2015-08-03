/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React, { PropTypes } from 'react'
import { Link } from "react-router"
import calendar from "../Calendar/Calendar.js"
import moment from 'moment'

@calendar
export default class DayOverviewCalendar extends React.Component {
  render() {
    const url_date = moment(this.props.date).format("YYYY-MM-DD")
    const url_day = moment(this.props.date).format("D")
    return (
      <div>
        <Link to="day" params={{date: url_date}} >
          {url_day}
        </Link>
    </div>
    )
  }
}
DayOverviewCalendar.propTypes = {
  date: PropTypes.string,
}

