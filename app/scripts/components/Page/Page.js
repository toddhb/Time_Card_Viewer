/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react'
import FluxComponent from 'flummox/component';
import IsLoggedIn from "../IsLoggedIn/IsLoggedIn"
import IsNotLoggedIn from "../IsNotLoggedIn/IsNotLoggedIn"
import IsDataAvailable from "../IsDataAvailable/IsDataAvailable"
import IsDataNotAvailable from "../IsDataNotAvailable/IsDataNotAvailable"

export default class Page extends React.Component {
  render() {
    return (
      <FluxComponent>
        <PageInner />
      </FluxComponent>
    )
  } 
}
 
export default class PageInner extends React.Component {
  render() {
    return (
      <div>
        <IsLoggedIn>
          {this.props.children}
        </IsLoggedIn>
        <IsNotLoggedIn>
          <h1>Login Required</h1>
        </IsNotLoggedIn>
      </div>
    )
  } 
}