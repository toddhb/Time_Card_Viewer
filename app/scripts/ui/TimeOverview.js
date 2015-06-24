import React from "react"
import Router, { RouteHandler, Link} from "react-router"
import _ from "underscore"
import moment from "moment"
import FluxComponent from 'flummox/component';
import flux from "../stores/flux"

export default class WeekOverview extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['days']}>
        <Weeks {...this.props}/>
      </FluxComponent>
    )
  }
}

class Weeks extends React.Component {
  render() {
    var weeks = _.chain(this.props.days)
      .groupBy((element, index) => Math.floor(index/7))
      .map(eachWeek => {
        const days = _.chain(eachWeek).map(eachDay => <Day {...eachDay} />)
        const start_date = _.first(eachWeek).date.format("MMMM DD")
        const end_date = _.last(eachWeek).date.format("MMMM DD")
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
    const children = this.props.children
    const startDate = children.first().value().props.date.format("MMMM DD")
    const endDate = children.last().value().props.date.format("MMMM DD")
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
