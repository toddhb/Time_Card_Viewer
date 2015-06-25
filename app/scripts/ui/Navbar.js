import React from 'react'
import moment from "moment"
import Router, { RouteHandler, Link} from "react-router"

export default class Navbar {
  render() {
    const currentMonth = moment().date();
    return (
      <div className="container-fluid">
        <div className="header">
          <h3 className="text-muted">
            <Link to="/">{this.props.title}</Link>
            <Link to="/calendar" className="nav-icon pull-right">
                <i className="fa fa-calendar"></i>
            </Link>
          </h3>
        </div>
      </div>
    )
  }
}