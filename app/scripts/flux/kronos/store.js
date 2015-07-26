/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import { Store, } from 'flummox'
import request from 'superagent-bluebird-promise'
import config from '../../config.js'
import xmlparser from 'xmlparser'

const DEFAULT_STATE = {
  Timesheet: {},
  Schedule: {},
}

export default class KronosStore extends Store {
  constructor(flux) {
    super()

    const kronosActions = flux.getActions('kronos')
    this.registerAsync(kronosActions.fetch, 
      () => console.log('started'), 
      this.handleFetch, 
      () => console.log('error'))

    this.state = DEFAULT_STATE
  }
  async handleFetch(data) {
    this.setState({
      Timesheet: data.Kronos_WFC.Response.Timesheet
    })
  }
}
