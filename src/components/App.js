import React, { Component } from 'react';
import '../style/App.css';

class App extends Component {
  render() {
    return (
        <section className="jumbotron container-fluid">
          <h1 className="display-3">Welcome to React Router!</h1>
          <h2 className="lead">This is a sample React Router application that creates a mock portfolio</h2>
          <hr className="my-4" />
          <p className="lead">Using what you know with React and React Router, create a stylized portfolio with functionality.</p>
        </section>
    );
  }
}

export default App;
