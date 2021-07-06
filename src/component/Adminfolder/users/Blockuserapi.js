import React from 'react';
import Blockuser from '../users/Blockuser'
const url="https://no1book-app.herokuapp.com/all_subscriber";

class Blockuserapi extends React.Component{
    constructor(){
        super()

        this.state={
            request:''
        }
    } 
    render(){
        return(
            <React.Fragment> 
                <Blockuser Blokuser={this.state.request}/>
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

export default Blockuserapi ;