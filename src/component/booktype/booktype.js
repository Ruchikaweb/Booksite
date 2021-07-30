import React from 'react';
import '../booktype/booktype.css'
import Navbar from '../navbar/nav'
import {Link} from 'react-router-dom'
class Booktype extends React.Component{
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
                <h1> <center>Available Books</center>  </h1>
                <div> 
                    <div className="col-sm-3"> 
                        <div className="filterbox">
                             <center> <h1 className="filterheading"> FILTER </h1> </center>  
                             <u> <h4 className="categryheading"> Category </h4> </u>  
                             <ul className="categryui">
                                <li> School Books </li> 
                                <li> College Books </li> 
                                <li> Compitation Books </li>
                                <li> Other </li>
                             </ul>
                             <u> <h4 className="costheading"> Cost </h4> </u>  
                             <ul className="costui">
                                <li> High to Low </li> 
                                <li> Low to High </li> 
                             </ul>
                             <u> <h4 className="costheading"> Book Condition </h4> </u>  
                             <ul className="costui">
                                <li>  New </li> 
                                <li> Old </li> 
                             </ul>
                        </div>
                    </div> 
                    <div className=" col-sm-8">
                        <Link to="/bookdetail/:id">
                            <div className="row" style={{marginTop:'2%'}}>
                                <div className="col-md-4">
                                    <div class="panel panel-default"  height="500px" width="100px">
                                        <div class="panel-heading"><img src="./images/booo.png" height="200px" width="300px"  alt="Max"/></div>
                                        <div class="panel-body">
                                        <h4> <center> <b> Book Name </b> </center>  </h4>
                                        <center>
                                        <div id="cardbuybtn" className="btn btn-danger">Buy Now</div>  
                                        <div id="cardaddbtn" className="btn btn-danger">Add to Cart</div> 
                                        </center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="panel panel-default"  height="500px" width="100px">
                                        <div class="panel-heading"><img src="./images/booo.png" height="200px" width="300px"  alt="Max"/></div>
                                        <div class="panel-body">
                                        <h4> <center> <b> Book Name </b> </center>  </h4>
                                        <center>
                                        <div id="cardbuybtn" className="btn btn-danger">Buy Now</div>  
                                        <div id="cardaddbtn" className="btn btn-danger">Add to Cart</div> 
                                        </center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="panel panel-default"  height="500px" width="100px">
                                        <div class="panel-heading"><img src="./images/booo.png" height="200px" width="300px"  alt="Max"/></div>
                                        <div class="panel-body">
                                        <h4> <center> <b> Book Name </b> </center>  </h4>
                                        <center>
                                        <div id="cardbuybtn" className="btn btn-danger">Buy Now</div>  
                                        <div id="cardaddbtn" className="btn btn-danger">Add to Cart</div> 
                                        </center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="panel panel-default"  height="500px" width="100px">
                                        <div class="panel-heading"><img src="./images/booo.png" height="200px" width="300px"  alt="Max"/></div>
                                        <div class="panel-body">
                                        <h4> <center> <b> Book Name </b> </center>  </h4>
                                        <center>
                                        <div id="cardbuybtn" className="btn btn-danger">Buy Now</div>  
                                        <div id="cardaddbtn" className="btn btn-danger">Add to Cart</div> 
                                        </center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="panel panel-default"  height="500px" width="100px">
                                        <div class="panel-heading"><img src="./images/booo.png" height="200px" width="300px"  alt="Max"/></div>
                                        <div class="panel-body">
                                        <h4> <center> <b> Book Name </b> </center>  </h4>
                                        <center>
                                        <div id="cardbuybtn" className="btn btn-danger">Buy Now</div>  
                                        <div id="cardaddbtn" className="btn btn-danger">Add to Cart</div> 
                                        </center>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </Link>                   
                    </div>
                </div>
               
            </>
        )
    }
}

export default Booktype