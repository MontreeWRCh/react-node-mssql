import React, { Component } from 'react'

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        <h1>Join our community!</h1>

        <div className="form-group">
            <label className="control-label">Username</label>
            <input type="text" neme="username" className="form-control"/>
        </div>
        <div className="form-group">    
            <button className="btn btn-primary btn-lg">
                Sign up
            </button>
        </div>
      </div>
    )
  }
}
