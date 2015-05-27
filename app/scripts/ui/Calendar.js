'use strict';

var React = require('react');

var Calendar = React.createClass({
  daysInMonth: function(year, month, day) {
    return new Date(year, month, 0).getDate();
  },
  dayOfDate: function(year,month,day) {
    return new Date(year, month, day).getDay();
  },
  render: function() {
    console.log(this.props.headers)
    var headers = !this.props.headers
               || this.props.headers.map((each) => { return (<th>{each}</th>) })

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
