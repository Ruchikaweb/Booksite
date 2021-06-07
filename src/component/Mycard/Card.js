import React from 'react' 
import Navbar from '../navbar/nav'
class Card extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
                 <Navbar/>
                <img style={{marginTop:'-2%'}} id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
               
                <h1> <center> <b> <u> My card Details </u> </b> </center>  </h1>
            </>
        )
    }
}

export default Card ;