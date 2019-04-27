import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Home from './components/Home'
import Navigation from './components/Navigation';
import Login from './components/Login/'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
constructor(){
  super();
  this.state = {
    user: 'larry',
  }
}

// we have created a state. capturing the name of the variable in a property. 
  render() {
    return (
      <div className="App">
        <Navigation user ={this.state.user} />
        <h1>Meeting Log</h1>
        {this.state.user &&<Welcome user ={this.state.user} />}

<Router>
<Switch>


 
                {/* Routes to different components */}
                <Route  exact path="/" render={() => <Home user={this.state.user} />} />
                <Route path="/login" render={() => <Login user={this.state.user} />} />
                {/* <Route path="/signup" render={() => <Signup />} /> */}
                {/* <Route path="/search" render={() => <Search />} /> */}
               />
                

</Switch>






  </Router>
      </div>
    );
  }
}

export default App;
