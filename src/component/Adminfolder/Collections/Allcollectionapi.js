import React from 'react';
import Allcollections from '../Collections/Allcollections'
const url="https://no1book-app.herokuapp.com/all_books";

class Allcollectionapi extends React.Component{
    constructor(){
        super()

        this.state={
            allcollection:''
        }
    } 
    render(){ 
        return(
            <React.Fragment> 
                <Allcollections Allcolec={this.state.allcollection}/>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({ allcollection:data})
        })
    }
}

export default Allcollectionapi ;