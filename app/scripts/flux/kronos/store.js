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
import flux from '../flux'
import _ from 'lodash'

const DEFAULT_STATE = {
  Timesheet: {},
  Schedule: {},
}

export default class KronosStore extends Store {
  constructor(flux) {
    super()

    const kronosActions = flux.getActions('kronos')

    this.registerAsync(kronosActions.fetchPreviousTimesheet, 
      () => console.log('kronosActions.fetchPreviousTimesheet: started'), 
      this.handleTimesheetFetch, 
      (error) => console.log('kronosActions.fetchPreviousTimesheet: error', error))
    this.registerAsync(kronosActions.fetchCurrentTimesheet, 
      () => console.log('kronosActions.fetchCurrentTimesheet: started'), 
      this.handleTimesheetFetch, 
      (error) => console.log('kronosActions.fetchCurrentTimesheet: error', error))
    this.registerAsync(kronosActions.fetchNextTimesheet, 
      () => console.log('kronosActions.fetchNextTimesheet: started'), 
      this.handleTimesheetFetch, 
      (error) => console.log('kronosActions.fetchNextTimesheet: error', error))
    this.registerAsync(kronosActions.fetchDateRangeTimesheet, 
      () => console.log('kronosActions.fetchDateRangeTimesheet: started'), 
      this.handleTimesheetFetch, 
      (error) => console.log('kronosActions.fetchDateRangeTimesheet: error', error))
    this.registerAsync(kronosActions.fetchDateRangeSchedule, 
      () => console.log('kronosActions.fetchDateRangeSchedule: started'), 
      this.handleScheduleFetch, 
      (error) => console.log('kronosActions.fetchDateRangeSchedule: error', error))

    this.state = DEFAULT_STATE
  }
  async handleTimesheetFetch(data) {
    this.setState({
      Timesheet: data.Kronos_WFC.Response.Timesheet
    })
    const periodDateSpan = _.get(this.state.Timesheet, 
      'Period.TimeFramePeriod.PeriodDateSpan', null)
    if (periodDateSpan) {
      flux.getActions('kronos').fetchDateRangeSchedule(periodDateSpan)
    }
  }
  async handleScheduleFetch(data) {
    this.setState({
      Schedule: data.Kronos_WFC.Response.Schedule
    })
  }
}
