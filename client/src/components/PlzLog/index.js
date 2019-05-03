import React, {Component} from 'react';
import { Link } from '@reach/router';


class PlzLog extends Component{
    render (){

    return(
     
        <div className="col-12 alert alert-danger px-3">
        Please <Link to ="/login" className="nav-item nav-link" >
          log in</Link> or <Link to ="/register" className="nav-item nav-link" >
          register</Link>
        </div>
    )
    }
}
export default PlzLog;