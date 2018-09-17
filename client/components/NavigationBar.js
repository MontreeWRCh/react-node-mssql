import React from 'react'
import { Link } from 'react-router';

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">Red Dice</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Sign up</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};