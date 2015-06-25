import React from 'react'
import Router, { RouteHandler, Link} from "react-router"
import Navbar from "./Navbar.js"
    
class NavContainer extends React.Component {
  render() {
    return (
      <Navbar title="Steve's Time" />
    ) 
  } 
}

class BodyContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <RouteHandler {...this.params} />
      </div>
    ) 
  } 
}

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <NavContainer></NavContainer>
        <BodyContainer></BodyContainer>
      </div>
    ) 
  } 
}