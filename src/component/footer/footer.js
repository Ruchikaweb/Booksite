import React from 'react';
import '../footer/footer.css'
const Footer = ()=>{
    return(
       <div>
       <hr/>
          <center>
          
             <div id="foott">
             <div className="row">
                    <div className=" col-xxl-12 col-12 col-md-12">
                        <footer className="text-center py-5" id="contactstyle" style={{fontSize:'20px'}}>
                            <p> E-mail : ruchikanikita94135@gmail.com </p>
                            <a href="https://www.linkedin.com/in/ruchika-agarwal-51a2841bb/" target="_blank"> <img src="./images/in logo.png" id="istyel" alt="inlogo"/> </a>
                            <a href="https://github.com/Ruchikaweb" target="_blank"> <img src="./images/git logo.png" id="istyel" alt="gitlog"/> </a> 
                        </footer>
                    </div>
                </div> <br/>
               <p>  This Site is Created & Design By Ruchika Agarwal Reserved All Copyrights © 2021.. </p>
              
             </div>
            
           
          </center>
          
       
       </div>
      
    )
}
export default Footer 