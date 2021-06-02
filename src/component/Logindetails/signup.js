import React from 'react'
import '../Logindetails/logindetails.css';
import {Link} from 'react-router-dom'
class Signup extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
             <div className="requestpageheader"> 
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img className="requestimg" src="./images/Secondhandbook.png" alt="wrong path"/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                    <p className="requestcontent"> Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers. </p>
                    </div>
                </div>
            </div>
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
                        <label>Name</label>
                        <input type="text" class="form-control"  placeholder="Enter your name" required autoComplete="off" name="email"/>
                    </div>
                    <div class="form-group">
                        <label>Mobile</label>
                        <input type="number" class="form-control"  placeholder="Enter your number" required autoComplete="off" name="pwd"/>
                    </div>
                    <div class="form-group">
                        <label >Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter Email"  required autoComplete="off" id="email"/>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control"  placeholder="Enter your address" required autoComplete="off" name="email"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="number" class="form-control"  placeholder="Enter your password" required autoComplete="off" name="pwd"/>
                    </div>
                    <div class="form-group">
                        <label>conform password</label>
                        <input type="number" class="form-control"  placeholder="Enter conform password" required autoComplete="off" name="pwd"/>
                    </div>
                    <div className="form-group">
                        <label>Pick Your Security Question:</label>
                        <select className="form-control" name="user_question">
                            <option selected disabled>Select Your Security Question!!!</option>
                            <option>Who is your super star</option>
                            <option>What is your childhood name</option>
                            <option>What is your primary school name</option>
                            <option>What is your best friend name</option>
                            <option>What is your lucky number</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Answer the question</label>
                        <input type="text" class="form-control"  placeholder="Answer" required autoComplete="off" name="email"/>
                    </div>
                    <button type="submit" id="requestbtn" class="btn btn-danger">Submit</button>
                </form>
                
            </div>
            </>
        )
    }
}
export default Signup