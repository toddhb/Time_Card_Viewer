/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react';
import FluxComponent from 'flummox/component'
import flux from '../../flux/flux'
import _ from 'lodash'

export default class Login extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={{
        kronos: store => ({
          isLoggedIn: store.isLoggedIn(),
        }),
      }}> 
        <LoginInner {...this.props} />
      </FluxComponent> 
    )
  }
}


class LoginInner extends React.Component {
	// Login will pass the username entered to the Kronos Store for API calls
	// TODO: Include validation list of existing IDs for demo-validation
	constructor(props) {
    super(props)
    this.state = {
    	isValidUser: true,
    	value: "N0686"
    }
  }
  handleKeyDown = (keyPress) => {
    const enterKey = 13
    if(keyPress.which == enterKey) {
    	this.handleLogin()
    }	
  }
	handleChange = () => {
    this.setState({
    	value: event.target.value
    })
  }
	handleLogin = () => {
		// This is a really good candidate for testing...
		const id = this.state.value
		const validIds = ["N0686", "F1585", "R2199", "N6989", "05400"]
		if(_.includes(validIds, id)) {
			this.setState({isValidUser: true})
    	flux.getActions('kronos').login(id)
    } else {
    	console.log("Bad ID provided..." + id)
    	this.setState({isValidUser: false})
    }
  }
  clearText = () => {
  	this.setState({
  		isValidUser: true,  // This isn't really the case, but removes it until re-"validated"
  		value: ""
  	})
  }
  render() {
  	// The button and input could be seperate components and not include the column defintions here
  	var value = this.state.value
  	return (
			<div className="col-sm-12 text-center">
				<input type="text" value={value} className="text-center" id="login"
				   onChange={this.handleChange} onClick={this.clearText} onKeyDown={this.handleKeyDown} />
				<LoginError isVisible={this.state.isValidUser}/>
				<a onClick={this.handleLogin} id="login-btn">Login</a>
			</div>
  	)
  }
}

class LoginError extends React.Component {
	render() {
		var visibilityClass = this.props.isVisible ? "invisible" : "visible"
		return (
			<p id="login-error" className={visibilityClass}>That username is invalid...</p>
		)
	}
}