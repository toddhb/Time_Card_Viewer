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

export class timeSheetActions extends Actions {
  fetch(content) {
    return content // automatically dispatched
  }
}

export class timeSheetStore extends Store {
  constructor(flux) {
    super()

    const timeSheetStore = flux.getActions('timeSheet')
    this.register(timeSheetActions.fetch, this.handleFetch)

    this.state = defaultState
  }
  handleFetch(content) {}
}

const defaultState = {
    "Response": {
      "-Status": "Success",
      "-Action": "Load",
      "Timesheet": {
        "-LastTotalizationDateTime": "6/20/2015 0:30",
        "-ManagerSignoffDateTime": "5/16/2015 0:00",
        "-TotalsUpToDateFlag": "true",
        "DailyTotals": {
          "DateTotals": [
            { "-Date": "5/09/2015" },
            {
              "-Date": "5/10/2015",
              "-GrandTotal": "0:00"
            },
            {
              "-Date": "5/11/2015",
              "-GrandTotal": "8:03",
              "Totals": {
                "Total": [
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.98",
                    "-PayCodeId": "134",
                    "-PayCodeName": "Straight",
                    "-AmountInTime": "8:03",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.98",
                    "-PayCodeId": "139",
                    "-PayCodeName": "All Hours Worked",
                    "-AmountInTime": "8:03",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.98",
                    "-PayCodeId": "140",
                    "-PayCodeName": "All Hours Worked plus UAOT",
                    "-AmountInTime": "8:03",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.98",
                    "-PayCodeId": "142",
                    "-PayCodeName": "All Paid Hours",
                    "-AmountInTime": "8:03",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.98",
                    "-PayCodeId": "1014",
                    "-PayCodeName": "All Straight Productive",
                    "-AmountInTime": "8:03",
                    "-AmountInDays": "0"
                  }
                ]
              }
            },
            {
              "-Date": "5/12/2015",
              "-GrandTotal": "8:00",
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
              "-Date": "5/13/2015",
              "-GrandTotal": "8:01",
              "Totals": {
                "Total": [
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "134",
                    "-PayCodeName": "Straight",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "139",
                    "-PayCodeName": "All Hours Worked",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "140",
                    "-PayCodeName": "All Hours Worked plus UAOT",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "142",
                    "-PayCodeName": "All Paid Hours",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "1014",
                    "-PayCodeName": "All Straight Productive",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  }
                ]
              }
            },
            {
              "-Date": "5/14/2015",
              "-GrandTotal": "8:01",
              "Totals": {
                "Total": [
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "134",
                    "-PayCodeName": "Straight",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "139",
                    "-PayCodeName": "All Hours Worked",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "140",
                    "-PayCodeName": "All Hours Worked plus UAOT",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "142",
                    "-PayCodeName": "All Paid Hours",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.49",
                    "-PayCodeId": "1014",
                    "-PayCodeName": "All Straight Productive",
                    "-AmountInTime": "8:01",
                    "-AmountInDays": "0"
                  }
                ]
              }
            },
            {
              "-Date": "5/15/2015",
              "-GrandTotal": "8:02",
              "Totals": {
                "Total": [
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.73",
                    "-PayCodeId": "134",
                    "-PayCodeName": "Straight",
                    "-AmountInTime": "8:02",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.73",
                    "-PayCodeId": "139",
                    "-PayCodeName": "All Hours Worked",
                    "-AmountInTime": "8:02",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.73",
                    "-PayCodeId": "140",
                    "-PayCodeName": "All Hours Worked plus UAOT",
                    "-AmountInTime": "8:02",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.73",
                    "-PayCodeId": "142",
                    "-PayCodeName": "All Paid Hours",
                    "-AmountInTime": "8:02",
                    "-AmountInDays": "0"
                  },
                  {
                    "-IsCurrencyFlag": "false",
                    "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                    "-LaborAccountId": "83249",
                    "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                    "-AmountInCurrency": "118.73",
                    "-PayCodeId": "1014",
                    "-PayCodeName": "All Straight Productive",
                    "-AmountInTime": "8:02",
                    "-AmountInDays": "0"
                  }
                ]
              }
            },
            { "-Date": "5/17/2015" },
            {
              "-Date": "5/16/2015",
              "-GrandTotal": "0:00"
            }
          ]
        },
        "Employee": {
          "PersonIdentity": { "-PersonNumber": "N0686" }
        },
        "PeriodTotalData": {
          "PeriodTotals": {
            "-PeriodDateSpan": "5/10/2015 - 5/16/2015",
            "Totals": {
              "Total": [
                {
                  "-IsCurrencyFlag": "false",
                  "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                  "-LaborAccountId": "83249",
                  "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                  "-AmountInCurrency": "474.68",
                  "-PayCodeId": "134",
                  "-PayCodeName": "Straight",
                  "-AmountInTime": "32:07",
                  "-AmountInDays": "0"
                },
                {
                  "-IsCurrencyFlag": "false",
                  "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                  "-LaborAccountId": "83249",
                  "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                  "-AmountInCurrency": "474.68",
                  "-PayCodeId": "139",
                  "-PayCodeName": "All Hours Worked",
                  "-AmountInTime": "32:07",
                  "-AmountInDays": "0"
                },
                {
                  "-IsCurrencyFlag": "false",
                  "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                  "-LaborAccountId": "83249",
                  "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                  "-AmountInCurrency": "474.68",
                  "-PayCodeId": "140",
                  "-PayCodeName": "All Hours Worked plus UAOT",
                  "-AmountInTime": "32:07",
                  "-AmountInDays": "0"
                },
                {
                  "-IsCurrencyFlag": "false",
                  "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                  "-LaborAccountId": "83249",
                  "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                  "-AmountInCurrency": "592.92",
                  "-PayCodeId": "142",
                  "-PayCodeName": "All Paid Hours",
                  "-AmountInTime": "40:07",
                  "-AmountInDays": "0"
                },
                {
                  "-IsCurrencyFlag": "false",
                  "-LaborAccountDescription": "Menlo Worldwide/Menlo Worldwide Logistics/Consumer Industry Group/HILTI-WH-DAYTON NJ/MAQUETINC-WH-DAYTNNJ/Receiving/-",
                  "-LaborAccountId": "83249",
                  "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
                  "-AmountInCurrency": "474.68",
                  "-PayCodeId": "1014",
                  "-PayCodeName": "All Straight Productive",
                  "-AmountInTime": "32:07",
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
            "-PeriodDateSpan": "5/10/2015 - 5/16/2015",
            "-TimeFrameName": "9"
          }
        },
        "TotaledPayCodeEdits": {
          "PayCodeEdit": {
            "-Date": "5/12/2015",
            "-EnteredOnDate": "5/18/2015",
            "-EnteredOnTime": "7:14",
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
              "-Date": "5/11/2015",
              "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
              "-LaborAccountId": "83249",
              "Employee": {
                "PersonIdentity": { "-PersonNumber": "N0686" }
              },
              "InPunch": {
                "Punch": {
                  "-Date": "5/11/2015",
                  "-EnteredOnDate": "5/11/2015",
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
                  "-Date": "5/11/2015",
                  "-EnteredOnDate": "5/11/2015",
                  "-EnteredOnTime": "10:07",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "13:03",
                  "-KronosTimeZone": "(GMT -05:00) Eastern Time",
                  "Employee": {
                    "PersonIdentity": { "-PersonNumber": "N0686" }
                  }
                }
              }
            },
            {
              "-Date": "5/11/2015",
              "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
              "-LaborAccountId": "83249",
              "Employee": {
                "PersonIdentity": { "-PersonNumber": "N0686" }
              },
              "Exceptions": {
                "TimekeepingException": {
                  "-InPunchFlag": "false",
                  "-DifferenceToLimit": "0:02",
                  "-DurationOfException": "0:03",
                  "-ExceptionTypeName": "LATE"
                }
              },
              "InPunch": {
                "Punch": {
                  "-Date": "5/11/2015",
                  "-EnteredOnDate": "5/11/2015",
                  "-EnteredOnTime": "10:36",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "13:33",
                  "-KronosTimeZone": "(GMT -05:00) Eastern Time",
                  "Employee": {
                    "PersonIdentity": { "-PersonNumber": "N0686" }
                  }
                }
              },
              "OutPunch": {
                "Punch": {
                  "-Date": "5/11/2015",
                  "-EnteredOnDate": "5/11/2015",
                  "-EnteredOnTime": "13:34",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "16:33",
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
              "-Date": "5/13/2015",
              "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
              "-LaborAccountId": "83249",
              "Employee": {
                "PersonIdentity": { "-PersonNumber": "N0686" }
              },
              "InPunch": {
                "Punch": {
                  "-Date": "5/13/2015",
                  "-EnteredOnDate": "5/13/2015",
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
                  "-Date": "5/13/2015",
                  "-EnteredOnDate": "5/13/2015",
                  "-EnteredOnTime": "10:05",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "13:03",
                  "-KronosTimeZone": "(GMT -05:00) Eastern Time",
                  "Employee": {
                    "PersonIdentity": { "-PersonNumber": "N0686" }
                  }
                }
              }
            },
            {
              "-Date": "5/13/2015",
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
                  "-Date": "5/13/2015",
                  "-EnteredOnDate": "5/13/2015",
                  "-EnteredOnTime": "10:34",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "13:33",
                  "-KronosTimeZone": "(GMT -05:00) Eastern Time",
                  "Employee": {
                    "PersonIdentity": { "-PersonNumber": "N0686" }
                  }
                }
              },
              "OutPunch": {
                "Punch": {
                  "-Date": "5/13/2015",
                  "-EnteredOnDate": "5/13/2015",
                  "-EnteredOnTime": "13:35",
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
              "-Date": "5/14/2015",
              "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
              "-LaborAccountId": "83249",
              "Employee": {
                "PersonIdentity": { "-PersonNumber": "N0686" }
              },
              "InPunch": {
                "Punch": {
                  "-Date": "5/14/2015",
                  "-EnteredOnDate": "5/14/2015",
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
                  "-Date": "5/14/2015",
                  "-EnteredOnDate": "5/14/2015",
                  "-EnteredOnTime": "10:05",
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
              "-Date": "5/14/2015",
              "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
              "-LaborAccountId": "83249",
              "Employee": {
                "PersonIdentity": { "-PersonNumber": "N0686" }
              },
              "Exceptions": {
                "TimekeepingException": {
                  "-InPunchFlag": "true",
                  "-DifferenceToLimit": "0:00",
                  "-DurationOfException": "0:29",
                  "-ExceptionTypeName": "SHORT"
                }
              },
              "InPunch": {
                "Punch": {
                  "-Date": "5/14/2015",
                  "-EnteredOnDate": "5/14/2015",
                  "-EnteredOnTime": "10:35",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "13:33",
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
                  "-Date": "5/14/2015",
                  "-EnteredOnDate": "5/14/2015",
                  "-EnteredOnTime": "13:35",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "16:30",
                  "-KronosTimeZone": "(GMT -05:00) Eastern Time",
                  "Employee": {
                    "PersonIdentity": { "-PersonNumber": "N0686" }
                  }
                }
              }
            },
            {
              "-Date": "5/15/2015",
              "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
              "-LaborAccountId": "83249",
              "Employee": {
                "PersonIdentity": { "-PersonNumber": "N0686" }
              },
              "InPunch": {
                "Punch": {
                  "-Date": "5/15/2015",
                  "-EnteredOnDate": "5/15/2015",
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
                  "-Date": "5/15/2015",
                  "-EnteredOnDate": "5/15/2015",
                  "-EnteredOnTime": "10:15",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "13:14",
                  "-KronosTimeZone": "(GMT -05:00) Eastern Time",
                  "Employee": {
                    "PersonIdentity": { "-PersonNumber": "N0686" }
                  }
                }
              }
            },
            {
              "-Date": "5/15/2015",
              "-LaborAccountName": "MWW/MWL/CIG/HLT/QUN/914/-",
              "-LaborAccountId": "83249",
              "Employee": {
                "PersonIdentity": { "-PersonNumber": "N0686" }
              },
              "Exceptions": {
                "TimekeepingException": {
                  "-InPunchFlag": "false",
                  "-DifferenceToLimit": "0:01",
                  "-DurationOfException": "0:02",
                  "-ExceptionTypeName": "LATE"
                }
              },
              "InPunch": {
                "Punch": {
                  "-Date": "5/15/2015",
                  "-EnteredOnDate": "5/15/2015",
                  "-EnteredOnTime": "10:46",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "13:44",
                  "-KronosTimeZone": "(GMT -05:00) Eastern Time",
                  "Employee": {
                    "PersonIdentity": { "-PersonNumber": "N0686" }
                  }
                }
              },
              "OutPunch": {
                "Punch": {
                  "-Date": "5/15/2015",
                  "-EnteredOnDate": "5/15/2015",
                  "-EnteredOnTime": "13:36",
                  "-DaylightSavingsFlag": "true",
                  "-Time": "16:32",
                  "-KronosTimeZone": "(GMT -05:00) Eastern Time",
                  "Comments": {
                    "Comment": { "-CommentText": "90 - EXTENDED SHIFT - APPROVED" }
                  },
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

}