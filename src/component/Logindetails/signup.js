import React from 'react'
import '../Logindetails/logindetails.css';
import {Link} from 'react-router-dom'
const Url="https://no1book-app.herokuapp.com/post_subscriber"; 
class Signup extends React.Component{
    constructor(){
        super()
        this.state={     
            name:'', 
            mobileno:'',
            email:'',
            address:'',
            password:'',
            conformpassword:'',
            selectquestion:'',
            answer:'',
            isActive:true
        } 
    } 

    handelsubmit = () => {
        if(this.state.name==''||this.state.mobileno ==''||this.state.email ==''||this.state.address==''||this.state.password ==''||this.state.conformpassword ==''||this.state.selectquestion ==''||this.state.answer==''){
            alert("All filds are required")
        } else{ 
            if(this.state.mobileno.length==10){
                if((this.state.password===this.state.conformpassword)&&(this.state.password.length>=8 &&this.state.password.length<=16)){
                    fetch(Url,
                        { 
                            method:'POST',
                            headers:{
                                'Accept':'application/json',
                                'Content-Type':'application/json'
                            },
                            body:JSON.stringify(this.state)
                        })
                        .then(this.props.history.push('/'))
                }else{
                    alert("Reccheck password")
                }
                
            } else{
                alert("Enter right phone no")
            }
        
        }
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
            <form id="signupform"  style={{fontSize:'19px'}}> 
            <center> <h2> Sign Up Page </h2> </center> 
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control"  placeholder="Enter your name" required autoComplete="off"  name="name" value={this.state.name} onChange={this.handelchange}/>
                    </div> 
                    <div class="form-group">
                        <label>Mobile</label>
                        <input type="number" class="form-control"  placeholder="Enter your number" required autoComplete="off" name="mobileno" value={this.state.mobileno} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label >Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter Email"  required autoComplete="off" id="email" name="email" value={this.state.email} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control"  placeholder="Enter your address" required autoComplete="off" name="address" value={this.state.address} onChange={this.handelchange} />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="number" class="form-control"  placeholder="Enter your password" required autoComplete="off" name="password" value={this.state.password} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group"> 
                        <label>conform password</label>
                        <input type="number" class="form-control"  placeholder="Enter conform password" required autoComplete="off" name="conformpassword" value={this.state.conformpassword} onChange={this.handelchange}/>
                    </div>
                    <div className="form-group">
                        <label>Pick Your Security Question:</label>
                        <select className="form-control"  name="selectquestion" value={this.state. selectquestion} onChange={this.handelchange}>
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
                        <input type="text" class="form-control"  placeholder="Answer" required autoComplete="off"  name="answer" value={this.state.answer} onChange={this.handelchange}/>
                    </div>
                    <button type="submit" id="requestbtn" onClick={this.handelsubmit} class="btn btn-danger">Submit</button>
                </form>
                
            </div>
            </>
        )
    }
}
export default Signup