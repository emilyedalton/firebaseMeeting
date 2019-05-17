import React, { Component } from 'react';
import firebase from '../Firebase';

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: " "
     

}
this.deleteMeeting = this.deleteMeeting.bind(this);
this.updateMeeting = this.updateMeeting.bind(this);
this.handleChange = this.handleChange.bind(this);
}
handleChange(e){
    // const meetingName= e.target.defaultValue;
    this.setState({ name: e.target.value })
    }
    
    render(){
        return(



        )
    }
}
    export default Profile

   


