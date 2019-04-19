import React, { Component } from 'react';

import Home from './components/Home'

class App extends Component {
constructor(){
  super();
  this.state = {
    user: 'emily'
  }
}

// we have created a state. capturing the name of the variable in a property. 
  render() {
    return (
      <div className="App">
        <h1>Meeting Log</h1>
        <Home user ={this.state.user} />
      </div>
    );
  }
}

export default App;
