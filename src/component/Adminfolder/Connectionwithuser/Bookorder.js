import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
class Bookorder extends React.Component{
    constructor(){
        super(

        )
    } 
    render(){
        return(
            <>
                <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
                <Adminnavbar/>
                <h1> <center> <b> <u> Book orders </u> </b> </center>  </h1>
                <table className=" container table table-bordered table-hover" id="requesttable">
                <thead> 
                    <tr>
                        <th> Book name </th>
                        <th> Author </th>
                        <th> Book type </th>
                        <th> Quantity </th>
                        <th>Order Condition</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td> 12 BIO </td>
                        <td> NCRT </td>
                        <td> School Book </td>
                        <td> 1 </td>
                        <td> <center>  <button className="btn btn-light" style={{fontSize:'20px'}}> Completed  </button> </center> </td>
                    </tr>
                    <tr>
                        <td> 12 BIO </td>
                        <td> NCRT </td>
                        <td> School Book </td>
                        <td> 1 </td>
                        <td> <center>  <button className="btn btn-light" style={{fontSize:'20px'}}> Completed  </button> </center> </td>
                    </tr>
                    <tr>
                        <td> 12 BIO </td>
                        <td> NCRT </td>
                        <td> School Book </td>
                        <td> 1 </td>
                        <td> <center>  <button className="btn btn-light" style={{fontSize:'20px'}}> Completed  </button> </center> </td>
                    </tr>
                </tbody>
              
            </table>
            </>
        )
    }
}

export default Bookorder ;