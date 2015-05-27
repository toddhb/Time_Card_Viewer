'use strict';

var React = require('react');

var Calendar = React.createClass({
  daysInMonth: function(year, month, day) {
    return new Date(year, month, 0).getDate();
  },
  daysInPreviousMonth: function(year, month) {
    var date = new Date(year, month, 0)
    date.setMonth(date.getMonth()-1)
    return this.daysInMonth(date.getYear(), date.getMonth())
  },
  dayOfDate: function(year,month,day) {
    return new Date(year, month, day).getDay();
  },
  render: function() {
    var headers = !this.props.headers
               || this.props.headers.map((each) => { return (<th>{each}</th>) })

    var day = this.dayOfDate(+this.props.year, +this.props.month, 1)
    var daysInMonth = this.daysInMonth(+this.props.year, +this.props.month)
    var daysInPreviousMonth = this.daysInPreviousMonth(+this.props.year, +this.props.month)

    console.log("day: " + day)
    console.log("daysInMonth: " + daysInMonth)
    console.log("range: " + (7-((day+daysInMonth)%7)))
    console.log("day+daysInMonth: " + (day+daysInMonth))
    console.log("(day+daysInMonth)%7: " + (day+daysInMonth)%7)

    var days = [].concat(
        _.range(daysInPreviousMonth-day+1, daysInPreviousMonth+1)
         .map((each) => { return (<td className="previousMonth">{each}</td>) })
      ).concat(
        _.range(1, daysInMonth+1)
         .map((each) => { return (<td>{each}</td>) })
      ).concat(
        _.range(1, (7-((day+daysInMonth)%7))%7+1)
         .map((each) => { return (<td className="nextMonth">{each}</td>) })
      )

    var rows = _.chain(days)
      .groupBy((element, index) => { return Math.floor(index/7); })
      .map((eachWeek) => { return <tr className="week">{eachWeek}</tr>})

    return (
      <div className="container-fluid">
        <div className="calendar">
          <div className="row calendar-row">
            <div>
              <table width="100%">
                {headers}
                {rows}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
    
module.exports = Calendar
