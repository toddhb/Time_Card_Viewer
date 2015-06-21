import React from 'react'

import Router from "react-router"
const RouteHandler = Router.RouteHandler;
const Link = Router.Link;

export default class Navbar {
  render() {
    return (
      <div className="header">
        <h3 className="text-muted">
          <Link to="/">{this.props.title}</Link>
        </h3>
      </div>
    )
  }
}