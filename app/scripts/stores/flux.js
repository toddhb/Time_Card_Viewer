import { Flummox } from 'flummox';
import { DayActions, DayStore } from "./days"
import { DayStreamActions, DayStreamStore} from "./daystream"

class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('days', DayActions);
    this.createStore('days', DayStore, this);
    this.createActions('daystream', DayStreamActions);
    this.createStore('daystream', DayStreamStore, this);
  }
}

const flux = new Flux();

export default flux
