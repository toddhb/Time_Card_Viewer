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

export class TimeSheetActions extends Actions {
  fetch(content) {
    return content // automatically dispatched
  }
}

export class TimeSheetStore extends Store {
  constructor(flux) {
    super()

    const timeSheetStore = flux.getActions('timeSheet')
    this.register(TimeSheetActions.fetch, this.handleFetch)

    this.state = defaultState
  }
  handleFetch(content) {}
}

const defaultState = {
  "Timesheet": {
    "-LastTotalizationDateTime": "7/04/2015 0:30",
    "-ManagerSignoffDateTime": "5/16/2015 0:00",
    "-TotalsUpToDateFlag": "true",
    "DailyTotals": {  
      "DateTotals": [
      { "Date": "3/31/2015" },
      {
        "Date": "4/01/2015",
        "GrandTotal": "10:23",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "153.47",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "10:23",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "153.47",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "10:23",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "153.47",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "10:23",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "153.47",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "10:23",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "153.47",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "10:23",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/02/2015",
        "GrandTotal": "10:43",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "146.81",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "9:56",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "164.18",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "10:43",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "164.18",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "10:43",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "164.18",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "10:43",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "146.81",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "9:56",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "17.37",
            "-PayCodeId": "129",
            "-PayCodeName": "Overtime",
            "-AmountInTime": "0:47",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "17.37",
            "-PayCodeId": "141",
            "-PayCodeName": "All Overtime",
            "-AmountInTime": "0:47",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/03/2015",
        "GrandTotal": "9:36",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "212.83",
            "-PayCodeId": "129",
            "-PayCodeName": "Overtime",
            "-AmountInTime": "9:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "212.83",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "212.83",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "212.83",
            "-PayCodeId": "141",
            "-PayCodeName": "All Overtime",
            "-AmountInTime": "9:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "212.83",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:36",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/04/2015",
        "GrandTotal": "0:00"
      },
      {
        "Date": "4/05/2015",
        "GrandTotal": "0:00"
      },
      {
        "Date": "4/06/2015",
        "GrandTotal": "10:58",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.09",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "10:58",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.09",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "10:58",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.09",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "10:58",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.09",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "10:58",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.09",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "10:58",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/07/2015",
        "GrandTotal": "11:01",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.83",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "11:01",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.83",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "11:01",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.83",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "11:01",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.83",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "11:01",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "162.83",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "11:01",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/08/2015",
        "GrandTotal": "12:17",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "181.55",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "12:17",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "181.55",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "12:17",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "181.55",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "12:17",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "181.55",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "12:17",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "181.55",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "12:17",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/09/2015",
        "GrandTotal": "9:36",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "85.72",
            "-PayCodeId": "129",
            "-PayCodeName": "Overtime",
            "-AmountInTime": "3:52",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "170.46",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "170.46",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "85.72",
            "-PayCodeId": "141",
            "-PayCodeName": "All Overtime",
            "-AmountInTime": "3:52",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "170.46",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "84.74",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "5:44",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "84.74",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "5:44",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/10/2015",
        "GrandTotal": "9:09",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "202.86",
            "-PayCodeId": "129",
            "-PayCodeName": "Overtime",
            "-AmountInTime": "9:09",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "202.86",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:09",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "202.86",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:09",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "202.86",
            "-PayCodeId": "141",
            "-PayCodeName": "All Overtime",
            "-AmountInTime": "9:09",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "202.86",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:09",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/11/2015",
        "GrandTotal": "0:00"
      },
      {
        "Date": "4/12/2015",
        "GrandTotal": "0:00"
      },
      {
        "Date": "4/13/2015",
        "GrandTotal": "10:50",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "160.12",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "10:50",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "160.12",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "10:50",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "160.12",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "10:50",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "160.12",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "10:50",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "160.12",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "10:50",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/14/2015",
        "GrandTotal": "9:47",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "144.60",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "9:47",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "144.60",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:47",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "144.60",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:47",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "144.60",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:47",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "144.60",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "9:47",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/15/2015",
        "GrandTotal": "9:00",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "133.02",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "9:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "133.02",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "133.02",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "133.02",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "133.02",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "9:00",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/16/2015",
        "GrandTotal": "9:34",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "141.40",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "9:34",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "141.40",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:34",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "141.40",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:34",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "141.40",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:34",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "141.40",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "9:34",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/17/2015",
        "GrandTotal": "8:00",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "159.25",
            "-PayCodeId": "129",
            "-PayCodeName": "Overtime",
            "-AmountInTime": "7:11",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "171.32",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "171.32",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "159.25",
            "-PayCodeId": "141",
            "-PayCodeName": "All Overtime",
            "-AmountInTime": "7:11",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "171.32",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "12.07",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "0:49",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "12.07",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "0:49",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/18/2015",
        "GrandTotal": "0:00"
      },
      {
        "Date": "4/19/2015",
        "GrandTotal": "0:00"
      },
      {
        "Date": "4/20/2015",
        "GrandTotal": "9:38",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "142.38",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "9:38",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "142.38",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:38",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "142.38",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:38",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "142.38",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:38",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "142.38",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "9:38",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/21/2015",
        "GrandTotal": "10:44",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "158.64",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "10:44",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "158.64",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "10:44",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "158.64",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "10:44",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "158.64",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "10:44",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "158.64",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "10:44",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/22/2015",
        "GrandTotal": "9:08",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "134.99",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "9:08",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "134.99",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:08",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "134.99",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:08",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "134.99",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:08",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "134.99",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "9:08",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/23/2015",
        "GrandTotal": "8:06",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "119.72",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "8:06",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "119.72",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "8:06",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "119.72",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "8:06",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "119.72",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "8:06",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "119.72",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "8:06",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/24/2015",
        "GrandTotal": "9:25",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "155.56",
            "-PayCodeId": "129",
            "-PayCodeName": "Overtime",
            "-AmountInTime": "7:01",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "191.03",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "9:25",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "191.03",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "9:25",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "155.56",
            "-PayCodeId": "141",
            "-PayCodeName": "All Overtime",
            "-AmountInTime": "7:01",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "191.03",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "9:25",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "35.47",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "2:24",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "35.47",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "2:24",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/25/2015",
        "GrandTotal": "0:00"
      },
      {
        "Date": "4/26/2015",
        "GrandTotal": "0:00"
      },
      {
        "Date": "4/27/2015",
        "GrandTotal": "8:23",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "123.91",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "8:23",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "123.91",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "8:23",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "123.91",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "8:23",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "123.91",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "8:23",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "123.91",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "8:23",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/28/2015",
        "GrandTotal": "8:26",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "124.64",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "8:26",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "124.64",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "8:26",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "124.64",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "8:26",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "124.64",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "8:26",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "124.64",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "8:26",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/29/2015",
        "GrandTotal": "8:00",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "144",
            "-PayCodeName": "Non Productive Time",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "501",
            "-PayCodeName": "PTO - Scheduled",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      {
        "Date": "4/30/2015",
        "GrandTotal": "8:00",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          }
          ]
        }
      },
      { "Date": "5/01/2015" }
      ]
    },
    "Employee": {
      "PersonIdentity": { "-PersonNumber": "N0686" }
    },
    "PeriodTotalData": {
      "PeriodTotals": {
        "-PeriodDateSpan": "4/01/2015 - 4/30/2015",
        "Totals": {
          "Total": [
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "2,440.67",
            "-PayCodeId": "134",
            "-PayCodeName": "Straight",
            "-AmountInTime": "165:08",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "3,274.26",
            "-PayCodeId": "139",
            "-PayCodeName": "All Hours Worked",
            "-AmountInTime": "202:44",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "3,274.26",
            "-PayCodeId": "140",
            "-PayCodeName": "All Hours Worked plus UAOT",
            "-AmountInTime": "202:44",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "3,392.50",
            "-PayCodeId": "142",
            "-PayCodeName": "All Paid Hours",
            "-AmountInTime": "210:44",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "2,440.67",
            "-PayCodeId": "1014",
            "-PayCodeName": "All Straight Productive",
            "-AmountInTime": "165:08",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "833.59",
            "-PayCodeId": "129",
            "-PayCodeName": "Overtime",
            "-AmountInTime": "37:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "833.59",
            "-PayCodeId": "141",
            "-PayCodeName": "All Overtime",
            "-AmountInTime": "37:36",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "144",
            "-PayCodeName": "Non Productive Time",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          },
          {
            "-IsCurrencyFlag": "false",
            "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
            "-LaborAccountId": "83249",
            "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
            "-AmountInCurrency": "118.24",
            "-PayCodeId": "501",
            "-PayCodeName": "PTO - Scheduled",
            "-AmountInTime": "8:00",
            "-AmountInDays": "0"
          }
          ]
        }
      }
    },
    "Period": {  
      "TimeFramePeriod": {
        "PeriodDateSpan": "4/01/2015 - 4/30/2015",
        "TimeFrameName": "9"
      } 
    },
    "TotaledPayCodeEdits": {
      "PayCodeEdit": {
        "Date": "4/29/2015",
        "-EnteredOnDate": "5/04/2015",
        "-EnteredOnTime": "9:04",
        "-AmountInTimeOrCurrency": "8:00",
        "-IsCurrencyFlag": "false",
        "-PayCodeName": "PTO - Scheduled",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        }
      }
    },
    "TotaledSpans": { 
      "TotaledSpan": [
      {
        "Date": "4/01/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/01/2015",
            "-EnteredOnDate": "4/01/2015",
            "-EnteredOnTime": "5:02",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:58",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/01/2015",
            "-EnteredOnDate": "4/01/2015",
            "-EnteredOnTime": "12:33",
            "-DaylightSavingsFlag": "true",
            "-Time": "15:30",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/01/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "2:22",
            "-DurationOfException": "2:23",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/01/2015",
            "-EnteredOnDate": "4/01/2015",
            "-EnteredOnTime": "13:02",
            "-DaylightSavingsFlag": "true",
            "-Time": "16:00",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/01/2015",
            "-EnteredOnDate": "4/01/2015",
            "-EnteredOnTime": "15:56",
            "-DaylightSavingsFlag": "true",
            "-Time": "18:53",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/02/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/02/2015",
            "-EnteredOnDate": "4/02/2015",
            "-EnteredOnTime": "4:58",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:54",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/02/2015",
            "-EnteredOnDate": "4/02/2015",
            "-EnteredOnTime": "12:33",
            "-DaylightSavingsFlag": "true",
            "-Time": "15:30",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/02/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "2:42",
            "-DurationOfException": "2:43",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/02/2015",
            "-EnteredOnDate": "4/02/2015",
            "-EnteredOnTime": "13:03",
            "-DaylightSavingsFlag": "true",
            "-Time": "16:00",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/02/2015",
            "-EnteredOnDate": "4/02/2015",
            "-EnteredOnTime": "16:18",
            "-DaylightSavingsFlag": "true",
            "-Time": "19:13",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/03/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/03/2015",
            "-EnteredOnDate": "4/03/2015",
            "-EnteredOnTime": "4:58",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:57",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/03/2015",
            "-EnteredOnDate": "4/03/2015",
            "-EnteredOnTime": "12:32",
            "-DaylightSavingsFlag": "true",
            "-Time": "15:27",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/03/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "1:35",
            "-DurationOfException": "1:36",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/03/2015",
            "-EnteredOnDate": "4/03/2015",
            "-EnteredOnTime": "12:58",
            "-DaylightSavingsFlag": "true",
            "-Time": "15:57",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/03/2015",
            "-EnteredOnDate": "4/03/2015",
            "-EnteredOnTime": "15:07",
            "-DaylightSavingsFlag": "true",
            "-Time": "18:06",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/06/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/06/2015",
            "-EnteredOnDate": "4/06/2015",
            "-EnteredOnTime": "4:59",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:56",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/06/2015",
            "-EnteredOnDate": "4/06/2015",
            "-EnteredOnTime": "11:34",
            "-DaylightSavingsFlag": "true",
            "-Time": "14:29",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/06/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "2:57",
            "-DurationOfException": "2:58",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/06/2015",
            "-EnteredOnDate": "4/06/2015",
            "-EnteredOnTime": "11:59",
            "-DaylightSavingsFlag": "true",
            "-Time": "14:59",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/06/2015",
            "-EnteredOnDate": "4/06/2015",
            "-EnteredOnTime": "16:33",
            "-DaylightSavingsFlag": "true",
            "-Time": "19:28",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/07/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/07/2015",
            "-EnteredOnDate": "4/07/2015",
            "-EnteredOnTime": "4:59",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:57",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/07/2015",
            "-EnteredOnDate": "4/07/2015",
            "-EnteredOnTime": "11:20",
            "-DaylightSavingsFlag": "true",
            "-Time": "14:18",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/07/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "3:00",
            "-DurationOfException": "3:01",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/07/2015",
            "-EnteredOnDate": "4/07/2015",
            "-EnteredOnTime": "11:49",
            "-DaylightSavingsFlag": "true",
            "-Time": "14:48",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/07/2015",
            "-EnteredOnDate": "4/07/2015",
            "-EnteredOnTime": "16:34",
            "-DaylightSavingsFlag": "true",
            "-Time": "19:31",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/08/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/08/2015",
            "-EnteredOnDate": "4/08/2015",
            "-EnteredOnTime": "5:01",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:55",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/08/2015",
            "-EnteredOnDate": "4/08/2015",
            "-EnteredOnTime": "11:20",
            "-DaylightSavingsFlag": "true",
            "-Time": "14:19",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/08/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "4:16",
            "-DurationOfException": "4:17",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/08/2015",
            "-EnteredOnDate": "4/08/2015",
            "-EnteredOnTime": "11:51",
            "-DaylightSavingsFlag": "true",
            "-Time": "14:49",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/08/2015",
            "-EnteredOnDate": "4/08/2015",
            "-EnteredOnTime": "17:50",
            "-DaylightSavingsFlag": "true",
            "-Time": "20:47",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/09/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/09/2015",
            "-EnteredOnDate": "4/09/2015",
            "-EnteredOnTime": "5:01",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:57",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/09/2015",
            "-EnteredOnDate": "4/09/2015",
            "-EnteredOnTime": "12:05",
            "-DaylightSavingsFlag": "true",
            "-Time": "15:02",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/09/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": [
          {
            "-InPunchFlag": "true",
            "-DifferenceToLimit": "0:00",
            "-DurationOfException": "0:29",
            "-ExceptionTypeName": "SHORT"
          },
          {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "1:34",
            "-DurationOfException": "1:35",
            "-ExceptionTypeName": "LATE"
          }
          ]
        },
        "InPunch": {
          "Punch": {
            "Date": "4/09/2015",
            "-EnteredOnDate": "4/09/2015",
            "-EnteredOnTime": "12:31",
            "-DaylightSavingsFlag": "true",
            "-Time": "15:31",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "13 - LUNCH EXCEPTION - UNAPPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/09/2015",
            "-EnteredOnDate": "4/09/2015",
            "-EnteredOnTime": "15:06",
            "-DaylightSavingsFlag": "true",
            "-Time": "18:05",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/10/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/10/2015",
            "-EnteredOnDate": "4/10/2015",
            "-EnteredOnTime": "5:02",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:56",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/10/2015",
            "-EnteredOnDate": "4/10/2015",
            "-EnteredOnTime": "10:06",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:02",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/10/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "1:08",
            "-DurationOfException": "1:09",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/10/2015",
            "-EnteredOnDate": "4/10/2015",
            "-EnteredOnTime": "10:37",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:32",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/10/2015",
            "-EnteredOnDate": "4/10/2015",
            "-EnteredOnTime": "14:42",
            "-DaylightSavingsFlag": "true",
            "-Time": "17:39",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/13/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/13/2015",
            "-EnteredOnDate": "4/13/2015",
            "-EnteredOnTime": "4:58",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:57",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/13/2015",
            "-EnteredOnDate": "4/13/2015",
            "-EnteredOnTime": "10:03",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:01",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/13/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "2:49",
            "-DurationOfException": "2:50",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/13/2015",
            "-EnteredOnDate": "4/13/2015",
            "-EnteredOnTime": "10:34",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:31",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/13/2015",
            "-EnteredOnDate": "4/13/2015",
            "-EnteredOnTime": "16:24",
            "-DaylightSavingsFlag": "true",
            "-Time": "19:20",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/14/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/14/2015",
            "-EnteredOnDate": "4/14/2015",
            "-EnteredOnTime": "4:59",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:57",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/14/2015",
            "-EnteredOnDate": "4/14/2015",
            "-EnteredOnTime": "10:04",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:00",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/14/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "1:51",
            "-DurationOfException": "1:52",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/14/2015",
            "-EnteredOnDate": "4/14/2015",
            "-EnteredOnTime": "10:39",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:35",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/14/2015",
            "-EnteredOnDate": "4/14/2015",
            "-EnteredOnTime": "15:24",
            "-DaylightSavingsFlag": "true",
            "-Time": "18:22",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/15/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/15/2015",
            "-EnteredOnDate": "4/15/2015",
            "-EnteredOnTime": "4:59",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:58",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/15/2015",
            "-EnteredOnDate": "4/15/2015",
            "-EnteredOnTime": "10:05",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:00",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/15/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "0:59",
            "-DurationOfException": "1:00",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/15/2015",
            "-EnteredOnDate": "4/15/2015",
            "-EnteredOnTime": "10:35",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:30",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/15/2015",
            "-EnteredOnDate": "4/15/2015",
            "-EnteredOnTime": "14:35",
            "-DaylightSavingsFlag": "true",
            "-Time": "17:30",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/16/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/16/2015",
            "-EnteredOnDate": "4/16/2015",
            "-EnteredOnTime": "5:00",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:57",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/16/2015",
            "-EnteredOnDate": "4/16/2015",
            "-EnteredOnTime": "10:16",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:13",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/16/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "1:33",
            "-DurationOfException": "1:34",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/16/2015",
            "-EnteredOnDate": "4/16/2015",
            "-EnteredOnTime": "10:46",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:43",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/16/2015",
            "-EnteredOnDate": "4/16/2015",
            "-EnteredOnTime": "15:05",
            "-DaylightSavingsFlag": "true",
            "-Time": "18:04",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/17/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/17/2015",
            "-EnteredOnDate": "4/17/2015",
            "-EnteredOnTime": "5:01",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:56",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/17/2015",
            "-EnteredOnDate": "4/17/2015",
            "-EnteredOnTime": "10:11",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:07",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/17/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "0:00",
            "-DurationOfException": "0:01",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/17/2015",
            "-EnteredOnDate": "4/17/2015",
            "-EnteredOnTime": "10:41",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:38",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/17/2015",
            "-EnteredOnDate": "4/17/2015",
            "-EnteredOnTime": "13:31",
            "-DaylightSavingsFlag": "true",
            "-Time": "16:31",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/20/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/20/2015",
            "-EnteredOnDate": "4/20/2015",
            "-EnteredOnTime": "4:58",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:55",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/20/2015",
            "-EnteredOnDate": "4/20/2015",
            "-EnteredOnTime": "10:08",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:04",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/20/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "1:38",
            "-DurationOfException": "1:39",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/20/2015",
            "-EnteredOnDate": "4/20/2015",
            "-EnteredOnTime": "10:38",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:35",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/20/2015",
            "-EnteredOnDate": "4/20/2015",
            "-EnteredOnTime": "15:14",
            "-DaylightSavingsFlag": "true",
            "-Time": "18:09",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/21/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/21/2015",
            "-EnteredOnDate": "4/21/2015",
            "-EnteredOnTime": "4:59",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:58",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/21/2015",
            "-EnteredOnDate": "4/21/2015",
            "-EnteredOnTime": "10:04",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:01",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/21/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "2:43",
            "-DurationOfException": "2:44",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/21/2015",
            "-EnteredOnDate": "4/21/2015",
            "-EnteredOnTime": "10:35",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:31",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/21/2015",
            "-EnteredOnDate": "4/21/2015",
            "-EnteredOnTime": "16:14",
            "-DaylightSavingsFlag": "true",
            "-Time": "19:14",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/22/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/22/2015",
            "-EnteredOnDate": "4/22/2015",
            "-EnteredOnTime": "5:30",
            "-DaylightSavingsFlag": "true",
            "-Time": "8:28",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/22/2015",
            "-EnteredOnDate": "4/22/2015",
            "-EnteredOnTime": "11:36",
            "-DaylightSavingsFlag": "true",
            "-Time": "14:31",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/22/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": [
          {
            "-InPunchFlag": "true",
            "-DifferenceToLimit": "0:00",
            "-DurationOfException": "0:29",
            "-ExceptionTypeName": "SHORT"
          },
          {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "1:36",
            "-DurationOfException": "1:37",
            "-ExceptionTypeName": "LATE"
          }
          ]
        },
        "InPunch": {
          "Punch": {
            "Date": "4/22/2015",
            "-EnteredOnDate": "4/22/2015",
            "-EnteredOnTime": "12:06",
            "-DaylightSavingsFlag": "true",
            "-Time": "15:00",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "13 - LUNCH EXCEPTION - UNAPPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/22/2015",
            "-EnteredOnDate": "4/22/2015",
            "-EnteredOnTime": "15:11",
            "-DaylightSavingsFlag": "true",
            "-Time": "18:07",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/23/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/23/2015",
            "-EnteredOnDate": "4/23/2015",
            "-EnteredOnTime": "5:01",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:58",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/23/2015",
            "-EnteredOnDate": "4/23/2015",
            "-EnteredOnTime": "10:11",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:08",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/23/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": [
          {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "0:04",
            "-DurationOfException": "0:05",
            "-ExceptionTypeName": "LATE"
          },
          {
            "-InPunchFlag": "true",
            "-DifferenceToLimit": "0:00",
            "-DurationOfException": "0:29",
            "-ExceptionTypeName": "SHORT"
          }
          ]
        },
        "InPunch": {
          "Punch": {
            "Date": "4/23/2015",
            "-EnteredOnDate": "4/23/2015",
            "-EnteredOnTime": "10:41",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:37",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "13 - LUNCH EXCEPTION - UNAPPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/23/2015",
            "-EnteredOnDate": "4/23/2015",
            "-EnteredOnTime": "13:36",
            "-DaylightSavingsFlag": "true",
            "-Time": "16:35",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/24/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/24/2015",
            "-EnteredOnDate": "4/24/2015",
            "-EnteredOnTime": "5:01",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:58",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/24/2015",
            "-EnteredOnDate": "4/24/2015",
            "-EnteredOnTime": "10:17",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:15",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/24/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "1:24",
            "-DurationOfException": "1:25",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/24/2015",
            "-EnteredOnDate": "4/24/2015",
            "-EnteredOnTime": "10:47",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:45",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/24/2015",
            "-EnteredOnDate": "4/24/2015",
            "-EnteredOnTime": "14:57",
            "-DaylightSavingsFlag": "true",
            "-Time": "17:55",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/27/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/27/2015",
            "-EnteredOnDate": "4/27/2015",
            "-EnteredOnTime": "4:59",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:57",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/27/2015",
            "-EnteredOnDate": "4/27/2015",
            "-EnteredOnTime": "10:09",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:06",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/27/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "0:22",
            "-DurationOfException": "0:23",
            "-ExceptionTypeName": "LATE"
          }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/27/2015",
            "-EnteredOnDate": "4/27/2015",
            "-EnteredOnTime": "10:39",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:36",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/27/2015",
            "-EnteredOnDate": "4/27/2015",
            "-EnteredOnTime": "13:54",
            "-DaylightSavingsFlag": "true",
            "-Time": "16:53",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/28/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/28/2015",
            "-EnteredOnDate": "4/28/2015",
            "-EnteredOnTime": "5:00",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:58",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/28/2015",
            "-EnteredOnDate": "4/28/2015",
            "-EnteredOnTime": "10:09",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:06",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/28/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "Exceptions": {
          "TimekeepingException": [
          {
            "-InPunchFlag": "false",
            "-DifferenceToLimit": "0:24",
            "-DurationOfException": "0:25",
            "-ExceptionTypeName": "LATE"
          },
          {
            "-InPunchFlag": "true",
            "-DifferenceToLimit": "0:00",
            "-DurationOfException": "0:29",
            "-ExceptionTypeName": "SHORT"
          }
          ]
        },
        "InPunch": {
          "Punch": {
            "Date": "4/28/2015",
            "-EnteredOnDate": "4/28/2015",
            "-EnteredOnTime": "10:40",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:35",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "13 - LUNCH EXCEPTION - UNAPPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/28/2015",
            "-EnteredOnDate": "4/28/2015",
            "-EnteredOnTime": "14:00",
            "-DaylightSavingsFlag": "true",
            "-Time": "16:55",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Comments": {
              "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
            },
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/30/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/30/2015",
            "-EnteredOnDate": "4/30/2015",
            "-EnteredOnTime": "5:01",
            "-DaylightSavingsFlag": "true",
            "-Time": "7:56",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/30/2015",
            "-EnteredOnDate": "4/30/2015",
            "-EnteredOnTime": "10:06",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:04",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      },
      {
        "Date": "4/30/2015",
        "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
        "-LaborAccountId": "83249",
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "InPunch": {
          "Punch": {
            "Date": "4/30/2015",
            "-EnteredOnDate": "4/30/2015",
            "-EnteredOnTime": "10:37",
            "-DaylightSavingsFlag": "true",
            "-Time": "13:34",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        },
        "OutPunch": {
          "Punch": {
            "Date": "4/30/2015",
            "-EnteredOnDate": "4/30/2015",
            "-EnteredOnTime": "13:32",
            "-DaylightSavingsFlag": "true",
            "-Time": "16:30",
            "-KronosTimeZone": "(GMT -05:00) Eastern Time",
            "Employee": {
              "PersonIdentity": { "-PersonNumber": "N0686" }
            }
          }
        }
      }
      ]
    }
  }
}