import React from 'react'
import  Adminnavbar from '../adminnav'
import {Link} from 'react-router-dom'
import '../admin.css'
const Blockuser =(props) =>{
    const Blockuserlist =({Blokuser})=>{
        if(Blokuser){
            return Blokuser.map((item) => {
                return(
                  <React.Fragment>
                      <div className="col-md-4">
                        <div class="panel panel-default"  height="300px" width="300px">
                            <div class="panel-heading"> <center> User_Info </center>  </div>
                            <div class="panel-body">
                            <center>
                                <p>Name :<span>{item.name}</span></p>
                                <p>Contact:<span> {item.mobileno} </span></p>
                                <p>Email:<span>{item.email}</span></p>
                                <p>Activity:<span> False </span> </p>
                                <Link to={`/unblocked/${item._id}`}>
                                    <button className="btn btn-danger" > Unblocked </button>
                                </Link>
                               
                            </center>
                            </div> 
                        </div> 
                        </div>
                        
                  </React.Fragment>
                )
            })
        } 
        else{
            return(
                <div>
                    <img  src="/images/loader.gif"/>
                </div>
            )
        }
    }
    
        return(
            <>
                <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <Adminnavbar/>
                <h1> <center> <b> <u>  Blocked User List </u> </b> </center>  </h1>
                <div className="container">
                    <div class="row"  style={{fontSize:'20px'}}>
                        {Blockuserlist(props)}
                    </div>
                </div>
            </>
        )
    }


export default Blockuser ;