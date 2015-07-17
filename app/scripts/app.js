/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from "react"
import Router, { Route, RouteHandler, DefaultRoute, NotFoundRoute} from "react-router"
import { Resolver } from "react-resolver"
import { createRedux } from "redux"
import { Provider } from "redux/react"
import * as stores from "./stores"
import CalendarOverview from "./components/CalendarOverview"
import DayOverview from "./components/DayOverview/DayOverview"
import Main from "./components/Main/Main"
import NotFound from "./components/NotFound/NotFound"
import PayPeriodOverview from "./components/PayPeriodOverview"
import PayPeriodsOverview from "./components/PayPeriod/PayPeriod"
import FluxComponent from 'flummox/component';
import flux from "./stores/flux"


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

const routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={PayPeriodsOverview} />
    <Route name="day" path="day/:date" handler={DayOverview} />
    <Route name="payperiod" path="payperiod/:date" handler={PayPeriodOverview} />
    <NotFoundRoute handler={NotFound} />
  </Route>
)

Router.run(routes, (Handler, state) => {
  const params = state.params
  Resolver.render(<Handler params={params}/>, mountNode)
})
