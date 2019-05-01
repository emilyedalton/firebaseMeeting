import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute } from "react-router-dom";


class Welcome extends Component{
    render (){
    const {userName, logOutUser} = this.props;
    return(
     
        
        <div className="text-secondary font-weight-bold pl-1">
       Welcome {userName}
        </div>
    )
    }
}
export default Welcome;