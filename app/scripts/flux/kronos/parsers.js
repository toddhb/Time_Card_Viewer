/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu, 
 * Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import _ from 'lodash'
import moment from 'moment'

export function parseTimesheet(kronosData) {
  // { 
  //   timesheet: {
  //     startDate: <Moment>
  //     endDate: <Moment>
  //     days: [
  //       {
  //          date: <Moment>
  //          total: <String>
  //          totals: [
  //            {
  //               amountInTime: <Number>,
  //               payCodeId: <Number>,
  //               payCodeName: <String>,
  //            }
  //          ]
  //       }
  //     ],
  //     inPunches: [
  //       {
  //          time: <Moment>
  //       }
  //     ],
  //     outPunches: [
  //       {
  //          time: <Moment>
  //       }
  //     ],
  //     exceptions: [
  //       {
  //          date: <Moment>
  //          type: <String> // LATE or SHORT
  //          differenceToLimit: <String> // TODO may change
  //          duration: <String> // TODO may change
  //          inPunchFlag: <String> // TODO may change
  //       }
  //     ],
  //     totals: [
  //       {
  //          amountInTime: <Number>,
  //          payCodeId: <Number>,
  //          payCodeName: <String>,
  //       }
  //     ]
  // }
  const kronosResponse = kronosData.Kronos_WFC.Response
  const [startDate, endDate] = _.chain(kronosResponse)
      .get('Timesheet.PeriodTotalData.PeriodTotals._PeriodDateSpan', '')
      .thru(periodString => periodString.split(' - '))
      .map(date => moment(date, 'M/DD/YYYY'))
      .value()
  return {
    timesheet: {
      startDate: startDate,
      endDate: endDate,
      days: _.chain(kronosResponse)
          .get('Timesheet.DailyTotals.DateTotals', [])
          .map(each => ({
              date: moment(each._Date, 'M/DD/YYYY'),
              total: parseTime(each._GrandTotal || "0:00"),
              totals: _.chain(each)
                .get('Totals.Total')
                .compact()
                .map(each => parseTotal(each))
                .value()
            })
          )
          .filter(each => each.date.isBetween(startDate, endDate))
          .value(),
      inPunches: _.chain(kronosResponse)
        .get('Timesheet.TotaledSpans.TotaledSpan', [])
        .map(eachSpan => {
			if(eachSpan.InPunch.Punch != "") {
				const laborName = eachSpan._LaborAccountName
				const dateString = eachSpan.InPunch.Punch._Date
				const timeString = eachSpan.InPunch.Punch._Time
				const timeZone = eachSpan.InPunch.Punch._KronosTimeZone.match(/[+-]\d\d:\d\d/)[0]
				return {
					LaborName: laborName,
					time: moment(
					`${dateString} ${timeString} ${timeZone}`, 
					'M/DD/YYYY HH:mm Z'
					),					
				}
			} else {
				return ""
			}
		/*.map(eachSpan => _.get(eachSpan, 'InPunch.Punch'))
        .compact()
        .map(eachPunch => {
          const dateString = eachPunch._Date
          const timeString = eachPunch._Time
          const timeZone = eachPunch._KronosTimeZone.match(/[+-]\d\d:\d\d/)[0]
          return {
            time: moment(
                `${dateString} ${timeString} ${timeZone}`, 
                'M/DD/YYYY HH:mm Z'
            ),
          }*/
        })
        .value(),
      outPunches: _.chain(kronosResponse)
        .get('Timesheet.TotaledSpans.TotaledSpan', [])
        .map(eachSpan => {
			if(eachSpan.OutPunch.Punch != "") {
				const laborName = eachSpan._LaborAccountName
				const dateString = eachSpan.OutPunch.Punch._Date
				const timeString = eachSpan.OutPunch.Punch._Time
				const timeZone = eachSpan.OutPunch.Punch._KronosTimeZone.match(/[+-]\d\d:\d\d/)[0]
				return {
					LaborName: laborName,
					time: moment(
					`${dateString} ${timeString} ${timeZone}`, 
					'M/DD/YYYY HH:mm Z'
					),					
				} 
			}else {
				return ""
			}
				/*_.chain(eachSpan)
				.get(eachSpan, 'OutPunch.Punch')
				.compact()
				.map(eachPunch => {
					const dateString = eachPunch._Date
					const timeString = eachPunch._Time
					const timeZone = eachPunch._KronosTimeZone.match(/[+-]\d\d:\d\d/)[0]
					return {
						LaborName: laborName,
						time: moment(
						`${dateString} ${timeString} ${timeZone}`, 
						'M/DD/YYYY HH:mm Z'
						),					
					}
				})
				.value()*/
		})		
        .value(),
      exceptions: _.chain(kronosResponse)
        .get('Timesheet.TotaledSpans.TotaledSpan', [])
        .map(eachSpan => _.chain(eachSpan)
            .get('Exceptions.TimekeepingException')
            // Map {a:x} -> [{a:x}] and [{a:x},{b:y}] -> [{a:x},{b:y}]
            .thru(x => [x]).flatten().compact()
            .map(eachException => ({
              date: moment(eachSpan._Date, 'M/DD/YYYY'),
              type: `${eachException._ExceptionTypeName}`,
              differenceToLimit: parseTime(eachException._DifferenceToLimit),
              duration: parseTime(eachException._DurationOfException), 
              inPunchFlag: `${eachException._InPunchFlag}`, // I don't know what this is
            }))
            .value()
        )
        .filter(each => each.length > 0)
        .flatten()
        .value(),
      totals: _.chain(kronosResponse)
        .get('Timesheet.PeriodTotalData.PeriodTotals.Totals.Total', [])
        .map(each => parseTotal(each))
        .value(),
    }
  }
}

export function parseLogin(kronosData) {
  // Object -> Object
  const kronosResponse = kronosData.Kronos_WFC.Response
  return {
    status: kronosResponse._Status,
    username: kronosResponse._Username,
    errorCode: kronosResponse._ErrorCode || "",
  } 
}
export function parseLogout(kronosData) {
  // Object -> Object
  const kronosResponse = kronosData.Kronos_WFC.Response
  return {
    status: kronosResponse._Status,
    errorCode: kronosResponse._ErrorCode || "",
  } 
}

function parseTotal(input) {
  // Object -> Object
  return {
    amountInTime: parseTime(input._AmountInTime),
    payCodeId: input._PayCodeId,
    payCodeName: input._PayCodeName,
  }
}

function parseTime(input) {
  // String -> Number
  // The input is expected to have an `toString` 
  // method that produces a string with  the syntax
  // `HH:mm` Sematically `HH` represents the number
  // of hours and `MM` represents the number of 
  // minutes. The resulting number is the number of
  // hours.
  return _.chain(input)
      // Split string into hours and minutes
      .thru(x => x.split(':'))
      // Convert to the number of hours worked
      .thru(([hours, minutes]) => Number(hours) + (Number(minutes) / 60))
      // Round to 2 digits
      .thru(x => _.round(x, 2))
      .value()
}
