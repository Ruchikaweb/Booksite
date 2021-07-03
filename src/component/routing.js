import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import Home from '../component/Home/home'
import sells from '../component/sellsbbook/sell'
import Booktype from '../component/booktype/booktype'
import Donatebook from '../component/Donatebooks/Donatebook'
import Bookdetail from '../component/bookdetails/Bookdetail'
import Card from  '../component/Mycard/Card'
import Request from '../component/Request/Request'
import Signup from '../component/Logindetails/signup'
import Login from '../component/Logindetails/Login'
import Forgetpwd from '../component/Logindetails/Forgetpwd'
import Admin from '../component/Adminfolder/Admin'
import Adminnavbar from '../component/Adminfolder/adminnav'
import Alluser from '../component/Adminfolder/users/Alluser'
import Activeuser from '../component/Adminfolder/users/Activeuser'
import Blockuser from '../component/Adminfolder/users/Blockuser'
import Allcollections from '../component/Adminfolder/Collections/Allcollections'
import Availablebookfordonate from'../component/Adminfolder/Collections/Availablebookfordonate'
import Outofstockbook from '../component/Adminfolder/Collections/Outofstockbooks'
import Bookorder from '../component/Adminfolder/Connectionwithuser/Bookorder'
import Bookrequestapi from '../component/Adminfolder/Bookrequestapi'
import Donatereqapi from '../component/Adminfolder/Donatereqapi'
import Subscriberlist  from '../component/Adminfolder/Connectionwithuser/Subscriberlist'
const Routing = () => {
    return(
       
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route  path ='/sells' component={sells}/> 
            <Route exact path ='/booktype' component={Booktype}/>
            <Route path="/bookdetail/:id" component={Bookdetail}/>
            <Route path="/donatebooks" component={Donatebook}/>
            <Route path="/my_card" component={Card}/>
            <Route path ='/request' component={Request}/>
            <Route path='/signup' component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgetpwd" component={Forgetpwd}/>
            <Route path="/admin_login" component={Admin}/>
            <Route path="/adminnav" component={Adminnavbar}/>
            <Route path="/all_users" component={Alluser}/>
            <Route path="/active_users" component={Activeuser}/>
            <Route path="/blocked_users" component={Blockuser}/>
            <Route path="/all_collections" component={Allcollections}/>
            <Route path="/Donate_available_books" component={Availablebookfordonate}/>
            <Route path="/out_of_stock" component={Outofstockbook}/>
            <Route path="/book_order" component={Bookorder}/>
            <Route path="/book_request" component={Bookrequestapi}/>
            <Route path="/donate_book_request" component={Donatereqapi}/>
            <Route path="/all_subscribes" component={Subscriberlist}/>
        </BrowserRouter>
        
    )
}

export default Routing 