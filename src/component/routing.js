import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import Navbar from './navbar/nav'
import Home from '../component/Home/home'
import sells from '../component/sellsbbook/sell'
import Booktype from '../component/booktype/booktype'
import Bookdetail from '../component/bookdetails/Bookdetail'
import Request from '../component/Request/Request'
import Signup from '../component/Logindetails/signup'
import Login from '../component/Logindetails/Login'
import Forgetpwd from '../component/Logindetails/Forgetpwd'
const Routing = () => {
    return(
       
        <BrowserRouter>
            <Navbar/>
            <Route exact path='/' component={Home}/>
            <Route  path ='/sells' component={sells}/> 
            <Route exact path ='/booktype' component={Booktype}/>
            <Route path="/bookdetail/:id" component={Bookdetail}/>
            <Route  path ='/request' component={Request}/>
            <Route path='/signup' component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgetpwd" component={Forgetpwd}/>
        </BrowserRouter>
        
    )
}

export default Routing 