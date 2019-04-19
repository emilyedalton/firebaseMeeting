import React, {Component} from 'react';

class Welcome extends Component{
    render (){
    const {user} = this.props;
    return(
     
        
        <div className="text-secondary font-weight-bold pl-1">
       Welcome {user}
        </div>
    )
    }
}
export default Welcome;