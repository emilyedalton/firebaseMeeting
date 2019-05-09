import React, {Component} from 'react';
import firebase from '../Firebase'
// import {GoTrashCan} from 'react-icons/go';
import { Router, navigate } from '@reach/router';




class MeetingList extends Component{
    constructor (props){
        super (props);
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

    deleteMeeting = (e, whichMeeting) => {
        e.preventDefault();
        const ref = firebase
          .database()
          .ref(`meetings/${this.props.userID}/${whichMeeting}`);
        ref.remove();
      };
      updateMeeting = (e, whichMeeting) => {
        e.preventDefault();
               const ref = firebase
          .database()
          .ref(`meetings/${this.props.userID}/${whichMeeting}`);
        ref.update({
            meetingName: this.state.name,       
         });
      };
    render (){
    const {meetings} = this.props;
    const myMeetings = meetings.map (item => {
       return(
            <div className ="list-group-item d-flex" key={item.meetingID}>
            <section className = "btn-group align-self-center" role ="group" aria-label="Meeting Options">
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Delete Meeting"
              onClick={e => this.deleteMeeting(e, item.meetingID)}
            >
             Delete
             </button>

            <button
              className="btn btn-sm btn-outline-secondary"
              title="Check In"
              onClick={() => 
               navigate ( `/checkin/${this.props.userID}/${item.meetingID}`


               )}
            >
             Check In
             </button>

             <button
              className="btn btn-sm btn-outline-secondary"
              title="Update Meeting"
              onClick={e => this.updateMeeting(e,item.meetingID)}
            >
             update
             </button>
</section>
            <input className ="pl-3 text-left align-self-center"
            type ="text"
            defaultValue= {item.meetingName}
            onChange={this.handleChange}

            
            >
            </input>
            
            </div>
        );

    });
    return(
    <div>{myMeetings}</div>
    )
}
}
    
export default MeetingList;