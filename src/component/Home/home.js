import react from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import '../Home/home.css'
const Home = ()=> {
    return( 
        <>
         <Header/> 
        <hr/>
        <h1> <center> Most Populer Books</center>  </h1>
            <div className="maincard  " >
                <div className="card1">
                        <img src="./images/booo.png" alt="Max"  className="Img"/>
                    <div class="TextContent">
                        <div className="Name">book name</div>
                        <div> 
                            <span className="oprice"> Original Price </span> 
                            <span className="mprice"> My Price </span>
                        </div>
                       
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
                <div className="btn btn-success" ><a href="/booktype"> see more</a></div>  
            </div>

            <Footer/>
            
        </>

    )
}

export default Home