import React from 'react'
import Router, { RouteHandler, Link} from "react-router"

export default class Navbar {
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <h3 className="text-muted">
            <Link to="/">{this.props.title}</Link>
          </h3>
        </div>
      </div>
    )
  }
}