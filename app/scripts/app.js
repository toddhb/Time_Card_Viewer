
var React = window.React = require('react'),
    Timer = require("./ui/Timer"),
    Calendar = require("./ui/Calendar"),
    WeekOverview = require("./ui/TimeOverview.js"),
    mountNode = document.getElementById("app");

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

var CalendarApp = React.createClass({
  render: function() {
    return (
      <div>
        <Calendar year="2015" month="0"/>
      </div>
    );
  }
});

var TimeOverviewApp= React.createClass({
  render: function() {
    return (
      <div>
        <WeekOverview />
      </div>
    );
  }
});



React.render(<TimeOverviewApp />, mountNode);
