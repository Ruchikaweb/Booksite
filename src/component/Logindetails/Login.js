import React from 'react'
import {Link} from 'react-router-dom'
import '../Logindetails/logindetails.css';
class Login extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
              <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
             {/* <div className="requestpageheader"> 
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img className="requestimg" src="./images/Secondhandbook.png" alt="wrong path"/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                    <p className="requestcontent"> Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers. </p>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <ul className="nav nav-tabs">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link className="active" to={'/signup'}>Sign up</Link></li>
                </ul>
                <br/>
            </div> 

            <div className="container">
            <form id="signupform" style={{fontSize:'19px'}}> 
            <center> <h2> Sign Up Page </h2> </center> 
                    <div class="form-group">
                        <label >Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter Email"  required autoComplete="off" id="email"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" class="form-control"  placeholder="Enter your password" required autoComplete="off" name="pwd"/>
                    </div>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Remember me
                    </label>
                    <Link to="forgetpwd"> <span id="forgetpwd"> forget password? </span> </Link>
                    <div > <button type="submit" id="loginbtn" class="btn btn-danger">Login</button> </div>
                   
                   
                </form>
                
            </div>
            </>
        )
    }
}
export default Login