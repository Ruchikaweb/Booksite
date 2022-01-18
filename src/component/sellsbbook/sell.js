import React from 'react' ;
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar/nav'
import '../sellsbbook/sell.css'
const axios = require("axios");

const Url="https://no1book-app.herokuapp.com/post_books"; 
const imgurl="https://no1book-app.herokuapp.com/uploadImage"

const Sells = ()=>{ 

    const history = useHistory();
    
    const [selectimg,setselectimg] = useState()
    const [name,setname]= useState()
    const [email,setemail]= useState()
    const [mobileno,setmobileno]= useState()
    const [bookname,setbookname]= useState()
    const [bookrs,setbookrs]= useState()
    const [author,setauthor]= useState()
    const [purpose,setpurpose]= useState()
    const [bookcondition,setbookcondition]= useState()
    const [booktype,setbooktype]= useState()
    const [location,setlocation]= useState()
    const [otherdetails,setotherdetails]= useState()
    const [image,setimage]= useState()
    const [selectfile,setselectfile]= useState()
    

   const handelsubmit = async() => { 
       console.log("helloo 33")
        const formData = new FormData();
        alert("We are purchasing your books 40% on MRP rs. other % is included mentainance of book and delivery...Thanku for member of book house..")
        if(name==''||mobileno ==''|| email ==''|| bookname==''||
        bookrs ==''|| author ==''|| purpose ==''||bookcondition ==''||booktype==''||location ==''||otherdetails ==''||image ==''){ 
            alert("All filds are required")
        } else{   
            formData.append("image", selectimg, selectimg.name);
            const imageData =  await axios.post(imgurl, formData);
            console.log(imageData)
    // (imageData.data.secure_url)
            console.log(imageData.data.secure_url)
            console.log("hello 43")
            if(mobileno.length==10){ 
                console.log("hello 44")
               const res = await fetch(Url, 
                    {
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        // body:JSON.stringify(this.state)
                        body:JSON.stringify({
                             name , mobileno, email,bookname,bookrs,author,purpose, bookcondition,booktype,location,otherdetails,image:imageData.data.secure_url,selectfile
                        })
                    });
                    console.log(res)
                    // const data = await res.json();
                    console.log("hello62")
                    // console.log(data)
                    // .then(this.props.history.push('/home'))
            } else{ 
                alert("Enter right phone no") 
            }
                history.push("/home")
        }
    } 
 
     const handelchange=(event)=>{
         const name = event.target.name;
         const value = event.target.value
        switch (event.target.name){
            case 'name':
                setname(event.target.value) ;
                break ;
            case 'mobileno':
                setmobileno(event.target.value) ;
                break ;
            case 'email':
                setemail(event.target.value) ;
                break ;
            case 'bookname':
                setbookname(event.target.value) ;
                break ;
            case 'bookrs':
                setbookrs(event.target.value) ;
                break ;
            case 'author':
                setauthor(event.target.value) ;
                break ;
            case 'purpose':
                setpurpose(event.target.value) ;
                break ;
            case 'bookcondition':
                setbookcondition(event.target.value) ;
                break ; 
            case 'booktype':
                setbooktype(event.target.value) ;
                break ;
            case 'location':
                setlocation(event.target.value) ;
                break ;
            case 'otherdetails':
                setotherdetails(event.target.value) ;
                break ;
            case 'image':
                setimage(event.target.value) ;
                break ;
            default :
                setselectfile(event.target.value) ;
                break ;
            
    }
        
    }


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
            <div style={{textAlign:'center'}}>
                <h1> Sells Second Books  </h1>
                <p style={{fontSize:'20px'}}> For any specific details call us at. </p>
                <p style={{fontSize:'20px'}}> 8209111389 , 9413595935 </p>
                <center> <hr style={{width:'25%'}}></hr></center> 
            </div> 
            <div className="container" id="reqformstyle">
                <form  style={{fontSize:'19px'}}> 
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control"  placeholder="Enter your name" required autoComplete="off" name="name" value={name} onChange={handelchange}/>
                    </div> 
                    <div class="form-group">
                        <label>Mobile</label>
                        <input type="number" class="form-control"  placeholder="Enter your number" required autoComplete="off" name="mobileno" value={mobileno} onChange={handelchange}/>
                    </div>
                    <div class="form-group">
                        <label >Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter Email"  required autoComplete="off" id="email" name="email" value={email} onChange={handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Book Name</label>
                        <input type="text" class="form-control"  placeholder="Enter Book name" required autoComplete="off" name="bookname" value={bookname} onChange={handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Book Prize</label>
                        <input type="text" class="form-control"  placeholder="Enter Book original prize" required autoComplete="off" name="bookrs" value={bookrs} onChange={handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Author</label>
                        <input type="text" class="form-control"  placeholder="Enter details" required autoComplete="off" name="author" value={author} onChange={handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Purpose</label>
                        <select style={{fontSize:'20px'}} class="form-control" name="purpose" value={purpose} onChange={handelchange} >
                            <option selected> Select purpose </option>
                            <option> For sell </option>
                            <option> For Donate  </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>BookCondition</label>
                        <select style={{fontSize:'20px'}} class="form-control" name="bookcondition" value={bookcondition} onChange={handelchange}>
                            <option selected> Select book condition </option>
                            <option> New </option>
                            <option> Old  </option>
                        </select>
                    </div> 
                    <div class="form-group"> 
                        <label>Booktype</label>
                        <select style={{fontSize:'20px'}} class="form-control" name="booktype" value={booktype} onChange={handelchange}>
                            <option selected > Select book type </option>
                            <option> School book </option>
                            <option> College book  </option>
                            <option> Compitation book </option>
                            <option> Other </option>
                        </select>
                    </div>
                    <div class="form-group"> 
                        <label>Location/College</label>
                        <input type="text" class="form-control"  placeholder="Enter location" required autoComplete="off" name="location" value={location} onChange={handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>other details</label>
                        <textarea class="form-control" name="otherdetails" value={otherdetails} onChange={handelchange} rows="5" id="comment"></textarea>
                    </div>
                    <div class="form-group">
                        <label>images upload</label>
                        <input type="file"  required autoComplete="off" name="image" value={image} onChange={(e) => {
                        // this.state.selectimage ; e.target.files[0] 
                        setselectimg(e.target.files[0]);
                  }}/>  
                    </div>
                    <button type="button" id="requestbtn" onClick={handelsubmit} class="btn btn-info">Submit</button>
                </form>
            </div>
            </>
        )
    
}
    
export default Sells ; 
