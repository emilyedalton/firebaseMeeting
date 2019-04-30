import React, {Component} from 'react';

class Welcome extends Component{
    render (){
    const {userName} = this.props;
    return(
     
        
        <div className="text-secondary font-weight-bold pl-1">
       Welcome {userName}
        </div>
    )
    }
}
export default Welcome;