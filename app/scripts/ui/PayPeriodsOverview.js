import React from "react"
import Router, { RouteHandler, Link} from "react-router"
import _ from "underscore"
import moment from "moment"
import FluxComponent from 'flummox/component';
import flux from "../stores/flux"
import AlertBar from "./AlertBar.js"

export default class PayPeriodsOverview extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['days']}>
        <PayPeriods {...this.props}/>
      </FluxComponent>
    )
  }
}

class PayPeriods extends React.Component {
  render() {
    var weeks = _.chain(this.props.days)
      .groupBy((element, index) => Math.floor(index/7))
      .map(eachWeek => {
        const days = _.chain(eachWeek).map(eachDay => <Day {...eachDay} />)
        const start_date = _.first(eachWeek).date.format("MMMM DD")
        const end_date = _.last(eachWeek).date.format("MMMM DD")
        return (<PayPeriod>{days}</PayPeriod>)
      })
    return (
      <div className="row time-overview">
        <div className="col-xs-12">
            <AlertBar />
            {weeks}
        </div>
      </div>
    )
  }
}

class PayPeriod extends React.Component {
  render() {
    const children = this.props.children
    const startDate = children.first().value().props.date.format("MMMM DD")
    const endDate = children.last().value().props.date.format("MMMM DD")
    return (
      <div className="payperiod-overview ">
        <h3><a href="#">{startDate + " - " + endDate}</a></h3> {/*This should be wrapped with something like <Link to="payperiod" params={{ date: startDate}}>*/}
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
      <li className="day-as-txt">
        <div className="time-entry">
          <Link to="day" params={{ date: this.props.date}}>
            <div className="date-side-box">
                <p className="day-as-text text-center">{this.props.date.format("dddd")}</p>
                <p className="date text-center">{this.props.date.format("M.")}<span className="day-as-number">{this.props.date.format("D")}</span></p>
            </div>
            <p className="hours-worked-text"><span className="hours-worked-number text-center">{this.props.hours} </span>
            hours worked</p>
          </Link>
        </div>
      </li>
    )
  }
}
