import React from 'react' 
import Navbar from '../navbar/nav'
class Mysellbook extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
                <Navbar/>
                <img style={{marginTop:'-2%'}} id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <h1> <center> <b> <u> My Sells Books </u> </b> </center>  </h1>
                <div className="container">
                <div class="row">
                    <div className="col-md-4">
                    <div class="panel panel-default"  height="300px" width="300px">
                        <div class="panel-heading"><img src="./images/booo.png" height="150px" width="300px"  alt="Max"/></div>
                        <div class="panel-body">
                            <h4> <center> <b> Book Name </b> </center>  </h4>
                            <center>
                            <span> <b> ₹ 200.00 </b> </span>
                            <span id="bookdetailcost"> ₹ 500.00 </span>
                            <button  style={{marginLeft:'1%'}}type="button" className="btn btn-danger"> 60% Off </button> <br/> <br/>
                            <div className="btn btn-danger"> Out of stock </div>  
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
                            <div className="btn btn-danger"> Out of stock </div>  
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
                            <div className="btn btn-danger"> Out of stock </div>  
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
                            <div className="btn btn-danger"> Out of stock </div>  
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

export default Mysellbook ;