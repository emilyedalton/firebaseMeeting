import React, { Component } from 'react';

import Home from './components/Home'

class App extends Component {
constructor(){
  super();
  this.state = {
    user: 'bobby'
  }
}


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
