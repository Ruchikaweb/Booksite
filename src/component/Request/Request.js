import React from 'react' 
import '../Request/Request.css'
class Request extends React .Component{
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
            <div style={{textAlign:'center'}}>
                <h1> Request Books You Cannot Find </h1>
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

export default Request 