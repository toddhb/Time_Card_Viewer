'use strict';

import React from 'react'
import { Resolver } from "react-resolver"
import Router from 'react-router'
const RouteHandler = Router.RouteHandler;
const Link = Router.Link;
import _ from 'underscore'
import moment from 'moment'


class WeekOverview extends React.Component {
  render() {
    var weeks = _.chain(this.props.days)
      .groupBy((element, index) => Math.floor(index/7))
      .map(eachWeek => {
        var days = _.chain(eachWeek).map(eachDay => <Day {...eachDay} />)
        var start_date = _.first(eachWeek).date.format("MMMM DD")
        var end_date = _.last(eachWeek).date.format("MMMM DD")
        return (<Week>{days}</Week>)
      })
    return (
      <div className="row time-overview">{weeks}</div>
    )
  }
}

WeekOverview.displayName = "WeekOverview"

class Week extends React.Component {
  render() {
    var children = this.props.children
    var startDate = children.first().value().props.date.format("MMMM DD")
    var endDate = children.last().value().props.date.format("MMMM DD")
    return (
      <div className="col-xs-12 time-entries">
        <h3>{startDate + " - " + endDate}</h3>
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
          <Link to="day" params={{ date: this.props.date}}>
            <p>{this.props.date.format("dddd")} <span className="date">{this.props.date.format("MMMM DD")}</span></p>
            <p><span className="hours">{this.props.hours}</span> hours worked</p>
          </Link>
        </div>
      </li>
    )
  }
}

var today = moment()

export default Resolver.createContainer(WeekOverview, {
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },
  resolve: {
    params: (props, context) => {
        return props.params
    },
    days: (props, context) => {
      return _.range(0, 28).map(i => {
          return {
            date: moment().add(i, "days"),
            hours: _.random(0, 24) 
          }
      });
    }
  }
})
