import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Redirect} from "react-router-dom";

class Home extends Component {

render(){
    const {user} = this.props;
    return(
<div>
<h1>Home Component</h1>
    <h2>hello {user}</h2>

    {user == null && ( 
        <div>
    <button type="button" className="btn btn-success">Success</button>
    <button type="button" className="btn btn-danger">Danger</button>
    </div>)}
    {user && ( <div><button type="button" className="btn btn-warning">Warning</button></div>
    )}
</div>

    )
}

}

export default Home;