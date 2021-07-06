import React from 'react';
import Activeuser from '../users/Activeuser'
const url="https://no1book-app.herokuapp.com/all_subscriber";

class Activeuserapi extends React.Component{
    constructor(){
        super()

        this.state={
            request:''
        }
    } 
    render(){
        return(
            <React.Fragment> 
                <Activeuser Actuse={this.state.request}/>
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

export default Activeuserapi ;