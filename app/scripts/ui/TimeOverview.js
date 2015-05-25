'use strict';

var React = require('react');

var days = [
  {
    dayOfTheWeek: "Sunday",
    date: "May 1",
    hours: 8
  },{
    dayOfTheWeek: "Monday",
    date: "May 2",
    hours: 5
  },{
    dayOfTheWeek: "Tuesday",
    date: "May 3",
    hours: 8
  },{
    dayOfTheWeek: "Wednesday",
    date: "May 4",
    hours: 8
  },{
    dayOfTheWeek: "Thursday",
    date: "May 5",
    hours: 8
  },{
    dayOfTheWeek: "Friday",
    date: "May 6",
    hours: 8
  },{
    dayOfTheWeek: "Saturday",
    date: "May 7",
    hours: 8
  },{
    dayOfTheWeek: "Sunday",
    date: "May 8",
    hours: 8
  },{
    dayOfTheWeek: "Monday",
    date: "May 9",
    hours: 8
  },{
    dayOfTheWeek: "Tuesday",
    date: "May 10",
    hours: 8
  },{
    dayOfTheWeek: "Wednesday",
    date: "May 11",
    hours: 8
  },{
    dayOfTheWeek: "Thursday",
    date: "May 12",
    hours: 8
  },{
    dayOfTheWeek: "Friday",
    date: "May 13",
    hours: 8
  },{
    dayOfTheWeek: "Saturday",
    date: "May 14",
    hours: 8
  }
]

var WeekOverview = React.createClass({
  getInitialState: function() {
    return {
      days: days
    }
  },
  render: function() {
    var weeks = _.chain(this.state.days)
      .groupBy(function(element, index){ return Math.floor(index/7); })
      .map(function(eachWeek) {
        var days = _.chain(eachWeek).map(function(eachDay) {
          return (
            <Day dayOfTheWeek={eachDay.dayOfTheWeek} date={eachDay.date}
                 hours={eachDay.hours} url="/day.html"/>
          )
        })
        var start_date = _.first(eachWeek).date
        var end_date = _.last(eachWeek).date
        return <Week date={start_date+" - "+end_date}>{days}</Week>
      })
    return (
      <div className="row time-overview">{weeks}</div>
    )
  }
});

var Week = React.createClass({
  render: function() {
    return (
      <div className="col-xs-12 time-entries">
        <h3>{this.props.date}</h3>
        <ul className="week-overview clearfix">
          {this.props.children}
        </ul>
      </div>
    );
  }
});

var Day = React.createClass({
  render: function() {
    return (
      <li className="day">
        <div className="time-entry">
          <a href={this.props.url}>
            <p>{this.props.dayOfTheWeek} <span className="date">{this.props.date}</span></p>
            <p><span className="hours">{this.props.hours}</span> hours worked</p>
          </a>
        </div>
      </li>
    )
  }
});

module.exports = WeekOverview;
