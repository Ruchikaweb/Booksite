import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
class Bookorder extends React.Component{
    constructor(){
        super(

        )
    } 
    render(){
        return(
            <>
                <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <Adminnavbar/>
                <h1> <center> <b> <u> Book orders </u> </b> </center>  </h1>
            </>
        )
    }
}

export default Bookorder ;