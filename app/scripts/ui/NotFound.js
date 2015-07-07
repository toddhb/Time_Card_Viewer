/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from "react"

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound-distributed text-center">
          <p className="NotFound-large-type">
            Woops! We got lost somewhere...
          </p>

        <div className="NotFound-large-type">
          <i className="fa fa-question"></i>
        </div>

        <div className="NotFound-larger-type">
          <i className="fa fa-truck"></i>
        </div>
      </div>
    );
  }
}
