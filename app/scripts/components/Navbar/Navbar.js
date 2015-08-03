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
        <div className="navbar-home">
          <Link to="app" className="home"></Link>
        </div>
        <div className="text-center navbar-logo">
          <a href={url}>
            <img src={companyLogo} width="104" height="30" />
          </a>
        </div>
        <div className="pull-right">
          <IsLoggedIn>
            <button className="btn btn-default"
                    onClick={this.handleLogout}>
              Logout
            </button>
          </IsLoggedIn>
          <IsNotLoggedIn>
            <button className="btn btn-default"
                    onClick={this.handleLogin}>
              Login 
            </button>
          </IsNotLoggedIn>
        </div>
      </div>
    )
  }
}