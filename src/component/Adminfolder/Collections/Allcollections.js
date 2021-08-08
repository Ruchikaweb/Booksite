import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
const Allcollections =(props)=>{
    const Allcollec =({Allcolec})=>{ 
        if(Allcolec){
            return Allcolec.map((item) => {
                return(    
                  <React.Fragment>
                    <div className="col-md-4">
                        <div class="panel panel-default"  height="300px" width="300px">
                            <div class="panel-heading"><img src={item.image} height="150px" width="300px"  alt="Max"/></div>
                            <div class="panel-body">
                                <h4> <center> <b> {item.bookname} </b> </center>  </h4>
                                <center>
                                <span> <b> ₹ {item.bookrs} </b> </span>
                                <span id="bookdetailcost"> ₹ {item.bookrs} 500.00 </span>
                                <button  style={{marginLeft:'1%'}}type="button" className="btn btn-danger"> 60% Off </button> <br/> <br/>
                                <div className="btn btn-danger"> Out of stock </div>  
                                </center>
                            </div>
                        </div>
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
                <h1> <center> <b> <u>  All Available Books </u> </b> </center>  </h1>
                <div className="container">
                <div class="row">
                    {Allcollec(props)}
                </div>
                </div>
            </>
        )
}

      
    

export default Allcollections ;