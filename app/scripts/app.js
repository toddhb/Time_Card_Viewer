var React = window.React = require('react'),
    Router = window.ReactRouter = require('react-router'),
    Timer = require("./ui/Timer"),
    Calendar = require("./ui/Calendar"),
    DayStream = require("./ui/DayStream"),
    WeekOverview = require("./ui/TimeOverview.js"),
    DayStream = require("./ui/DayStream.js"),
    _ = require("underscore"),
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
            <a href="index.html">Steve's Time Card</a>
          </h3>
        </div>
        {/*div className="jumbotron" id="app"></div>*/}
        <div className="alert alert-info" role="alert">You're next due at work <strong>Wednesday at 8:00 am</strong></div>
        <RouteHandler/>
      </div>
    );
  }
});

var CalendarApp = React.createClass({
  render: function() {
    var calendars = _.range(0, 12+1).map(i =>
      <Calendar year="2015" month={i} />
    )
    return (
      <div>{calendars}</div>
    );
  }
});

var WeekOverviewApp = React.createClass({
  render: function() {
    return (
      <WeekOverview />
    );
  }
});
      
var DayStreamApp = React.createClass({
  render: function() {
    return (
      <DayStream />
    );
  }
});

var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={WeekOverviewApp}/>
    {/* TEST ROUTES */}
    <Route name="calendar" handler={CalendarApp} />
    <Route name="daystream" handler={DayStream} />
  </Route>
);

Router.run(routes, function (Handler) {
  Resolver.render(<Handler/>, mountNode);
});
