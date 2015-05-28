
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

var TimeStamp = React.createClass({
    render: function() {
        return (
            <div>{this.props.date}</div>        
        )
    }
});
var TimeStamps = React.createClass({
    getInitialState: function() {
        return {
            timeStamps: [
                (new Date).toString(),
                (new Date).toString(),
                (new Date).toString(),
                (new Date).toString()
            ]
        };
    },
    render: function() {
        var timeStamps =  this.state.timeStamps.map(function(each) {
            return (
                <tr><td><TimeStamp date={each} /></td></tr>
            )
        });
        return (
            <list>{timeStamps}</list>
        )
    }
});
var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var App = React.createClass({
  render: function() {
    return (
      <RouteHandler/>
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
    <Route name="calendar" path="calendar/" handler={CalendarApp} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, mountNode);
});
