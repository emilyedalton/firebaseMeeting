

import React, { Component } from 'react';
// import { GoTrashcan } from 'react-icons/go';

class AttendeesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const admin =
    this.props.adminUser === this.props.userID ? true : false;
    const attendees = this.props.attendees;
    const myAttendees = attendees.map(item => {
      return (
        <div
          className="col-6"
          key={item.attendeeID}
        >
          <div className="card w-100">
            <div
              className={
                'card w-100 ' +
                (admin ? '' : 'justify-content-center')
              }
            >
              {admin && (
                <div className="">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    tite="Delete Attendee"
                    onClick={e =>
                      this.deleteAttendee(
                        e,
                        this.props.meetingID,
                        item.attendeeID
                      )
                    }
                  >
                  </button>
                </div>
              )}
 <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      name="meetingName"
                      placeholder="Attendee name"
                      aria-describedby="buttonAdd"
                      value ={item.attendeeName}
                      onChange={this.handleChange}
                    />
                     <input
                      type="text"
                      className="form-control"
                      name="meetingName"
                      placeholder="Question 1"
                      aria-describedby="buttonAdd"
                      value ={item.attendeeq1}
                      onChange={this.handleChange}
                    />
                    </div>
              <div>{item.attendeeName} 
                 {item.attendeeq1}  </div>


            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="row justify-content-center">{myAttendees}</div>
    );
  }
}

export default AttendeesList;
// import React, {Component} from 'react';
// import firebase from '../Firebase'
// import {GoTrashCan} from 'react-icons/go';
// import { Router, navigate } from '@reach/router';




// class AttendeesList extends Component{
//     constructor (props){
//         super (props);
//         this.state = {
//             name: " "
         

//     }
    // this.deleteMeeting = this.deleteMeeting.bind(this);
    // this.updateMeeting = this.updateMeeting.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // }
    // handleChange(e){
    //     // const meetingName= e.target.defaultValue;
    //     this.setState({ name: e.target.value })
    //     }

    // deleteMeeting = (e, whichMeeting) => {
    //     e.preventDefault();
    //     const ref = firebase
    //       .database()
    //       .ref(`meetings/${this.props.userID}/${whichMeeting}`);
    //     ref.remove();
    //   };
    //   updateMeeting = (e, whichMeeting) => {
    //     e.preventDefault();
    //            const ref = firebase
    //       .database()
    //       .ref(`meetings/${this.props.userID}/${whichMeeting}`);
    //     ref.update({
    //         meetingName: this.state.name,       
    //      });
    //   };
    // render (){
    // const attendees = this.props.attendees;
    // const myAttendees = attendees.map (item => {
    //    return(
    //         <div className ="list-group-item d-flex" key={item.attendeeID}>
    //         <div>{item.attendeeID}</div>
            {/* <section className = "btn-group align-self-center" role ="group" aria-label="Meeting Options">
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Delete Meeting"
              onClick={e => this.deleteMeeting(e, item.attendeeID)}
            >
             Delete
             </button>

            <button
              className="btn btn-sm btn-outline-secondary"
              title="Check In"
              onClick={() => 
               navigate ( `/checkin/${this.props.userID}/${item.attendeeID}`


               )}
            >
             Check In
             </button>

             <button
              className="btn btn-sm btn-outline-secondary"
              title="Update Meeting"
              onClick={e => this.updateMeeting(e,item.attendeeID)}
            >
             update
             </button>
</section>
            <input className ="pl-3 text-left align-self-center"
            type ="text"
            defaultValue= {item.attendeeName}
            onChange={this.handleChange}

            
            >
            </input>
             */}
//             </div>
//         );

//     });
//     return(
//     <div>{myAttendees}</div>
//     )
// }
// }
    
// export default AttendeesList;