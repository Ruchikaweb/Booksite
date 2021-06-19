import React from 'react';
import Donatebookrequest from '../Adminfolder/Connectionwithuser/Donatebookrequest'
const url="https://no1book-app.herokuapp.com/donate_book_request";

class Donatereqapi extends React.Component{
    constructor(){
        super()

        this.state={
            donaterequest:''
        }
    } 
    render(){
        return(
            <React.Fragment> 
                <Donatebookrequest donarreq={this.state.donaterequest}/>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({donaterequest:data})
        })
    }
}

export default Donatereqapi ;