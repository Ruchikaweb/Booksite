import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
class Outofstockbook extends React.Component{
    constructor(){
        super(

        )
    } 
    render(){
        return(
            <>
                <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <Adminnavbar/>
                <h1> <center> <b> <u> Out Of Stock Books </u> </b> </center>  </h1>
                <div className="container">
                <div class="row">
                {/* <h2>Panel Heading</h2> */}
                    <div className="col-md-4">
                    <div class="panel panel-default"  height="300px" width="300px">
                        <div class="panel-heading"><img src="./images/booo.png" height="150px" width="300px"  alt="Max"/></div>
                        <div class="panel-body">
                            <h4> <center> <b> Book Name </b> </center>  </h4>
                            <center>
                            <span> <b> ₹ 200.00 </b> </span>
                            <span id="bookdetailcost"> ₹ 500.00 </span>
                            <button  style={{marginLeft:'1%'}}type="button" className="btn btn-danger"> 60% Off </button> <br/> <br/>
                            <div className="btn btn-danger"> In stock </div>  
                            <div style={{marginLeft:'3%'}} className="btn btn-danger"> Hard Delete </div>
                            </center>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="panel panel-default" height="300px" width="300px">
                        <div class="panel-heading"><img src="./images/booo.png" height="150px" width="300px"  alt="Max"/></div>
                        <div class="panel-body">
                        <h4> <center> <b> Book Name </b> </center>  </h4>
                            <center>
                            <span> <b> ₹ 200.00 </b> </span>
                            <span id="bookdetailcost"> ₹ 500.00 </span>
                            <button  style={{marginLeft:'1%'}}type="button" className="btn btn-danger"> 60% Off </button> <br/> <br/>
                            <div className="btn btn-danger"> In stock </div>  
                            <div style={{marginLeft:'3%'}} className="btn btn-danger"> Hard Delete </div>
                            </center>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                     <div class="panel panel-default" height="300px" width="300px">
                        <div class="panel-heading"><img src="./images/booo.png" height="150px" width="300px"  alt="Max"/></div>
                        <div class="panel-body">
                        <h4> <center> <b> Book Name </b> </center>  </h4>
                            <center>
                            <span> <b> ₹ 200.00 </b> </span>
                            <span id="bookdetailcost"> ₹ 500.00 </span>
                            <button  style={{marginLeft:'1%'}}type="button" className="btn btn-danger"> 60% Off </button> <br/> <br/>
                            <div className="btn btn-danger"> In stock </div> 
                            <div style={{marginLeft:'3%'}} className="btn btn-danger"> Hard Delete </div> 
                            </center>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="panel panel-default" height="300px" width="300px">
                        <div class="panel-heading"><img src="./images/booo.png" height="150px" width="300px"  alt="Max"/></div>
                        <div class="panel-body">
                        <h4> <center> <b> Book Name </b> </center>  </h4>
                            <center>
                            <span> <b> ₹ 200.00 </b> </span>
                            <span id="bookdetailcost"> ₹ 500.00 </span>
                            <button  style={{marginLeft:'1%'}}type="button" className="btn btn-danger"> 60% Off </button> <br/> <br/>
                            <div className="btn btn-danger"> In stock </div>  
                            <div style={{marginLeft:'3%'}} className="btn btn-danger"> Hard Delete </div>  
                            </center>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default Outofstockbook ;