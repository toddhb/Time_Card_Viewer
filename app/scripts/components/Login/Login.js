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
    this.state = {value: "N0686"}
  }
	handleChange = () => {
    const keyCode = 13
    this.setState({value: event.target.value})
    if(event.which == keyCode) {
    	this.handleLogin()
    }
  }
	handleLogin = () => {
		console.log("handleLogin called...")
		const id = this.state.value
    flux.getActions('kronos').login(id)
  }
  clearText = () => {
  	this.setState({value: ""})
  }
  render() {
  	// The button and input could be seperate components and not include the column defintions here
  	var value = this.state.value
  	return (
			<div className="col-sm-12 text-center">
				<input type="text" value={value} className="text-center" id="login"
				   onChange={this.handleChange} onClick={this.clearText} />
				<a onClick={this.handleLogin} id="login-btn">Login</a>
			</div>
  	)
  }
}