import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
class Activeuser extends React.Component{
    constructor(){
        super(

        )
    } 
    render(){
        return(
            <>
                <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <Adminnavbar/>
                <h1> <center> <b> <u>  Active User List </u> </b> </center>  </h1>
                <div className="row">
                    <div style={{marginLeft:'25%'}} id="activeusercontent" className="col-lg-6 col-md-6 col-sm-12">
                        <p>Name :<span>Ruchika</span></p>
                        <p>Contact:<span> 1234567890 </span></p>
                        <p>Email:<span>ruchika@gmail.com</span></p>
                        <p>Activity:<span>True</span></p>
                        <button className="btn btn-danger"> Blocked </button>
                    </div> 
                    <div style={{marginLeft:'5%'}} id="activeusercontent" className="col-lg-6 col-md-6 col-sm-12">
                        <p>Name :<span>Ruchika</span></p>
                        <p>Contact:<span> 1234567890 </span></p>
                        <p>Email:<span>ruchika@gmail.com</span></p>
                        <p>Activity:<span>True</span></p>
                        <button className="btn btn-danger" > Blocked </button>
                    </div> 
                </div>
                <div className="row">
                    <div style={{marginLeft:'25%'}} id="activeusercontent" className="col-lg-6 col-md-6 col-sm-12">
                        <p>Name :<span>Ruchika</span></p>
                        <p>Contact:<span> 1234567890 </span></p>
                        <p>Email:<span>ruchika@gmail.com</span></p>
                        <p>Activity:<span>True</span></p>
                        <button className="btn btn-danger" > Blocked </button>
                    </div> 
                    <div style={{marginLeft:'5%'}} id="activeusercontent" className="col-lg-6 col-md-6 col-sm-12">
                        <p>Name :<span>Ruchika</span></p>
                        <p>Contact:<span> 1234567890 </span></p>
                        <p>Email:<span>ruchika@gmail.com</span></p>
                        <p>Activity:<span>True</span></p>
                        <button className="btn btn-danger" > Blocked </button>
                    </div> 
                </div>
            </>
        )
    }
}

export default Activeuser ;