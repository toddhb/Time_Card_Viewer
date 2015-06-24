import { Actions, Store, Flummox } from 'flummox';
import _ from "underscore"
import moment from "moment"

export class DayActions extends Actions {
  fetch(content) {
    return content // automatically dispatched
  }
}
const defaultState = {
  days: _.range(28, 0, -1).map(i => {
    return {
      date: moment().add(i, "days"),
      hours: _.random(0, 24) 
    }
  })
}
export class DayStore extends Store {
  constructor(flux) {
    super()

    const dayActions = flux.getActions('days')
    this.register(dayActions.fetch, this.handleFetch)
    this.messageCounter = 0

    this.state = defaultState
  }
  handleFetch(content) {}
}
