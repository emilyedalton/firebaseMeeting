import React, {Component} from 'react';
import { Link } from '@reach/router';


class Welcome extends Component{
    render (){
    const {userName, logOutUser} = this.props;
    return(
    <div>
        {userName == null && ( 
 <Link to ="/login" className="nav-item nav-link">
                  log in </Link>
        )}
        {userName && ( <div>Welcome{userName}</div>
        )}
    </div>
    )
    }
}
    
export default Welcome;