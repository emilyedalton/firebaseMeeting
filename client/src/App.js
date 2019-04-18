import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Meeting Log</h1>
        <Home />
      </div>
    );
  }
}

export default App;
