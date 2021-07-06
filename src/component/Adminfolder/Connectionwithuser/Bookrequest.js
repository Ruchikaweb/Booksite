import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'   
const Bookrequest =(props) =>{
    const Requestss =({userreq})=>{
        if(userreq){
            return userreq.map((item) => {
                return(
                  <React.Fragment>
                        <tr> 
                            <td> {item.bookname} </td>
                            <td> {item.mobileno} </td>
                            <td> {item.author} </td>
                            <td> {item.location} </td>
                            <td> <button className="btn btn-danger"> Delete </button> </td> 
                        </tr>
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
            <h1> <center> <b> <u> Book Request </u> </b> </center>  </h1>
            <table className=" container table table-bordered table-hover" id="requesttable">
                <thead>
                    <tr>
                        <th> Book name </th>
                        <th> Mobile no. </th>
                        <th> Author </th>
                        <th> Location </th>
                        <th> Delete btn </th>
                    </tr>
                </thead>
                <tbody> 
                    {Requestss(props)}
                </tbody>
              
            </table>
        </>
    )
}
        
export default Bookrequest ; 