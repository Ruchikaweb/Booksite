import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
class Bookrequest extends React.Component{
    constructor(){
        super(

        )
    } 
    render(){
        return(
            <>
                <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <Adminnavbar/>
                <h1> <center> <b> <u> Book Request </u> </b> </center>  </h1>
            </>
        )
    }
}

export default Bookrequest ; 