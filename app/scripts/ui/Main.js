import React from 'react'
import Router, { RouteHandler, Link} from "react-router"
import Navbar from "./Navbar.js"
import AlertBar from "./AlertBar.js"

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar title="Steve's Time Card" />
        <AlertBar />
        <RouteHandler {...this.params} />
      </div>
    ) 
  } 
}