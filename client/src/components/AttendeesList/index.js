

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
          className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
          key={item.attendeeID}
        >
          <div className="card ">
            <div
              className={
                'card-body px-3 py-2 d-flex align-items-center ' +
                (admin ? '' : 'justify-content-center')
              }
            >
              {admin && (
                <div className="btn-group pr-2">
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

              <div>{item.attendeeName}</div>
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