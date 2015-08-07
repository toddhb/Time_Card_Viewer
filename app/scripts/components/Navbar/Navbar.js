/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react'
import Router, { RouteHandler, Link} from "react-router"
import IsLoggedIn from "../IsLoggedIn/IsLoggedIn"
import IsNotLoggedIn from "../IsNotLoggedIn/IsNotLoggedIn"
import flux from "../../flux/flux"

export default class Navbar {
  handleLogin = () => {
    flux.getActions('kronos').login()
  }
  handleLogout = () => {
    flux.getActions('kronos').logout()
  }
  render() {
    const url = "http://www.con-way.com/en"
    const companyLogo = "/images/logo.gif"
    return (
      <div>
        <IsLoggedIn>
          <div className="navbar-home">
            <Link to="app" className="home"></Link>
          </div>
        </IsLoggedIn>
        <div className="text-center navbar-logo">
          <a href={url}>
            <img src={companyLogo} width="104" height="30" />
          </a>
        </div>
        <div className="navbar-button">
          <IsLoggedIn>
            <a onClick={this.handleLogout}>
              Log out
            </a>
          </IsLoggedIn>
          <IsNotLoggedIn>
            <a onClick={this.handleLogin}>
              Log in
            </a>
          </IsNotLoggedIn>
        </div>
      </div>
    )
  }
}