import React from 'react';
import Request from '../Request/Request'
const url="https://no1book-app.herokuapp.com/post_request";

class Requestapi extends React.Component{
    constructor(){
        super()

        this.state={
            request:''
        }
    }  
    render(){
        return(
            <React.Fragment> 
                <Request  userreq={this.state.request}/>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({request:data})
        })
    }
}

export default Requestapi ;