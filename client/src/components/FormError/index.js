import React, {Component} from 'react';
class FormError extends Component{
    render (){
        const {theMesssage}=this.props;
    return(
     

        <div className="text-secondary font-weight-bold pl-1">
        {theMesssage}
        </div>
    )
    }
}
export default FormError;