'use strict';

var React = require('react');

var Calendar = React.createClass({
  daysInMonth: function(year, month, day) {
    return new Date(year, month, 0).getDate();
  },
  dayOfDate: function(year,month,day) {
    return new Date(year, month, day).getDay();
  },
  render: function() {
    var headers = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday",
        "Thursday", 
        "Friday", 
        "Saturday"
      ].map(function(each) {
        return (<th>{each}</th>)
      });
    var days = _.range(1, this.dayOfDate(+this.props.year, +this.props.month, 1)+1)
        .map(function(each) { 
            return (<td></td>)
        }).concat( 
          _.range(1, (this.daysInMonth(+this.props.year, +this.props.month)+1))
            .map(function(each) {
              return (<td>{each}</td>)
            })
        );
    var rows = _.reduce(days, function(memo, it){ 
        var last = _.last(memo)
        if (last.length < 7) {
          last.push(it)
        } else {
          memo.push([it])  
        }
        return memo; 
      }, [[]]).map(function (each) {
        return <tr className="week">{each}</tr>
      });
    return (
        <div className="container-fluid">
        <div className="calendar">
            <div className="row month-title">
                <div className="col-xs-12">
                    <h1>{this.props.month}</h1>
                </div>
            </div>
            
            <div className="row calendar-row">
                <div className="col-xs-12">
                    <table width="100%">
                    {headers}    
                    {rows}
                    </table>
                </div>
                </div>
            </div>
        </div>
      );
    }
});
    
module.exports = Calendar