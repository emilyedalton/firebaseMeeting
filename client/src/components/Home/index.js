import React, { Component } from 'react'

class Home extends Component {

render(){
    const {user} = this.props;
    return(
<div>

    <h2>hello Hi</h2>
    <button type="button" className="btn btn-success">Success</button>
    <button type="button" className="btn btn-danger">Danger</button>
</div>

    )
}

}

export default Home;