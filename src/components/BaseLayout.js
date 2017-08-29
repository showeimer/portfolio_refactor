import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <nav className="nav nav-bar-dark bg-dark justify-content-end">
          <Link className="nav-link" to="/">SplashPage</Link>
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="portfolio">Portfolio</Link>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;
