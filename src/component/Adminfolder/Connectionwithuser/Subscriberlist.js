import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css' 

const Subscriberlist =(props)=>{

    const SSlist =({slist})=>{
        if(slist){ 
            sessionStorage.setItem("subscriberno", slist.length);
            return slist.map((item)=>{
                return(
                    <React.Fragment>
                        
                       <div className="subscriberlist">
                            <p> {item.email} </p>
                        </div> 
                    </React.Fragment>
                )
            }) 
        } 
        else{  
            return(
                <div>
                    <img  src="/images/loader.gif"/>
                </div>
            )
        }
    }

        return(
            <>
                <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <Adminnavbar/>
                <h1> <center> <b> <u> All Subscriber </u> </b> </center>  </h1>
                <div id="totalsubscriber"> <span> Total Subscriber </span> {sessionStorage.getItem("subscriberno")} <span>  </span>  </div>
                
                    {SSlist(props)} 
            </>
        )
    
}

export default Subscriberlist  ;  