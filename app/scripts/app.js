var React = window.React = require('react'),
    Router = window.ReactRouter = require('react-router'),
    Timer = require("./ui/Timer"),
    Calendar = require("./ui/Calendar"),
    WeekOverview = require("./ui/TimeOverview.js"),
    mountNode = document.getElementById("app");

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
    var calendars = _.range(0, 12+1).map((i) => {
      return <Calendar year="2015" month={i} />
    })
    return (
      <div>{calendars}</div>
    );
  }
});

var WeekOverviewApp= React.createClass({
  render: function() {
    return (
      <WeekOverview />
    );
  }
});

var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={WeekOverviewApp}/>
    {/* TEST ROUTES */}
    <Route name="calendar" handler={CalendarApp} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, mountNode);
});
