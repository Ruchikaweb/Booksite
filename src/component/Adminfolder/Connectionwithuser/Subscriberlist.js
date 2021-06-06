import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
class Subscriberlist extends React.Component{
    constructor(){
        super(

        )
    } 
    render(){
        return(
            <>
                <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <Adminnavbar/>
                <h1> <center> <b> <u> All Subscriber </u> </b> </center>  </h1>
            </>
        )
    }
}

export default Subscriberlist  ; 