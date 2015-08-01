/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import { Actions, Flummox } from 'flummox'
import request from 'superagent-bluebird-promise'
import config from '../../config.js'

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
    const text = response.text
      // Remove `<?xml version="1.0" encoding="UTF-8"?>`
      .match(/<Kronos_WFC[\s\S]*/)[0]
      // Remove all newline characters
      .replace(/(\r\n|\n|\r)/gm, '')
    const x2js = new X2JS()
    return x2js.xml_str2json(text)
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

function timesheetXmlRequest(personNumber, timeFrameName, periodDateSpan) {
  const periodDateSpanXml = periodDateSpan 
      ? `<PeriodDateSpan>${periodDateSpan}</PeriodDateSpan>`
      : ''
  return basicXmlRequest(
    `<Timesheet>
      <Employee>
        <PersonIdentity PersonNumber="${personNumber}" />
      </Employee>
      <Period>
        <TimeFramePeriod>
          ${periodDateSpanXml}
          <TimeFrameName>${timeFrameName}</TimeFrameName>
        </TimeFramePeriod>
      </Period>
    </Timesheet>`
  )
}

function scheduleRequest(personNumber, periodDateSpan) {
  return basicXmlRequest(
    `<Schedule QueryDateSpan="${periodDateSpan}">
     <Employees>
       <PersonIdentity PersonNumber="${personNumber}" />
     </Employees>
    </Schedule>`
  )  
}

export default class KronosActions extends Actions {
  async fetchPerviousTimesheet() {
    await login()
    return parseXmlResponse(await apiRequest(
      timesheetXmlRequest("N0686", 0) 
    ))
  }
  async fetchCurrentTimesheet() {
    await login()
    return parseXmlResponse(await apiRequest(
      timesheetXmlRequest("N0686", 1) 
    ))
  }
  async fetchNextTimesheet() {
    await login()
    return parseXmlResponse(await apiRequest(
      timesheetXmlRequest("N0686", 2) 
    ))
  }
  async fetchDateRangeTimesheet(dateRange) {
    await login()
    return parseXmlResponse(await apiRequest(
      timesheetXmlRequest("N0686", 9, dateRange) 
    ))
  }
  async fetchDateRangeSchedule(dateRange) {
    await login()
    return parseXmlResponse(await apiRequest(
      scheduleRequest("N0686", dateRange) 
    ))
  }
}