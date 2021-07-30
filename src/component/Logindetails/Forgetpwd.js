import React from 'react' ;
import {Link} from 'react-router-dom'
const forget_api = "https://no1book-app.herokuapp.com/forgetpwd"
class Forgetpwd extends React.Component{
    constructor(){
        super()
        this.state={     
            email:'',
            selectquestion:'',
            answer:'',
            newpassword:''
        } 
    } 
           
    login=()=>{ 
        fetch(forget_api,
        { 
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({mobileno:this.state.number,password:this.state.password})
        }) 
    
        .then((response)=>{ 
        return response.json()})
    
        .then((data)=>{
            if((data).length===0){
                alert("wrong mobileno and password")
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
            <center> <h2> forget password page </h2> </center> 
                    <div class="form-group">
                        <label >Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter Email"  required autoComplete="off" id="email" name="email" value={this.state.email} onChange={this.handelchange}/>
                    </div>
                    <div className="form-group">
                        <label>Pick Your Security Question:</label>
                        <select className="form-control" name="user_question"  name="selectquestion" value={this.state. selectquestion} onChange={this.handelchange}>
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
                    <div class="form-group">
                        <label>New Password</label>
                        <input type="number" class="form-control"  placeholder="Enter new password" required autoComplete="off"  name=" newpassword" value={this.state. newpassword} onChange={this.handelchange}/>
                    </div>

                    <button type="submit" id="requestbtn" onClick={this.handelsubmit} class="btn btn-success"> Submit </button>
                </form>
                
            </div>
            </>
        )
    }
} 
export default Forgetpwd ;

