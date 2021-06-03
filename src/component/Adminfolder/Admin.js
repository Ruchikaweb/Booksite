import React from 'react' 
import '../Adminfolder/admin.css'
import Adminnavbar from '../Adminfolder/adminnav'
class Admin extends React.Component{
    constructor(){
        super(

        )
    }
    render(){
        return(
            <>
            <img id="adminheaderimg" src="./images/headerimg.jpg" alt="wrong"/>
            <Adminnavbar/>
                <h1> Admin panel </h1>
            </>
        )
    }
}

export default Admin ;