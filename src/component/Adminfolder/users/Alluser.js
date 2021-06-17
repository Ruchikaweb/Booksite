import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
class Alluser extends React.Component{
    constructor(){
        super(

        )
    }
    render(){
        return( 
            <>
            <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
            <Adminnavbar/>
            <h1> <center> <b> All Users </b> </center> </h1>
            <div className="row"> 
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 allusercard">
                <p>Name :<span>Ruchika</span></p>
                <p>Contact:<span> 1234567890 </span></p>
                <p>Email:<span>ruchika@gmail.com</span></p>
                <p>Activity:<span>True</span></p>
            </div> 
            <div  className="col-lg-6 col-md-6 col-xs-12 col-sm-12 allusercardd">
                <p>Name :<span>Ruchika</span></p>
                <p>Contact:<span> 1234567890 </span></p>
                <p>Email:<span>ruchika@gmail.com</span></p>
                <p>Activity:<span>False</span></p>
            </div> 
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 allusercard">
                    <p>Name :<span>Ruchika</span></p>
                    <p>Contact:<span> 1234567890 </span></p>
                    <p>Email:<span>ruchika@gmail.com</span></p>
                    <p>Activity:<span>True</span></p>
                </div>
            </div>
          
            </>
        )
    }
}

export default Alluser ;