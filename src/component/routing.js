import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import Footer from '../component/footer/footer'
import Navbar from './navbar/nav'
import Home from '../component/Home/home'
import sells from '../component/sellsbbook/sell'
import Booktype from '../component/booktype/booktype'
const Routing = () => {
    return(
       
            <BrowserRouter>
                <Navbar/>
               
                <Route exact path='/' component={Home}/>
                <Route  path ='/sells' component={sells}/> 
                <Route  path ='/booktype' component={Booktype}/>
                <Footer/>
    
            </BrowserRouter>
        
    )
}

export default Routing