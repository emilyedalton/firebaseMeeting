import React, { Component } from 'react';

import firebase from '../src/components/Firebase'

import Welcome from './components/Welcome'
import Home from './components/Home'
import Navigation from './components/Navigation';
import Login from './components/Login/'
import Meetings from './components/Meetings/'
import Register from './components/Register/'
import CheckIn from './components/CheckIn';
import Attendees from './components/Attendees'
import AttendeesList from './components/AttendeesList';
import { Router, navigate } from '@reach/router';


class App extends Component {
constructor(){
  super();
  this.state = {
    user: null,
    displayName: null,
    userID: null
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
const meetingsRef = firebase
.database()
.ref('meetings/'+ FBUser.uid);

meetingsRef.on ('value', snapshot =>{

  let meetings = snapshot.val();
  let meetingsList = [];

  for(let item in meetings) {
meetingsList.push({
  meetingID: item,
  meetingName: meetings[item].meetingName
});

}

this.setState({
  meetings: meetingsList,
  howManyMeetings: meetingsList.length
});

});

      
    } else {
this.setState({user:null});

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
//this method builds references in firebase
//we will push the user id
addMeeting = meetingName =>{
const ref = firebase
.database()
.ref(`meetings/${this.state.user.uid}`);
ref.push({meetingName: meetingName})

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
                <Meetings path="/meetings" 
                userName={this.state.user}
                addMeeting ={this.addMeeting}
                meetings = {this.state.meetings} 
                userID={this.state.userID}/>
                <CheckIn
                path ="/checkin/:userID/:meetingID"/>
                <Register path="/register" registerUser={this.registerUser} />
                <Attendees path="/attendees/:userID/:meetingID"
                 adminUser={this.state.userID}/>
              
 </Router>
                



</div>


      
    );
  }
}

export default App;
