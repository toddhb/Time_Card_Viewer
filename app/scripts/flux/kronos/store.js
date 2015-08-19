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
  storeDateRange: 'current',
  timesheet: {
    days: [],
    inPunches: [],
    outPunches: [],
    exceptions: [],
  },
  Schedule: {},
}

export default class KronosStore extends Store {
  constructor(flux) {
    super()

    const kronosActions = flux.getActions('kronos')

    this.registerAsync(kronosActions.login, 
      () => console.log('kronosActions.login: started'), 
      this.handleLogin, 
      (error) => console.log('kronosActions.login: error', error))
    this.registerAsync(kronosActions.logout, 
      () => console.log('kronosActions.logout: started'), 
      this.handleLogout, 
      (error) => console.log('kronosActions.logout: error', error))
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
    this.register(kronosActions.setStoreDateRange, this.handleSetStoreDateRange)

    this.state = DEFAULT_STATE
  }
  async handleLogin(data, id) {
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
  async handleTimesheetFetch(data) {
    this.setState(parseTimesheet(data))
  }
  async handleScheduleFetch(data) {
    this.setState({
      Schedule: data.Kronos_WFC.Response.Schedule
    })
  }
  handleSetStoreDateRange(dateRange) {
    this.setState({ storeDateRange: dateRange})
  }
  getDay(date) {
    return this.findByDate(this.state.timesheet.days, date)
  }
  getExceptionsForDate(date) {
    return this.filterByDateExceptions(this.state.timesheet.exceptions, date)
  }
  getInPunchesForDate(date) {
    return this.filterByDate(this.state.timesheet.inPunches, date)
  }
  getOutPunchesForDate(date) {
    return this.filterByDate(this.state.timesheet.outPunches, date)
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
  getStoreDateRange() {
    return this.state.storeDateRange
  }
  getPeriodStartDate() {
    return this.state.timesheet.startDate
  }
  getPeriodEndDate() {
    return this.state.timesheet.endDate
  }
  isLoggedIn() {
    return !!this.state.username
  }
}
