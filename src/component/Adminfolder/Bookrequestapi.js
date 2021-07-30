import React from 'react';
import Bookrequest from '../Adminfolder/Connectionwithuser/Bookrequest'
const url="https://no1book-app.herokuapp.com/request";

class Bookrequestapi extends React.Component{
    constructor(){
        super()

        this.state={
            request:''
        }
    }             
    render(){
        return(
            <React.Fragment> 
                <Bookrequest userreq={this.state.request}/>
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

export default Bookrequestapi ;