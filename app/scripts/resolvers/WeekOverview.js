import React from 'react'
import { Resolver } from 'react-resolver'
import moment from 'moment'
import _ from 'underscore'

var today = moment()

export default (component) => Resolver.createContainer(component, {
  contextTypes: {
    router: React.PropTypes.func.isRequired,
  },
  resolve: {
    params: (props, context) => {
        return props.params
    },
    days: (props, context) => {
      return _.range(0, 28).map(i => {
          return {
            date: moment().add(i, "days"),
            hours: _.random(0, 24) 
          }
      });
    }
  }
})
