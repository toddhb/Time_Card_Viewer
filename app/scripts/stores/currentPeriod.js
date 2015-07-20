/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import { Actions, Store, Flummox } from 'flummox'
import request from 'superagent-bluebird-promise'
import config from '../config.js'
import xmlparser from 'xmlparser'

const { protocal, host, basepath } = config.api.location

const API_BASENAME = `${protocal}://${host}${basepath}`

async function apiRequest(payload) {
  const response = await request
    .post(API_BASENAME)
    .send(payload)
    .type('xml')
    .accept('xml')
    .withCredentials() 
    .promise()
  return response
}

function parseXmlResponse(response) {
    const text = response
      .text
      .match(/<Kronos_WFC[\s\S]*/)[0].replace(/(\r\n|\n|\r)/gm, '')
    return xmlparser.parser(text)
}

async function login() {
    return apiRequest(
     `<?xml version='1.0' encoding='UTF-8' ?>
<Kronos_WFC Version="1.0" WFCVersion="7.0.6.436" TimeStamp="7/14/2015 9:39PM GMT-07:00">
    <Request Object="System" Action="Logon" Username="XMLUSER" Password="ibswutws" /> 
</Kronos_WFC>`)
}

function basicXmlRequest(body) {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>
      <Kronos_WFC Version="1.0">
        <Request Action="Load">
          ${body}
        </Request>
    </Kronos_WFC>`
  )
}


export class CurrentPeriodActions extends Actions {
  async fetch() {
    await login()
    return parseXmlResponse(await apiRequest(
      basicXmlRequest(
        `<Timesheet>
          <Employee>
            <PersonIdentity PersonNumber="N0686" />
          </Employee>
          <Period>
            <TimeFramePeriod>
              <TimeFrameName>1</TimeFrameName>
            </TimeFramePeriod>
          </Period>
        </Timesheet>`
    )))
  }
}

const DEFAULT_STATE = {
  Timesheet: {}
}

export class CurrentPeriodStore extends Store {
  constructor(flux) {
    super()

    const currentPeriodActions = flux.getActions('currentPeriod')
    this.registerAsync(currentPeriodActions.fetch, 
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
