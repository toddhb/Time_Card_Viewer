import React from 'react'
import Router from 'react-router'

import DayStream from './ui/DayStream'
import WeekOverview from './ui/TimeOverview.js'
import Main from './ui/Main.js'

import { Resolver } from "react-resolver"
const DefaultRoute = Router.DefaultRoute;
const Link = Router.Link;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;

const mountNode = document.getElementById("app");

var App = React.createClass({
  render: function() {
    return (<Main />);
  }
});

const routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={WeekOverview}/>
    <Route name="day" path="day/:date" handler={DayStream} />
  </Route>
);

Router.run(routes, function (Handler, state) {
  var params = state.params;
  Resolver.render(<Handler params={params}/>, mountNode);
});
