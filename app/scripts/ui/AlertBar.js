/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from "react"

export default class AlertBar {
  hide() {
    document.getElementById("panel").style.display = 'none';
  }
  render() {
    return (
      <div className="schedule-alert panel" id="panel">
        <h2 className="text-center">See you again in <span className="number-font">12</span> hours</h2>
        <a type="button" className="button-dismiss" id="close" onClick={this.hide}>X</a>
      </div>
    )
  }
}