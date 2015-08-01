/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
require('babel/polyfill');
import React from "react"
import Router, { Route, RouteHandler, DefaultRoute, NotFoundRoute} from "react-router"
import { Resolver } from "react-resolver"
import { createRedux } from "redux"
import { Provider } from "redux/react"
import CalendarOverview from "./components/CalendarOverview"
import DayOverview from "./components/DayOverview/DayOverview"
import Main from "./components/Main/Main"
import NotFound from "./components/NotFound/NotFound"
import PayPeriodOverview from "./components/PayPeriodOverview/PayPeriodOverview"
import FluxComponent from 'flummox/component';
import flux from "./flux/flux"


const mountNode = document.getElementById("app")

class App extends React.Component {
  render() {
    return (
      <FluxComponent flux={flux}>
        <Main />
      </FluxComponent>
    )
  }
}

// Pay period ranges are 7 days from Saturday - Sunday

// The date range of the current pay period should be
// today - last Sunday.  
// Can have 1 to 7 days of data 
// e.g. 06/30/2015  - 06/26/2015
class CurrentPayPeriod extends React.Component {
  render() {
    // "Today" = 05/15/2015
    return(
      <PayPeriodOverview dateRange="5/10/2015 - 5/15/2015" periodType="Current" />
    )
  }
}


// The date range of the previous pay period should be
// (two Sunday's ago from today) - last Saturday
// Will always have 7 days of data
// e.g. 06/19/2015  - 06/25/2015
class PreviousPayPeriod extends React.Component {
  render() {
    return(
      <PayPeriodOverview dateRange="5/3/2015 - 5/9/2015" periodType="Previous" />
    )
  }
}

const routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={CurrentPayPeriod} />
    <Route name="day" path="day/:date" handler={DayOverview} />
    <Route name="previous" path="previous" handler={PreviousPayPeriod} />
    <NotFoundRoute handler={NotFound} />
  </Route>
)

Router.run(routes, (Handler, state) => {
  const params = state.params
  Resolver.render(<Handler params={params}/>, mountNode)
})
