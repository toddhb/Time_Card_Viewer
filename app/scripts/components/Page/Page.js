/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react'
import _ from 'lodash'
import FluxComponent from 'flummox/component';
import IsLoggedIn from "../IsLoggedIn/IsLoggedIn"
import IsNotLoggedIn from "../IsNotLoggedIn/IsNotLoggedIn"
import IsDataAvailable from "../IsDataAvailable/IsDataAvailable"
import IsDataNotAvailable from "../IsDataNotAvailable/IsDataNotAvailable"
import Login from "../Login/Login"

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
    const loginIcons = [<i className="fa fa-clock-o" id="icon-1"></i>, 
                        <i className="fa fa-clock-o" id="icon-2"></i>, 
                        <i className="fa fa-clock-o" id="icon-3"></i>]
    return (
      <div>
        <IsLoggedIn>
          {this.props.children}
        </IsLoggedIn>
        <IsNotLoggedIn>
          <h1 className="text-center" id="login-splash">Login to see your time card</h1>
          <Login />
          <p className="text-center" id="login-icons">{loginIcons}</p>
        </IsNotLoggedIn>
      </div>
    )
  } 
}