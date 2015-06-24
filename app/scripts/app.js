import React from "react"
import Router, { Route, RouteHandler, DefaultRoute } from "react-router"
import { Resolver } from "react-resolver"
import { createRedux } from "redux"
import { Provider } from "redux/react"
import * as stores from "./stores"
import DayStream from "./ui/DayStream"
import WeekOverview from "./ui/TimeOverview.js"
import Main from "./ui/Main.js"
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
    <DefaultRoute handler={WeekOverview} />
    <Route name="day" path="day/:date" handler={DayStream} />
  </Route>
)

Router.run(routes, (Handler, state) => {
  const params = state.params
  Resolver.render(<Handler params={params}/>, mountNode)
})
