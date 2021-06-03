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
                        <div className="maincard">
                            <div className="card1">
                                <img src="./images/booo.png" alt="Max"  className="Img"/>
                                <div class="TextContent">
                                    <div className="Name">book name</div>
                                    <div className="btn">Buy Now</div>  
                                    <div className="btn">Add to Cart</div> 
                                </div>        
                            </div>
                        </div> 
                        </Link>
                      
                        <div className="maincard">
                            <div className="card1">
                                <img src="./images/booo.png" alt="Max"  className="Img"/>
                                <div class="TextContent">
                                    <div className="Name">book name</div>
                                    <div className="btn">Buy Now</div>  
                                    <div className="btn">Add to Cart</div> 
                                </div>        
                            </div>
                        </div>
                        <div className="maincard">
                            <div className="card1">
                                <img src="./images/booo.png" alt="Max"  className="Img"/>
                                <div class="TextContent">
                                    <div className="Name">book name</div>
                                    <div className="btn">Buy Now</div>  
                                    <div className="btn">Add to Cart</div> 
                                </div>        
                            </div>
                        </div>
                        <div className="maincard">
                            <div className="card1">
                                <img src="./images/booo.png" alt="Max"  className="Img"/>
                                <div class="TextContent">
                                    <div className="Name">book name</div>
                                    <div className="btn">Buy Now</div>  
                                    <div className="btn">Add to Cart</div> 
                                </div>        
                            </div>
                        </div>
                        <div className="maincard">
                            <div className="card1">
                                <img src="./images/booo.png" alt="Max"  className="Img"/>
                                <div class="TextContent">
                                    <div className="Name">book name</div>
                                    <div className="btn">Buy Now</div>  
                                    <div className="btn">Add to Cart</div> 
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
               
            </>
        )
    }
}

export default Booktype