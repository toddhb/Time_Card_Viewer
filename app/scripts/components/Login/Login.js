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

// Default ID: N0686
class LoginInner extends React.Component {
	// Login will pass the username entered to the Kronos Store for API calls
	// TODO: Include validation list of existing IDs for demo-validation
	constructor(props) {
    super(props);
    this.state = {value: "N0686"};
  }
	handleChange = () => {
		//console.log("handleChange called...state: " + this.state.value)
    this.setState({value: event.target.value});
  }
	handleLogin = () => {
		//console.log("handleLogin called...state: " + this.state.value)
		const id = this.state.value
    flux.getActions('kronos').login(id)
  }
  render() {
  	var value = this.state.value
  	return (
  		<div>
  			<input type="text" value={value} onChange={this.handleChange} />
        <a onClick={this.handleLogin} >
          Login
        </a>
  		</div>
  	)
  }
}