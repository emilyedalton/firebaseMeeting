import React, { Component } from 'react';
import firebase from '../Firebase';
import AttendeesList from '../AttendeesList';
// import Profile from '../Profile';


class Attendees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      displayAttendees: []
    };
    this.handleChange=this.handleChange.bind(this);
    this.resetQuery=this.resetQuery.bind(this);

  }
 
  resetQuery(){
    this.setState({
      searchQuery:''
    })

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

  handleChange(e){
    const itemName = e.target.name;
    const itemValue= e.target.value;
    
    this.setState({ [itemName]: itemValue }
    )}
 
  render() {
    const dataFilter = item => item.attendeeName.toLowerCase().match(this.state.searchQuery.toLowerCase())&& true;
    const filteredAttendees= this.state.displayAttendees.filter(dataFilter);
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="font-weight-light text-center">
              Attendees
            </h1>
            <div className="card bg-light mb-4">
            <div className="card-body text-center"/>
            <div className="input-group input-group-lg">
           
            <input 
            type="text" 
            name="searchQuery" 
            value={this.state.searchQuery} 
            placeholder="Search Attendees" 
            className="form-control" 
            onChange={this.handleChange}/>
         <div className="input-group-append">
         <buton className="btn btn-sm btn-outline-info" title="reset search" onClick={()=>this.resetQuery()}></buton>
         </div>
          </div>
          </div>
            </div>
        </div>

        <AttendeesList
          userID={this.props.userID}
          meetingID={this.props.meetingID}
          adminUser={this.props.adminUser}
          // attendees={this.state.displayAttendees}
          attendees={filteredAttendees}
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
