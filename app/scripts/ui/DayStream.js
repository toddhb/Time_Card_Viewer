'use strict';

var React = require('react');
var _ = require('underscore');

var dayStamps = [
    {
        type:   "scheduledIn",
        time:   "08:00",  // Assuming this comes parsed from 24-hr format
        suffix: "a.m."
    },
    {
        type:   "scheduledOut",
        time:   "17:00",
        suffix: "p.m."   
    },
    {
        type:   "timeIn",
        time:   "07:59",
        suffix: "a.m."   
    },
    {
        type:   "timeIn",
        time:   "12:00",
        suffix: "a.m."     
    },
    {
        type:   "timeOut",
        time:   "13:31",
        suffix: "p.m."   
    },
    {
        type:   "timeOut",
        time:   "16:48",
        suffix: "p.m."     
    }
]

var DayStream = React.createClass({                              
    render: function() {
        var punchLog = _.chain(dayStamps)
           .sortBy(punchLog => punchLog.time) 
           .map(punch => <Entry type={punch.type} time={punch.time} suffix={punch.suffix} />)
        return (
            <div className="entry-list">{punchLog}</div>
        )
    }
});


var Entry = React.createClass({
    render: function() {
        var action = '';
        var panelClass = 'panel panel-default time-entry';
        var glyphClass = 'glyphicon pull-left';

        // There's a better way than these ifs, I'm sure of it!
        if(this.props.type == 'timeIn') {
           action = "Clocked in at ";
           panelClass += " " + "time-in";   
           glyphClass += " " + "glyphicon-ok-sign";
        }
        if(this.props.type == 'timeOut') {
           action = "Clocked out at ";
           panelClass += " " + "time-out";   
           glyphClass += " " + "glyphicon-minus-sign";
        }
        if(this.props.type == 'scheduledIn') {
           action = "Shift started at ";
           panelClass += " " + "shift-info";   
           glyphClass += " " + "glyphicon-time";
        }
        if(this.props.type == 'scheduledOut') {
           action = "Shift ended at ";
           panelClass += " " + "shift-info";   
           glyphClass += " " + "glyphicon-time";
        }
        return ( 
            <div className={panelClass}>
                <div className="panel-body">
                    <span className={glyphClass}></span>
                    <p>{action}<strong>{this.props.time}{this.props.suffix}</strong>
                    </p>
                </div>
            </div> 
        )
    }
});
    
module.exports = DayStream;
