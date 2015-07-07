/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import { Flummox } from 'flummox';
import { DayActions, DayStore } from "./days"
import { DayStreamActions, DayStreamStore} from "./daystream"
import { TimeSheetActions, TimeSheetStore} from "./timeSheet"
import { ScheduleActions, ScheduleStore } from "./schedule"

class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('days', DayActions);
    this.createStore('days', DayStore, this);
    this.createActions('daystream', DayStreamActions);
    this.createStore('daystream', DayStreamStore, this);
    this.createActions('timeSheet', TimeSheetActions);
    this.createStore('timeSheet', TimeSheetStore, this);
    this.createActions('schedule', ScheduleActions);
    this.createStore('schedule', ScheduleStore, this);
  }
}

const flux = new Flux();

export default flux
