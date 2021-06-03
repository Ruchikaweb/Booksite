import React from 'react'
import Navbar from '../navbar/nav'
import {Link} from 'react-router-dom'
import '../bookdetails/Bookdetail.css'
class Bookdetail extends React.Component{
    constructor(){
        super()
    }
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
            <div className="row">
                <div className="col-md-3 col-xs-3">
                    <img id="bookdetailsimg" src="/images/booo.png" alt="wrongpath"/>
                </div>
                <div className="col-md-6 col-xs-6" id="bookdetailscontent">
                    <h1 style={{marginBottom:'2%'}}> Book Name </h1> 
                    <div style={{marginBottom:'2%'}}>
                        <span  id="author"> Author or other details: </span>
                        <span> dfjdknfdkjfkdjfkdjfkdjvckdjvkdvkddhvdjvnhkdvndnv </span>
                    </div>
                    <div style={{marginBottom:'2%'}}> 
                        <span id="bookdetailbooktype"> Book type: </span>
                        <span> College books </span>
                    </div>
                    <div style={{marginBottom:'2%'}}> 
                        <span id="bookdetailbooktype"> Sold by: </span>
                        <span> Book House:</span>
                    </div>

                    <div style={{marginBottom:'2%'}}> 
                        <h2 id="booktypeinoutstock"> In stock </h2>
                    </div>
                    
                    <div style={{marginBottom:'2%'}}> 
                        <span> <b> ₹ 200.00 </b> </span>
                        <span id="bookdetailcost"> ₹ 500.00 </span>
                        <button  style={{marginLeft:'1%'}}type="button" className="btn btn-danger"> 60% Off </button>
                    </div>
                    <div style={{marginBottom:'2%'}}> 
                        <span id="bookdetailbooktype"> Quantity: </span>
                        <input id="bookquantity" type="number"  name="quantity" min="1" />
                    </div>
                    <div style={{marginBottom:'2%'}}> 
                        <button id="addtocart" type="button" className="btn btn-danger">  Add to cart </button>
                        <button  id="addtocart" style={{marginLeft:'1%'}}type="button" className="btn btn-danger"> Buy now </button>
                    </div>
                </div>
            </div>
            <hr id="hrset"/>
            <div className="container">
                <h1> Description of product </h1>
                <p> Lata Mangeshkar's life and career are widely known, and yet there is an aspect that remains largely unrecorded: her life on the international stage. Beyond the confines of a recording booth, or as the voice of generations of actresses, she was an accomplished and magnetic performer on stage. She attracted vast audiences of Indian origin who have made their home in many countries, including the US and Canada. Mangeshkar transformed how the Indian film music concert was perceived in the West by refusing to be part of the low-key song-and-dance performances that were held earlier in community halls, schools and colleges. She insisted that she and her colleagues would sing only in mainstream auditoriums - this was an unheard-of demand because Indian film artistes had never performed on those stages at that time. In ON STAGE WITH LATA, Mohan Deora - co-promoter and co-organizer of Lata Mangeshkar's international tours from 1975 to 1998 - allows us to journey with her and the top male playback singers, including Mukesh (who tragically died during a Detroit tour), Manna Dey and Kishore Kumar. Deora and Shah write about the participation of big-name stars including Amitabh Bachchan and Dilip Kumar, Waheeda Rehman and Farida Jalal. Mangeshkar is described here in her interactions with musicians, colleagues and friends as she meticulously prepared to sing on stage. The tours led to planning and glitches, camaraderie and tension, and anecdotes galore. They also provided the authors with a unique opportunity to observe the clarity of thought with which Lata Mangeshkar approached her work, and to see a great artiste at the height of her powers. A fine eye for detail makes the book a delight to read as Mohan Deora and Rachana Shah record an important slice of India's cinematic and cultural history.
                </p>
            </div>
            <hr id="hrset"/>
            <div style={{marginTop:'1%'}} className="container">
                <div className="row">
                    <div className="col-md-3 col-xs-3">
                        <h3 style={{fontWeight:'bold'}}> User Review </h3>
                    </div>
                    <div className="col-ms-7 col-xs-7"> 
                        <form>
                            <div class="form-group">
                                <label><b> Other details </b></label>
                                <textarea class="form-control" placeholder="Write a review " rows="5" id="comment"></textarea>
                            </div>
                            <input style={{marginBottom:'2%'}} type="button" className="btn btn-danger" value="Post Review"/>
                        </form>
                    </div>
                </div>
            </div> 
            <div id="foott">
             <div className="row">
                    <div className=" col-xxl-12 col-12 col-md-12">
                        <footer className="text-center py-5" id="contactstyle" style={{fontSize:'20px'}}>
                            <p> E-mail : ruchikanikita94135@gmail.com </p>
                            <a href="https://www.linkedin.com/in/ruchika-agarwal-51a2841bb/" target="_blank"> <img src="/images/in logo.png" id="istyel" alt="inlogo"/> </a>
                            <a href="https://github.com/Ruchikaweb" target="_blank"> <img src="/images/git logo.png" id="istyel" alt="gitlog"/> </a> 
                        </footer>
                    </div>  
                </div> <br/>
                 <p style={{marginLeft:'25%'}}>  This Site is Created & Design By Ruchika Agarwal Reserved All Copyrights © 2021.. </p>
              
             </div>
            </>
        )
    }
}

export default Bookdetail ;