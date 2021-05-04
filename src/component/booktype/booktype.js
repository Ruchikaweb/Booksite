import React from 'react';
import '../booktype/booktype.css'
class Booktype extends React.Component{
    render(){
        return(
            <>
                <h1> <center> Most Populer Books</center>  </h1>
                <div>
                    <div className="col-sm-2">
                        filter
                    </div>
                    <div className=" col-sm-10">
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
                <hr/>
            </>
        )
    }
}

export default Booktype