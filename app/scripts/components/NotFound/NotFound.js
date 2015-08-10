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
            <br/><br/><br/><br/>
            Whoops! We got lost...
            <br/><br/>
          </p>

        <div className="text-center">
          <a>
            <img src={"/images/question-mark.png"} width="47" height="76" />
            <br/><br/>
          </a>
        </div>

        <div className="text-center">
          <a>
            <img src={"/images/truck-right.png"} width="214" height="112" />
          </a>
        </div>
      </div>
    );
  }
}
