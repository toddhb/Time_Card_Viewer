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

export class ScheduleActions extends Actions {
  fetch(content) {
    return content // automatically dispatched
  }
}

export class ScheduleStore extends Store {
  constructor(flux) {
    super()

    const scheduleStore = flux.getActions('schedule')
    this.register(ScheduleActions.fetch, this.handleFetch)

    this.state = defaultState
  }
  handleFetch(content) {}
}

const defaultState = {
  "Schedule": {
    "QueryDateSpan": "4/01/2015 - 4/30/2015",
    "Employees": {
      "PersonIdentity": { "PersonNumber": "N0686" }
    },
    "ScheduleItems": {
      "ScheduleShift": [
        {
          "LockedFlag": "false",
          "StartDate": "4/29/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/29/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/29/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/28/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/28/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/28/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/27/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/27/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/27/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/30/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/30/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/30/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/24/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/24/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/24/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/23/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/23/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/23/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/21/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/21/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/21/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/20/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/20/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/20/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/17/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/17/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/17/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/16/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/16/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/16/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/15/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/15/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/15/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/14/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/14/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/14/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/13/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/13/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/13/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/10/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/10/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/10/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/09/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/09/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/09/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/08/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/08/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/08/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/06/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/06/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/06/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/07/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/07/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/07/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/02/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/02/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/02/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/03/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/03/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/03/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/22/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/22/2015",
              "StartTime": "8:30",
              "StartDayNumber": "1",
              "EndDate": "4/22/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        },
        {
          "LockedFlag": "false",
          "StartDate": "4/01/2015",
          "IsDeleted": "false",
          "Employee": {
            "PersonIdentity": { "PersonNumber": "N0686" }
          },
          "ShiftSegments": {
            "ShiftSegment": {
              "SegmentTypeName": "REGULAR",
              "StartDate": "4/01/2015",
              "StartTime": "8:00",
              "StartDayNumber": "1",
              "EndDate": "4/01/2015",
              "EndTime": "16:30",
              "EndDayNumber": "1"
            }
          }
        }
      ]
    },
    "SchedulePatterns": {
      "SchedulePattern": {
        "AnchorDate": "8/03/2014",
        "SchedulePatternName": " #257213",
        "EffectiveDateSpan": "8/03/2014 - 1/01/3000",
        "PeriodLengthInDays": "7",
        "PeriodLength": "1",
        "PeriodCodeName": "WEEKS",
        "IsTemplateFlag": "false",
        "IsOverrideFlag": "false",
        "Employee": {
          "PersonIdentity": { "PersonNumber": "N0686" }
        },
        "PatternElements": {
          "PatternElement": [
            {
              "DayNumber": "2",
              "ShiftCode": {
                "ShiftCode": {
                  "ShiftSegments": {
                    "ShiftSegment": {
                      "SegmentTypeName": "REGULAR",
                      "StartTime": "8:00",
                      "StartDayNumber": "1",
                      "EndTime": "16:30",
                      "EndDayNumber": "1"
                    }
                  }
                }
              }
            },
            {
              "DayNumber": "3",
              "ShiftCode": {
                "ShiftCode": {
                  "ShiftSegments": {
                    "ShiftSegment": {
                      "SegmentTypeName": "REGULAR",
                      "StartTime": "8:00",
                      "StartDayNumber": "1",
                      "EndTime": "16:30",
                      "EndDayNumber": "1"
                    }
                  }
                }
              }
            },
            {
              "DayNumber": "4",
              "ShiftCode": {
                "ShiftCode": {
                  "ShiftSegments": {
                    "ShiftSegment": {
                      "SegmentTypeName": "REGULAR",
                      "StartTime": "8:00",
                      "StartDayNumber": "1",
                      "EndTime": "16:30",
                      "EndDayNumber": "1"
                    }
                  }
                }
              }
            },
            {
              "DayNumber": "5",
              "ShiftCode": {
                "ShiftCode": {
                  "ShiftSegments": {
                    "ShiftSegment": {
                      "SegmentTypeName": "REGULAR",
                      "StartTime": "8:00",
                      "StartDayNumber": "1",
                      "EndTime": "16:30",
                      "EndDayNumber": "1"
                    }
                  }
                }
              }
            },
            {
              "DayNumber": "6",
              "ShiftCode": {
                "ShiftCode": {
                  "ShiftSegments": {
                    "ShiftSegment": {
                      "SegmentTypeName": "REGULAR",
                      "StartTime": "8:00",
                      "StartDayNumber": "1",
                      "EndTime": "16:30",
                      "EndDayNumber": "1"
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  }
}