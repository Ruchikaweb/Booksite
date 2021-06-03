import React from 'react';
import Navbar from '../navbar/nav'
import Header from '../header/header'
import Footer from '../footer/footer'
import {Link} from 'react-router-dom'
import '../Home/home.css'
const Home = ()=> {
    return(  
        <>
        <Navbar/>
         <Header/> 
        <hr/>
        <h1> <center> Most Populer Books</center>  </h1>
        <Link to="bookdetail/:id" > 
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div> 
                            <span className="mprice"> Rs.My Price </span>
                            <span className="oprice"> Rs. Original Price </span> 
                        </div>
                        <div>
                            <span className="offer"> 15% OFF </span> 
                        </div>
                       
                        <div className="btn">Buy Now</div>  
                        <div className="btn">Add to Cart</div> 
                    </div>        
                </div>
            </div>
         </Link>
           
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div className="btn">Buy Now</div>  
                        <div className="btn">Add to Cart</div> 
                    </div>        
                </div>
            </div>
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div className="btn">Buy Now</div>  
                        <div className="btn">Add to Cart</div> 
                    </div>        
                </div>
            </div>
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div className="btn">Buy Now</div>  
                        <div className="btn">Add to Cart</div> 
                    </div>        
                </div>
            </div>
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div className="btn">Buy Now</div>  
                        <div className="btn">Add to Cart</div> 
                    </div>        
                </div>
            </div>
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div className="btn">Buy Now</div>  
                        <div className="btn">Add to Cart</div> 
                    </div>        
                </div>
            </div>
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div className="btn">Buy Now</div>  
                        <div className="btn">Add to Cart</div> 
                    </div>        
                </div>
            </div>
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div className="btn">Buy Now</div>  
                        <div className="btn">Add to Cart</div> 
                    </div>        
                </div>
            </div> 
            <div className="comtainer"> 
                <div className="btn btn-success" id="seemorebtn"><a href="/booktype"> see more</a></div>  
            </div>
            <center><hr style={{width:'25%'}}/> </center> 
            <div class="container-fluid homepanel">
                <div>
                    <div class="panel panel-default homepagedetails">
                        <div class="panel-body ">
                            <center>  <h2> 
                                <b>Should you rent books or buy new or buy second hand books?</b>
                            </h2>  </center>
                           <br/>
                            <p style={{fontSize:'17px'}}>
                                <b><i>The choice of best option between buying new book or second hand book or opting for a book rental is balance of time you need it for and book cost.</i></b> <br/> <br/>
                                A simple rule of thumb is if a book is needed for more than a year purchase works out better than leasing the book. If your need of the 
                                book is time limited (like for exam, only reference for short period) like a semester nothing can beat rentals. As far as purchasing second hand book is concerned books that change very frequently like GATE books, ESE books, GRE, GMAT Books, SSE Bank PO which have newest year based updates and you cant have the access of such material separately you should go for a new book purchase. However if the book like IIT JEE book or NCERT book which has most of the content and newest question papers are available else where second hand books save you most money.
                                Most of the books wouldnt have any big changes and remain same for years to come. Its a no brainer to opt for a book rental or a used book purchase in such scenarios.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <center>  <h1> Book online: Deals on second hand books. </h1> </center>
                <div className="row">
                    <div id="sellonlinebook" className="col-md-4 col-xs-4">
                        <img id="serviceimgg" src="./images/ser.jpg" alt="wrong"/>
                        <h2 style={{textAlign:'center'}}> Second hand book online </h2>
                        <h3 className="homepageadd"> Cash On Delivery </h3>
                    </div>
                    <div id="sellonlinebook2" className="col-md-4 col-xs-4">
                        <img id="serviceimggg" src="./images/gu.jpg" alt="wrong"/>
                        <h2 style={{textAlign:'center'}}> Used Competative Books </h2>
                        <h3 className="homepageadd" style={{textAlign:'center'}}> GATE,ESE,UPSE Books Save Upto 70% </h3>
                    </div>
                </div>
            </div>
        

            <Footer/>
            
        </>

    )
}

export default Home