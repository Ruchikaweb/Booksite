import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import Home from '../component/Home/home'
import sells from '../component/sellsbbook/sell'
import Booktype from '../component/booktype/booktype'
import Donatebook from '../component/Donatebooks/Donatebook'
import Bookdetail from '../component/bookdetails/Bookdetail'
import Card from  '../component/Mycard/Card'
import Mysellbook from '../component/Mysellbooks/mysellbook'
import Request from '../component/Request/Request'
import Signup from '../component/Logindetails/signup'
import Login from '../component/Logindetails/Login'
import Logout from '../component/Logindetails/Logout'
import Forgetpwd from '../component/Logindetails/Forgetpwd'
import Admin from '../component/Adminfolder/Admin'
import Adminnavbar from '../component/Adminfolder/adminnav'
import Alluserapi from '../component/Adminfolder/users/Alluserapi'
import Activeuserapi from '../component/Adminfolder/users/Activeuserapi'
import Blockuserapi from '../component/Adminfolder/users/Blockuserapi'
import Reactivateuser from '../component/Adminfolder/users/Reactiveuser'
import Deactivateuser from '../component/Adminfolder/users/Deactivateuser'
import Allcollectionapi from '../component/Adminfolder/Collections/Allcollectionapi'
import Availablebookfordonate from'../component/Adminfolder/Collections/Availablebookfordonate'
import Outofstockbook from '../component/Adminfolder/Collections/Outofstockbooks'
import Bookorder from '../component/Adminfolder/Connectionwithuser/Bookorder'
import Bookrequestapi from '../component/Adminfolder/Bookrequestapi'
import Donatereqapi from '../component/Adminfolder/Donatereqapi'
import Subscriberlistapi  from '../component/Adminfolder/Connectionwithuser/Subscriberlistapi'
const Routing = () => {
    return(
        
        <BrowserRouter>
            <Route  path='/home' component={Home}/>
            <Route exact path="/" component={Login}/>
            <Route  path ='/sells' component={sells}/> 
            <Route exact path ='/booktype' component={Booktype}/>
            <Route path="/bookdetail/:id" component={Bookdetail}/>
            <Route path="/donatebooks" component={Donatebook}/>
            <Route path="/my_card" component={Card}/>
            <Route path="/my_sells_books" component={Mysellbook}/>
            <Route path ='/request' component={Request}/>
            <Route path='/signup' component={Signup}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/forgetpwd" component={Forgetpwd}/>
            <Route path="/admin_login" component={Admin}/>
            <Route path="/adminnav" component={Adminnavbar}/>
            <Route path="/all_users" component={Alluserapi}/>
            <Route path="/active_users" component={Activeuserapi}/>
            <Route path="/blocked_users" component={Blockuserapi}/>
            <Route path="/blocked/:id" component={Deactivateuser}/> 
            <Route path="/unblocked/:id" component={Reactivateuser}/>
            <Route path="/all_collections" component={Allcollectionapi}/>
            <Route path="/Donate_available_books" component={Availablebookfordonate}/>
            <Route path="/out_of_stock" component={Outofstockbook}/>
            <Route path="/book_order" component={Bookorder}/>
            <Route path="/book_request" component={Bookrequestapi}/>
            <Route path="/donate_book_request" component={Donatereqapi}/>
            <Route path="/all_subscribes" component={Subscriberlistapi}/>
        </BrowserRouter>
        
    )
}

export default Routing 