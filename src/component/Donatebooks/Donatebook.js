import React from 'react'
import Navbar from '../navbar/nav'
import '../Donatebooks/Donatebook.css'
class Donatebook extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <Navbar/>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner"> 

                    <div class="item active"> 
                        <img src="./images/donatebook.png" alt="Los Angeles"/>
                    </div>

                    <div class="item">
                        <img id="donateimg" src="./images/dbook.jpeg" alt="Chicago"/>
                    </div>
                </div> 
            </div>  
            <hr/>
            <h1> <b> <center> Donate books available </center> </b> </h1>
            </>
        )
    }
}

export default Donatebook ;