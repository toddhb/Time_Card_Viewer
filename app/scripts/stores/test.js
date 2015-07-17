/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import { Actions, Store, Flummox } from 'flummox'
import _ from "underscore"
import moment from "moment"

export class TestActions extends Actions {
  fetch(content) {
    return content // automatically dispatched
  }
}

export class TestStore extends Store {
  constructor(flux) {
    super()

    const testStore = flux.getActions('test')
    this.register(TestActions.fetch, this.handleFetch)

    this.state = defaultState
  }
  handleFetch(content) {}
}

const defaultState = {
  "test": {
    "foo": "a",
    "bar": "b"
  }
}