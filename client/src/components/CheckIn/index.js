import React, {Component} from 'react';
import { navigate } from '@reach/router';
import firebase from '../Firebase';

class CheckIn extends Component{
    constructor (props){
        super (props);
            this.state = {
              displayName:" ",
              email: " ",
              q1: " ",
              q2: " "


            };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

        }
handleChange(e){
const itemName = e.target.name;
const itemValue= e.target.value;

this.setState({ [itemName]: itemValue }
)}

handleSubmit(e) {
    e.preventDefault();

    const ref = firebase
    .database()
    .ref(
      `meetings/${this.props.userID}/${
        this.props.meetingID
      }/attendees`
    );
  ref.push({
    attendeeName: this.state.displayName,
    attendeeEmail: this.state.email,
    attendeeq1: this.state.q1,
    attendeeq2: this.state.q2,


    star: false
  });
  navigate(
    `/attendees/${this.props.userID}/${this.props.meetingID}`
  );
}

    render (){
    return( 
      <form className="mt-3" onSubmit={this.handleSubmit}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card bg-light">
          <div className="card-body">
            <h3 className="font-weight-light mb-3">Check in</h3>
            <section className="form-group">
              <label
                className="form-control-label sr-only"
                htmlFor="displayName"
              >
                
              </label>
              Name
              <input
                required
                className="form-control"
                type="text"
                id="displayName"
                name="displayName"
                placeholder="Name"
                value ={this.state.displayName}
                onChange ={this.handleChange}
              />
           
              
             
              Email

              <input
                required
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value ={this.state.email}
                onChange ={this.handleChange}
              /> Working Title
                  <input
                required
                className="form-control"
                type="text"
                id="email"
                name="q1"
                placeholder="Working Title"
                value ={this.state.q1}
                onChange ={this.handleChange}
              /> Desription
                   <input
                required
                className="form-control"
                type="text"
                id="email"
                name="q2"
                placeholder="Description"
                value ={this.state.q2}
                onChange ={this.handleChange}
              />
            </section>
            <div className="form-group text-right mb-0">
              <button className="btn btn-primary" type="submit">
                Check in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form> 


    )
    }
}
export default CheckIn;