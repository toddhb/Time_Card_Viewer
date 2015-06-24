import { Actions, Store, Flummox } from 'flummox'
import _ from "underscore"
import moment from "moment"

export class DayStreamActions extends Actions {
  fetch(content) {
    return content // automatically dispatched
  }
}

const defaultState = {
  payPeriod: {
    start: "May 1",
    end: "May 15",
    hoursWorked: "50",
    hoursScheduled: "55",
    etc: "Wow!" // Replace with...
  },
  dayStamps: [
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

export class DayStreamStore extends Store {
  constructor(flux) {
    super()

    const daystreamActions = flux.getActions('daystream')
    this.register(daystreamActions.fetch, this.handleFetch)
    this.messageCounter = 0

    this.state = defaultState
  }
  handleFetch(content) {}
}