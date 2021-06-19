import React from 'react'
import  Adminnavbar from '../adminnav'
import '../admin.css'
const Donatebookrequest =(props) =>{
    const donatereqq =({donarreq})=>{
        if(donarreq){
            return donarreq.map((item) => {
                return(
                  <React.Fragment>
                        <tr> 
                            <td> {item.bookname} </td>
                            <td> {item.number} </td>
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
                    <img src="/images/bookloader.gif"/>
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
                    {donatereqq(props)}
                </tbody>
              
            </table>
        </>
    )
}
// class Donatebookrequest extends React.Component{
//     constructor(){
//         super(

//         )
//     } 
//     render(){
//         return(
//             <>
//                 <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
//                 <Adminnavbar/>
//                 <h1> <center> <b> <u> Donate Book Request </u> </b> </center>  </h1>
//                 <table className=" container table table-bordered table-hover" id="requesttable">
//                     <thead>
//                         <tr>
//                             <th> Book name </th>
//                             <th> Mobile no. </th>
//                             <th> Author </th>
//                             <th> Location </th>
//                             <th> Delete btn </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr> 
//                             <td> Book name </td>
//                             <td> Mobile no. </td>
//                             <td> Author </td>
//                             <td> Location </td>
//                             <td> <button className="btn btn-danger"> Delete </button> </td> 
//                         </tr>
//                         <tr> 
//                             <td> Book nameccccccc </td>
//                             <td> 1234561234 </td>
//                             <td> dfdsjfsjdvnfjsdivburvbnvurnv </td>
//                             <td> djfnjkfhdfhiduidcjnvidvjcniwcjniw </td>
//                             <td> <button className="btn btn-danger"> Delete </button> </td> 
//                         </tr>
//                     </tbody>
                  
//                 </table>
//             </>
//         )
//     }
// }

export default Donatebookrequest ; 