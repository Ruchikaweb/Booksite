import React from 'react'
import Navbar from '../navbar/nav'
import '../Donatebooks/Donatebook.css'
const url="https://no1book-app.herokuapp.com/post_donate_bk_request";
class Donatebook extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            number:'',
            email:'',
            bookname:'',
            author:'',
            location:'',
            otherdetails:'',
            image:''
        }
    } 

    handelsubmit = () => {
        console.log(">>>>>>>",this.state)
        fetch(url,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:this.state.name,
                    number:this.state.number,
                    email:this.state.email,
                    bookname:this.state.bookname,
                    author:this.state.author,
                    location:this.state.location,
                    otherdetails:this.state.otherdetails,
                    image:this.state.image,
                }) 
            })
            .then(this.props.history.push('/home'))
    }
 
    handelchange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){ 
        return(
            <>
            <Navbar/>
            <img style={{marginTop:'-2%'}} id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>

            <div style={{textAlign:'center'}}>
                <h1> Request Books You Cannot Find </h1>
                <p style={{fontSize:'20px'}}> For any specific details call us at. </p>
                <p style={{fontSize:'20px'}}> 8209111389 , 9413595935 </p>
                <center> <hr style={{width:'25%'}}></hr></center> 
            </div> 
            <div className="container" id="reqformstyle">
                <form style={{fontSize:'19px'}}> 
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control"  placeholder="Enter your name" required autoComplete="off" name="name" value={this.state.name} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Mobile</label>
                        <input type="number" class="form-control"  placeholder="Enter your number" required autoComplete="off" name="number" value={this.state.number} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label >Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter Email"  required autoComplete="off" name="email" value={this.state.email} onChange={this.handelchange} id="email"/>
                    </div>
                    <div class="form-group">
                        <label>Book Name</label>
                        <input type="text" class="form-control"  placeholder="Enter Book name" required autoComplete="off" name="bookname" value={this.state.bookname} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Author or other details</label>
                        <input type="text" class="form-control"  placeholder="Enter details" required autoComplete="off" name="author" value={this.state.author} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>Location/College</label>
                        <input type="text" class="form-control"  placeholder="Enter location" required autoComplete="off" name="location" value={this.state.location} onChange={this.handelchange}/>
                    </div>
                    <div class="form-group">
                        <label>other details</label>
                        <textarea class="form-control" name="otherdetails" value={this.state.otherdetails} onChange={this.handelchange} rows="5" id="comment"></textarea>
                    </div>
                    <div class="form-group">
                        <label>images upload</label>
                        <input type="file"  required autoComplete="off" name="image" value={this.state.image} onChange={this.handelchange}/>
                    </div>
                    <button type="submit" id="requestbtn" onClick={this.handelsubmit} class="btn btn-info">Submit</button>
                </form>
            </div> 
            </>
        )
    }
}
// class Donatebook extends React.Component{
//     constructor(){
//         super()
//     }
//     render(){
//         return(
//             <>
//             <Navbar/>
//             <div id="myCarousel" class="carousel slide" data-ride="carousel">
//                 <div class="carousel-inner"> 

//                     <div class="item active"> 
//                         <img src="./images/donatebook.png" alt="Los Angeles"/>
//                     </div>

//                     <div class="item">
//                         <img id="donateimg" src="./images/dbook.jpeg" alt="Chicago"/>
//                     </div>
//                 </div> 
//             </div>  
//             <hr/>
//             {/* <h1> <b> <center> Donate books available </center> </b> </h1> */}
//             <div style={{textAlign:'center'}}>
//                 <h1> Donation Books Request </h1>
//                 <p> <b> All terms and condition follow </b> </p>
//                 <p style={{fontSize:'20px'}}> For any specific details call us at. </p>
//                 <p style={{fontSize:'20px'}}> 8209111389 , 9413595935 </p>
//                 <center> <hr style={{width:'25%'}}></hr></center> 
//             </div> 
//             <div className="container" id="reqformstyle"> 
//                 <form style={{fontSize:'19px'}}> 
//                     <div class="form-group">
//                         <label>Name</label>
//                         <input type="text" class="form-control"  placeholder="Enter your name" required autoComplete="off" name="email"/>
//                     </div>
//                     <div class="form-group">
//                         <label>Mobile</label>
//                         <input type="number" class="form-control"  placeholder="Enter your number" required autoComplete="off" name="pwd"/>
//                     </div>
//                     <div class="form-group">
//                         <label >Email address:</label>
//                         <input type="email" class="form-control" placeholder="Enter Email"  required autoComplete="off" id="email"/>
//                     </div>
//                     <div class="form-group">
//                         <label>Book Name</label>
//                         <input type="text" class="form-control"  placeholder="Enter Book name" required autoComplete="off" name="email"/>
//                     </div>
//                     <div class="form-group">
//                         <label>Author or other details</label>
//                         <input type="text" class="form-control"  placeholder="Enter details" required autoComplete="off" name="email"/>
//                     </div>
//                     <div class="form-group">
//                         <label>Location/College</label>
//                         <input type="text" class="form-control"  placeholder="Enter location" required autoComplete="off" name="email"/>
//                     </div>
//                     <div class="form-group">
//                         <label>other details</label>
//                         <textarea class="form-control" rows="5" id="comment"></textarea>
//                     </div>
//                     <div class="form-group">
//                         <label>images upload</label>
//                         <input type="file"  required autoComplete="off" name="email"/>
//                     </div>
//                     <button type="submit" id="requestbtn" class="btn btn-info">Submit</button>
//                 </form>
//             </div> 

//             </>
//         )
//     }
// }

export default Donatebook ;