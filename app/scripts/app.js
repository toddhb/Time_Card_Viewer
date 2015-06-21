var React = window.React = require('react'),
    Router = window.ReactRouter = require('react-router'),
    Calendar = require("./ui/Calendar"),
    DayStream = require("./ui/DayStream"),
    WeekOverview = require("./ui/TimeOverview.js"),
    DayStream = require("./ui/DayStream.js"),
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
    return (
      <div className="container">
        <div className="header">
          <h3 className="text-muted">
            <a href="/">Steve's Time Card</a>
          </h3>
        </div>
        <div className="alert alert-info" role="alert">You're next due at work <strong>Wednesday at 8:00 am</strong></div>
        <RouteHandler {...this.params} />
      </div>
    );
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
