import React, { Component } from 'react';
import firebase from '../src/components/Firebase'

import Welcome from './components/Welcome'
import Home from './components/Home'
import Navigation from './components/Navigation';
import Login from './components/Login/'
import Meetings from './components/Meetings/'
import Register from './components/Register/'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
constructor(){
  super();
  this.state = {
    user: null,
  };
}
  componentDidMount(){
    const ref = firebase.database().ref('user')
    
    ref.on('value', snapshot => {

      let FBUser= snapshot.val()
      this.setState({user: FBUser});
    })
  
}

// we have created a state. capturing the name of the variable in a property. 
  render() {
    return (
      <div className="App">
        <Router>
          <div>
        <Navigation user ={this.state.user} />
        <h1>Meeting Log</h1>
        {this.state.user &&<Welcome user ={this.state.user} />}



 
                {/* Routes to different components */}
                <Route  exact path="/" render={() => <Home user={this.state.user} />} />
                <Route path="/login" render={() => <Login user={this.state.user} />} />
                <Route path="/meetings" render={() => <Meetings user={this.state.user} />} />
                <Route path="/register" render={() => <Register user={this.state.user} />} />
               />
                




</div>


  </Router>
      </div>
    );
  }
}

export default App;
