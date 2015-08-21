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
    const day = moment(this.props.date)
    const startDate = this.props.startPeriodDate
    const endDate = this.props.endPeriodDate

    var url_date
    const url_day = day.format("D")
    if(day.isBetween(startDate-1, endDate+1)) {
      url_date = day.format("YYYY-MM-DD")
    } else {
      url_date = null
    }

    return (
      <div>
        {url_date 
         ? <Link to="day" params={{date: url_date}} >
            {url_day}
           </Link>
         : <p>{url_day}</p>
        }
      </div>
    )
  }
}
DayOverviewCalendar.propTypes = {
  date: PropTypes.string,
}

