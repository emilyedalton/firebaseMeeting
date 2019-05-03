import React, { Component } from 'react';

import firebase from '../src/components/Firebase'

import Welcome from './components/Welcome'
import Home from './components/Home'
import Navigation from './components/Navigation';
import Login from './components/Login/'
import Meetings from './components/Meetings/'
import Register from './components/Register/'
import { Router, navigate } from '@reach/router';

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
      navigate('/meetings');
    });
  });
};

logOutUser = e => {
  e.preventDefault()
  this.setState({
      displayName: null,
      userID: null,
      user: null
  });
firebase.auth().signOut().then (() => {
  navigate ('/login')
  });
}



  
// we have created a state. capturing the name of the variable in a property. 
  render() {
    return (
      <div className="App">
        <Navigation 
        user ={this.state.user}
        logOutUser = {this.logOutUser}
        />
        {this.state.user && (
          <Welcome
            userName={this.state.displayName}
            logOutUser={this.logOutUser}
          />
        )}


 
                {/* Routes to different components */}
<Router>
              < Home path="/"  />
                <Login path="/login" userName={this.state.user}  />
                <Meetings path="/meetings" userName={this.state.user} />
                <Register path="/register" registerUser={this.registerUser} />
              
 </Router>
                



</div>


      
    );
  }
}

export default App;
