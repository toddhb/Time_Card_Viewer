import React from 'react'
import { Resolver } from 'react-resolver'
import _ from 'underscore'

export default (component) => Resolver.createContainer(component, {
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },
  resolve: {
    params: (props, context) => {
      return props.params
    },
    payPeriod: (props, context) => {
      return {
        start: "May 1",
        end: "May 15",
        hoursWorked: "50",
        hoursScheduled: "55",
        etc: "Wow!" // Replace with...
      }
    },
    dayStamps: (props, context) => {
      return [
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
    }
  }
})
