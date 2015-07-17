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

export default class Navbar {
  render() {
    return (
        <div className="header">
          <h3 className="text-muted">
            <Link to="/">{this.props.title}</Link>
            <Link to="/calendar" className="nav-icon pull-right">
            </Link>
          </h3>
        </div>
    )
  }
}