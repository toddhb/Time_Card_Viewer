'use strict';

var React = require('react');

var Calendar = React.createClass({
  daysInMonth: function(year, month, day) {
    return new Date(year, month, 0).getDate();
  },
  dayOfDate: function(year,month,day) {
    return new Date(year, month, day).getDay();
  },
  headers: function() {
     return this.props.headers || [
       "Sunday",  "Monday",  "Tuesday",  "Wednesday",
       "Thursday",  "Friday",  "Saturday"
     ]
  },
  render: function() {
    var headers = this.headers().map((each) => { return (<th>{each}</th>) });

    var day = this.dayOfDate(+this.props.year, +this.props.month, 1)
    var daysInMonth = this.daysInMonth(+this.props.year, +this.props.month, 1)

    var days = _.range(day+1).map((each) => {
        return (<td></td>)
      }).concat(
        _.range(1, (daysInMonth+1))
         .map((each) => { return (<td>{each}</td>) })
      ).concat(
        _.range(0, (7-((day+daysInMonth)%7)-1))
         .map((each) => { return (<td></td>) })
      )

    var rows = _.chain(days)
      .groupBy((element, index) => { return Math.floor(index/7); })
      .map((eachWeek) => { return <tr className="week">{eachWeek}</tr>})

    return (
      <div className="container-fluid">
        <div className="calendar">
          <div className="row month-title">
            <div className="col-xs-12">
              <h1>{this.props.month}</h1>
            </div>
          </div>
          <div className="row calendar-row">
            <div className="col-xs-12">
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
