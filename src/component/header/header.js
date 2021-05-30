import React from 'react';
import '../header/header.css'
const Header = ()=>{
    return(      
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner"> 

                    <div class="item active"> 
                        <img src="./images/book5.jpg" alt="Los Angeles"/>
                    </div>

                    <div class="item">
                        <img src="./images/book6.jpeg" alt="Chicago"/>
                    </div>
                    
                    <div class="item">
                        <img src="./images/book4.jpg" alt="New York"/>
                    </div>

                    <div class="item"> 
                        <img src="./images/book2.jpeg" alt="Los Angeles"/>
                    </div>
            
                </div> 
            </div>
       
    )
}
export default Header