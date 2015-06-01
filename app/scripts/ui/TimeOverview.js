'use strict';

var React = require('react');
var _ = require('underscore');
import { Resolver } from "react-resolver"

class WeekOverview extends React.Component {
  render() {
    var weeks = _.chain(this.props.days)
      .groupBy((element, index) => Math.floor(index/7))
      .map(eachWeek => {
        var days = _.chain(eachWeek).map(eachDay =>
            <Day dayOfTheWeek={eachDay.dayOfTheWeek} date={eachDay.date}
                 hours={eachDay.hours} url={'#/day/' + eachDay.date} />
          )
        var start_date = _.first(eachWeek).date
        var end_date = _.last(eachWeek).date
        return (<Week date={start_date+" - "+end_date}>{days}</Week>)
      })
    return (
      <div className="row time-overview">{weeks}</div>
    )
  }
}

WeekOverview.displayName = "WeekOverview"

class Week extends React.Component {
  render() {
    return (
      <div className="col-xs-12 time-entries">
        <h3>{this.props.date}</h3>
        <ul className="week-overview clearfix">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
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
}

export default Resolver.createContainer(WeekOverview, {
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },
  resolve: {
    days: (props, context) => {
      return [
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
            hours: 3
          },{
            dayOfTheWeek: "Wednesday",
            date: "May 4",
            hours: 7.5
          },{
            dayOfTheWeek: "Thursday",
            date: "May 5",
            hours: 30
          },{
            dayOfTheWeek: "Friday",
            date: "May 6",
            hours: 16
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
            hours: 55
          },{
            dayOfTheWeek: "Tuesday",
            date: "May 10",
            hours: 40
          },{
            dayOfTheWeek: "Wednesday",
            date: "May 11",
            hours: 6
          },{
            dayOfTheWeek: "Thursday",
            date: "May 12",
            hours: 4
          },{
            dayOfTheWeek: "Friday",
            date: "May 13",
            hours: 90
          },{
            dayOfTheWeek: "Saturday",
            date: "May 14",
            hours: 100
          }
        ]
    }
  }
})
