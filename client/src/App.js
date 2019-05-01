import React, { Component } from 'react';

import firebase from '../src/components/Firebase'

import Welcome from './components/Welcome'
import Home from './components/Home'
import Navigation from './components/Navigation';
import Login from './components/Login/'
import Meetings from './components/Meetings/'
import Register from './components/Register/'

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Redirect} from "react-router-dom";
class App extends Component {
constructor(){
  super();
  this.state = {
    user: null,
    displayName: null,
    uid: null
  };
}
componentDidMount() {
  firebase.auth().onAuthStateChanged(FBUser => {
    if (FBUser) {
      this.setState({
        user: FBUser,
        displayName: FBUser.displayName,
        userID: FBUser.uid
      });
    }
  });
}

registerUser = userName => {
  firebase.auth().onAuthStateChanged(FBUser => {
    FBUser.updateProfile({
      displayName: userName
    }).then(() => {
      this.setState({
        user: FBUser,
        displayName: FBUser.displayName,
        userID: FBUser.uid
      });
      // navigate('/meetings');
    });
  });
};

logOutUser = e => {
  e.preventDefalut()
  this.setState({
    displayName:null,
    userId:null, 
    user: null
  });
  firebase.auth().signOut().then (() => {
return <Redirect to ='/login'/>
  });
}



  
// we have created a state. capturing the name of the variable in a property. 
  render() {
    return (
      <div className="App">
        <Router>
          <div>
        <Navigation 
        user ={this.state.user}
         logOutUser = {this.state.logOutUser}
        />
        <h1>Meeting Log</h1>
        {this.state.user &&<Welcome userName ={this.state.displayName} />}



 
                {/* Routes to different components */}
                <Route  exact path="/" render={() => <Home user={this.state.user} />} />
                <Route path="/login" render={() => <Login userName={this.state.user} />} />
                <Route path="/meetings" render={() => <Meetings userName={this.state.user} />} />
                <Route path="/register" render={() => <Register registerUser={this.registerUser} />} />
               />
                




</div>


  </Router>
      </div>
    );
  }
}

export default App;
