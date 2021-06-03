import React from 'react' ;
import {Link} from 'react-router-dom'
import Navbar from '../navbar/nav'
// import Header2 from '../header/header2'
import '../sellsbbook/sell.css'
class sells extends React.Component{
    constructor(){
        super()
    } 
    render(){
        return(
            <>
            <Navbar/>
            {/* <Header2/> */}
            
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
                        <label>Book Name</label>
                        <input type="text" class="form-control"  placeholder="Enter Book name" required autoComplete="off" name="email"/>
                    </div>
                    <div class="form-group">
                        <label>Author or other details</label>
                        <input type="text" class="form-control"  placeholder="Enter details" required autoComplete="off" name="email"/>
                    </div>
                    <div class="form-group">
                        <label>Purpose</label>
                        <select style={{fontSize:'20px'}} class="form-control" id="sel1">
                            <option disabled selected> Select purpose </option>
                            <option> For sell </option>
                            <option> For Donate  </option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label>Booktype</label>
                        <select style={{fontSize:'20px'}} class="form-control" id="sel1">
                            <option disabled selected> Select purpose </option>
                            <option> School book </option>
                            <option> College book  </option>
                            <option> Compitation book </option>
                            <option> Other </option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label>Location/College</label>
                        <input type="text" class="form-control"  placeholder="Enter location" required autoComplete="off" name="email"/>
                    </div>
                    <div class="form-group">
                        <label>other details</label>
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <div class="form-group">
                        <label>images upload</label>
                        <input type="file"  required autoComplete="off" name="email"/>
                    </div>
                    <button type="submit" id="requestbtn" class="btn btn-info">Submit</button>
                </form>
            </div>
            </>
        )
    }
}

    


export default sells ;