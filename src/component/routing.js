import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import Home from '../component/Home/home'
import sells from '../component/sellsbbook/sell'
import Booktype from '../component/booktype/booktype'
import Donatebook from '../component/Donatebooks/Donatebook'
import Bookdetail from '../component/bookdetails/Bookdetail'
import Request from '../component/Request/Request'
import Signup from '../component/Logindetails/signup'
import Login from '../component/Logindetails/Login'
import Forgetpwd from '../component/Logindetails/Forgetpwd'
import Admin from '../component/Adminfolder/Admin'
import Adminnavbar from '../component/Adminfolder/adminnav'
const Routing = () => {
    return(
       
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route  path ='/sells' component={sells}/> 
            <Route exact path ='/booktype' component={Booktype}/>
            <Route path="/bookdetail/:id" component={Bookdetail}/>
            <Route path="/donatebooks" component={Donatebook}/>
            <Route path ='/request' component={Request}/>
            <Route path='/signup' component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgetpwd" component={Forgetpwd}/>
            <Route path="/admin_login" component={Admin}/>
            <Route path="/adminnav" component={Adminnavbar}/>
        </BrowserRouter>
        
    )
}

export default Routing 