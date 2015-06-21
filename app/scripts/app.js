var React = window.React = require('react'),
    Router = window.ReactRouter = require('react-router'),
    Calendar = require("./ui/Calendar"),
    DayStream = require("./ui/DayStream"),
    WeekOverview = require("./ui/TimeOverview.js"),
    DayStream = require("./ui/DayStream.js"),
    Main = require("./ui/Main.js"),
    moment = require("moment"),
    _ = require("underscore"),
    fetch = window.fetch = require('node-fetch'),
    mountNode = document.getElementById("app");

import { Resolver } from "react-resolver"
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (<Main />);
  }
});

var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={WeekOverview}/>
    <Route name="day" path="day/:date" handler={DayStream} />
  </Route>
);

Router.run(routes, function (Handler, state) {
  var params = state.params;
  Resolver.render(<Handler params={params}/>, mountNode);
});
