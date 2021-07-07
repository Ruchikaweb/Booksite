import React from 'react';
import Subscriberlist  from '../Connectionwithuser/Subscriberlist'
const url="https://no1book-app.herokuapp.com/all_subscriber";

class Subscriberlistapi extends React.Component{
    constructor(){
        super()

        this.state={
            request:''
        }
    } 
    render(){
        return(
            <React.Fragment> 
                <Subscriberlist slist={this.state.request}/>
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

export default Subscriberlistapi ;