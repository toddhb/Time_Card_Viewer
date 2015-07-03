/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react'
import moment from "moment"
import _ from 'underscore'
import Router, { RouteHandler, Link} from "react-router"

export default class Footer {
  render() {
    return (
        <div className="footer-distributed text-center">
	      <div className="footer-small-type">
	        <p className="footer-support">			
             For issues concerning this website:
		    </p>
		  </div>
        
        <div className="footer-large-type">
          <i className="fa fa-phone"></i>
          <p>1 (503) 555-1212</p>
        </div>

        <div className="footer-large-type">
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@con-way.com">support@con-way.com</a></p> 
        </div>

		  <div className="footer-small-type">
	        <p className="footer-team-about">			
             Website design by:<br/>Portland State University<br/>Maseeh College of Engineering<br/>Computer Science Capstone Program<br/>©{moment().year()}
		    </p>
	      </div>  
        </div>
    );
  }
};
