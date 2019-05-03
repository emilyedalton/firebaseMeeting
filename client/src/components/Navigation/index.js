import React, { Component } from 'react';
import { Link } from '@reach/router';


class Navigation extends Component{
render() {
    const {user, logOutUser} = this.props;

return(
    <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">
      Meeting Log
    </Link>
    <div className="navbar-nav ml-auto">

    {user &&  (<Link to="/meetings"className="nav-item nav-link" >
          meetings
    </Link>) }
       {!user && ( <Link to ="/login" className="nav-item nav-link" >
          log in
        </Link>)}
       
        {!user && ( <Link to ="/register"className="nav-item nav-link" >
          register
        </Link>)}
        {user && ( <Link
                className="nav-item nav-link"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                log out
              </Link>)}
        
    </div>
  </div>
</nav>







)
} }

export default Navigation