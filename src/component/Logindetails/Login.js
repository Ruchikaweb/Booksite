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
            <center> <h2> Login Page </h2> </center> 
                    <div class="form-group">
                        <label >Mobile Number:</label>
                        <input type="number" class="form-control" placeholder="Enter mobile number"  required autoComplete="off" id="email"/>
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