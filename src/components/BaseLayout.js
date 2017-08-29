import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <nav className="nav nav-bar-dark bg-dark justify-content-end">
          <NavLink activeClassName="selected" className="nav-link" exact to="/">SplashPage</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/home">Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/myportfolio">Portfolio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/references">References</NavLink>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;
