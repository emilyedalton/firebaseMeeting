import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Home from './components/Home'
import Navigation from './components/Navigation';

class App extends Component {
constructor(){
  super();
  this.state = {
    user: 'larry',
  }
}

// we have created a state. capturing the name of the variable in a property. 
  render() {
    return (
      <div className="App">
        <Navigation user ={this.state.user} />
        <h1>Meeting Log</h1>
        {this.state.user &&<Welcome user ={this.state.user} />}
        <Home user ={this.state.user} />

      </div>
    );
  }
}

export default App;
