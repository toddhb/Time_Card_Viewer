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
//import xmlparser from 'xmlparser'
import { parseTimesheet, parseLogin, parseLogout } from './parsers'
import flux from '../flux'
import _ from 'lodash'

const DEFAULT_STATE = {
  username: null,
  currentTimesheet: {
    startDate: null,
    endDate: null,
    days: [],
    inPunches: [],
    outPunches: [],
    exceptions: [],
    totals: [],    
  },
  previousTimesheet: {
    startDate: null,
    endDate: null,
    days: [],
    inPunches: [],
    outPunches: [],
    exceptions: [],
    totals: [],    
  },
  Schedule: {},
}

export default class KronosStore extends Store {
  constructor(flux) {
    super()
    this.flux = flux
    this.state = DEFAULT_STATE
    this.registerAction('login', this.handleLogin)
    this.registerAction('logout', this.handleLogin)
    this.registerAction('fetchPreviousTimesheet', this.handlePreviousTimesheetFetch)
    this.registerAction('fetchCurrentTimesheet', this.handleCurrentTimesheetFetch)
  }
  registerAction(action, handler) {
    const kronosActions = this.flux.getActions('kronos')
    this.registerAsync(
      kronosActions[action],
      () => console.log(`kronosActions.${action}: started`),
      handler,
      (error) => console.log(`kronosActions.${action}: error:`, error),
    )
  }
  async handleLogin(data) {
    // Set the username of the logged in user
    const parsedData = parseLogin(data)
    if (parsedData.status == "Success"|| parsedData.errorCode == "1313") {
      this.setState({
        username: parsedData.username,
      })
    } 
  }
  async handleLogout(data) {
    // Set the username to null
    const parsedData = parseLogout(data)
    if (parsedData.status == "Success") {
      this.setState({
        username: null,
      })
    }
  }
  async handleCurrentTimesheetFetch(data) {
    this.setState({
      currentTimesheet: parseTimesheet(data).timesheet,
    })
  }
  async handlePreviousTimesheetFetch(data) {
    this.setState({
      previousTimesheet: parseTimesheet(data).timesheet,
    })
  }
  async handleScheduleFetch(data) {
    this.setState({
      Schedule: data.Kronos_WFC.Response.Schedule
    })
  }
  getDay(date, name = 'current') {
    const { currentTimesheet, previousTimesheet } = this.state
    const days = currentTimesheet.days.concat(previousTimesheet.days)
    return this.findByDate(days, date)
  }
  getExceptionsForDate(date, name = 'current') {
    const { currentTimesheet, previousTimesheet } = this.state
    const exceptions = currentTimesheet.exceptions
        .concat(previousTimesheet.exceptions)
    return this.filterByDateExceptions(exceptions, date)
  }
  getInPunchesForDate(date, name = 'current') {
    const { currentTimesheet, previousTimesheet } = this.state
    const inPunches = currentTimesheet.inPunches
        .concat(previousTimesheet.inPunches)
    return this.filterByDate(inPunches, date)
  }
  getOutPunchesForDate(date, name = 'current') {
    const { currentTimesheet, previousTimesheet } = this.state
    const outPunches = currentTimesheet.outPunches
        .concat(previousTimesheet.outPunches)
    return this.filterByDate(outPunches, date)
  }
  findByDate(xs, date) {
    return _.find(xs, eachDay => date.isSame(eachDay.date, 'day'))
  }
  filterByDate(xs, date) {
    var x =  _.filter(xs, eachDay => date.isSame(eachDay.time, 'day'))
	return _.filter(x, eachDay => eachDay != "")
  }
  filterByDateExceptions(xs, date) {
	return _.filter(xs, eachDay => date.isSame(eachDay.date, 'day'))
  }
  getTimesheetByName(name) {
    if (name === 'current') {
      return this.state.currentTimesheet
    } else if (name === 'previous') {
      return this.state.previousTimesheet
    } else {
      return null
    }
  }
  getPeriodStartDate(name = 'current') {
    const timesheet = this.getTimesheetByName(name)
    return timesheet.startDate
  }
  getPeriodEndDate(name = 'current') {
    const timesheet = this.getTimesheetByName(name)
    return timesheet.endDate
  }
  isLoggedIn() {
    return !!this.state.username
  }
}
