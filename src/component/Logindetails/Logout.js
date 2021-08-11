import React from 'react' ;
import Home from '../Home/home';
class Logout  extends React.Component{
    constructor(props){
        super(props)
    } 
    render(){
        
        alert("are you sure to want logout")
        
        return(
            <React.Fragment>
                <Home/>
                {this.props.history.push('/')}
            </React.Fragment>
        )
    }
}

export default Logout ;