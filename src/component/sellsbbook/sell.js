import React from 'react' ;
import {Link} from 'react-router-dom'
import Navbar from '../navbar/nav'
import '../sellsbbook/sell.css'
const Url="https://no1book-app.herokuapp.com/post_books"; 

class sells extends React.Component{
    constructor(){
        super() 
        this.state={     
            name:'', 
            mobileno:'',
            email:'',
            bookname:'',
            bookrs:'',
            author:'',
            purpose:'',
            bookcondition:'',
            booktype:'',
            location:'',
            otherdetails:'',
            image:''
        }
    } 
      
    handelsubmit = () => { 
        alert("We are purchasing your books 40% on MRP rs. other % is included mentainance of book and delivery...Thanku for member of book house..")
        if(this.state.name==''||this.state.mobileno ==''||this.state.email ==''||this.state.bookname==''||
        this.state.bookrs ==''||this.state.author ==''||this.state.purpose ==''||this.state.bookcondition ==''||this.state.booktype==''||this.state.location ==''||this.state.otherdetails ==''||this.state.image ==''){ 
            alert("All filds are required")
        } else{   
            if(this.state.mobileno.length==10){ 
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
            <Navbar/>
            <div className="booktypepageheader">  
                <center>
                    <h3 className="searchheading"> <u> Search second hand books online </u>  </h3>
                    <input type="text" className="searchbook" placeholder="Search Books "/>
                    <input type ="button" className="searchbutton" value="Search"/>
                    <Link to="/request">  <h3 className="placerequestheading"> Cann't Find Books?  <b>Click To Request. </b>  </h3> </Link>
                </center> 
            </div>
            <div style={{textAlign:'center'}}>
                <h1> Sells Second Books  </h1>
                <p style={{fontSize:'20px'}}> For any specific details call us at. </p>
                <p style={{fontSize:'20px'}}> 8209111389 , 9413595935 </p>
                <center> <hr style={{width:'25%'}}></hr></center> 
            </div> 
            <div className="container" id="reqformstyle">
                <form style={{fontSize:'19px'}}> 
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control"  placeholder="Enter your name" required autoComplete="off" name="name" value={this.state.name} onChange={this.handelchange}/>
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
                        <label>Book Name</label>
                        <input type="text" class="form-control"  placeholder="Enter Book name" required autoComplete="off" name="bookname" value={this.state.bookname} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Book Prize</label>
                        <input type="text" class="form-control"  placeholder="Enter Book original prize" required autoComplete="off" name="bookrs" value={this.state.bookrs} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Author</label>
                        <input type="text" class="form-control"  placeholder="Enter details" required autoComplete="off" name="author" value={this.state.author} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Purpose</label>
                        <select style={{fontSize:'20px'}} class="form-control" name="purpose" value={this.state.purpose} onChange={this.handelchange} >
                            <option selected> Select purpose </option>
                            <option> For sell </option>
                            <option> For Donate  </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>BookCondition</label>
                        <select style={{fontSize:'20px'}} class="form-control" name="bookcondition" value={this.state.bookcondition} onChange={this.handelchange}>
                            <option selected> Select book condition </option>
                            <option> New </option>
                            <option> Old  </option>
                        </select>
                    </div> 
                    <div class="form-group"> 
                        <label>Booktype</label>
                        <select style={{fontSize:'20px'}} class="form-control" name="booktype" value={this.state.booktype} onChange={this.handelchange}>
                            <option selected > Select book type </option>
                            <option> School book </option>
                            <option> College book  </option>
                            <option> Compitation book </option>
                            <option> Other </option>
                        </select>
                    </div>
                    <div class="form-group"> 
                        <label>Location/College</label>
                        <input type="text" class="form-control"  placeholder="Enter location" required autoComplete="off" name="location" value={this.state.location} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>other details</label>
                        <textarea class="form-control" name="otherdetails" value={this.state.otherdetails} onChange={this.handelchange} rows="5" id="comment"></textarea>
                    </div>
                    <div class="form-group">
                        <label>images upload</label>
                        <input type="file"  required autoComplete="off" name="image" value={this.state.image} onChange={this.handelchange}/>
                    </div>
                    <button type="submit" id="requestbtn" onClick={this.handelsubmit} class="btn btn-info">Submit</button>
                </form>
            </div>
            </>
        )
    }
}
    
export default sells ; 
