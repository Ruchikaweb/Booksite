import React from 'react';
import Alluser from '../users/Alluser'
const url="https://no1book-app.herokuapp.com/all_subscriber";

class Alluserapi extends React.Component{
    constructor(){
        super()

        this.state={
            request:''
        }
    } 
    render(){
        return(
            <React.Fragment> 
                <Alluser Aluse={this.state.request}/>
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

export default Alluserapi ;