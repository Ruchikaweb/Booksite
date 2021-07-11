import React from 'react'
import {Link} from 'react-router-dom'
import '../Logindetails/logindetails.css';
const Url="https://no1book-app.herokuapp.com/login"; 

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mobileno:'',
            password:''
        }
    }

    handelsubmit = () => {
        fetch(Url,
            { 
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({mobileno:this.state.mobileno,password:this.state.password})
            })
            .then((response)=>{return response.json()})
            .then((data)=>{
                if((data).length==0){
                    alert("wrong mobile and password")
                    }
                    else{
                        alert("login successful")
                    }
            }
    )
}

    handelchange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
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
                        <input type="number" class="form-control" placeholder="Enter mobile number"  required autoComplete="off" id="email" name="mobileno" value={this.state.mobileno} onChange={this.handelchange}/>
                    </div> 
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" class="form-control"  placeholder="Enter your password" required autoComplete="off" name="password" value={this.state.password} onChange={this.handelchange}/>
                    </div>
                    <label class="checkbox-inline">
                        <input type="checkbox" value=""/>Remember me
                    </label>
                    <Link to="forgetpwd"> <span id="forgetpwd"> forget password? </span> </Link>
                    <div > <button type="submit" id="loginbtn" onClick={this.handelsubmit} class="btn btn-danger">Login</button> </div>
                </form>
                
            </div>
            </>
        )
    }
}
export default Login