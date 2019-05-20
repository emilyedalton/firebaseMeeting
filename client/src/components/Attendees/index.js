import React, { Component } from 'react';
import firebase from '../Firebase';
import AttendeesList from '../AttendeesList';
// import Profile from '../Profile';


class Attendees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAttendees: []
    };
  }

  componentDidMount() {
    const ref = firebase
      .database()
      .ref(
        `meetings/${this.props.userID}/${
          this.props.meetingID
        }/attendees`
      );

    ref.on('value', snapshot => {
      let attendees = snapshot.val();
      let attendeesList = [];
      for (let item in attendees) {
        attendeesList.push({
          attendeeID: item,
          attendeeName: attendees[item].attendeeName,
          attendeeEmail: attendees[item].attendeeEmail,
          attendeeq1: attendees[item].attendeeq1,
          attendeeq2: attendees[item].attendeeq1


        });
      }
      this.setState({
        displayAttendees: attendeesList
      });
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="font-weight-light text-center">
              Attendees
            </h1>
          </div>
        </div>
        <AttendeesList
          userID={this.props.userID}
          meetingID={this.props.meetingID}
          adminUser={this.props.adminUser}
          attendees={this.state.displayAttendees}
        />
     {/* <Profile
      userID={this.props.userID}
      meetingID={this.props.meetingID}
      adminUser={this.props.adminUser}
      attendees={this.state.displayAttendees}/> */}

      </div>
    );
  }
}

export default Attendees;