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
import Alluser from '../component/Adminfolder/users/Alluser'
import Activeuser from '../component/Adminfolder/users/Activeuser'
import Blockuser from '../component/Adminfolder/users/Blockuser'
import Allcollections from '../component/Adminfolder/Collections/Allcollections'
import Outofstockbook from '../component/Adminfolder/Collections/Outofstockbooks'
import Bookorder from '../component/Adminfolder/Connectionwithuser/Bookorder'
import Bookrequest from '../component/Adminfolder/Connectionwithuser/Bookrequest'
import Donatebookrequest from '../component/Adminfolder/Connectionwithuser/Donatebookrequest'
import Subscriberlist  from '../component/Adminfolder/Connectionwithuser/Subscriberlist'
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
            <Route path="/all_users" component={Alluser}/>
            <Route path="/active_users" component={Activeuser}/>
            <Route path="/blocked_users" component={Blockuser}/>
            <Route path="/all_collections" component={Allcollections}/>
            <Route path="/out_of_stock" component={Outofstockbook}/>
            <Route path="/book_order" component={Bookorder}/>
            <Route path="/book_request" component={Bookrequest}/>
            <Route path="/donate_book_request" component={Donatebookrequest}/>
            <Route path="/all_subscribes" component={Subscriberlist}/>
        </BrowserRouter>
        
    )
}

export default Routing 