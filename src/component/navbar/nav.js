import React from 'react';
import '../navbar/nav.css';
import {Link} from 'react-router-dom' ;
// import '../navbar/navv.js';
// import  $ from 'jquery';
class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand active" href="#">Book House</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/sells"> Sells Book </Link></li>
                        <li><Link to="/booktype"> Book Type</Link> </li>
                        <li><Link to="/donatebooks">Donate Books</Link></li>
                        {/* //after login// */}
                        <li><Link to="/my_card"> MY Cart books</Link></li>
                        <li><Link to="/my_sells_books"> MY Books</Link></li>
                        <li><a href="#">Hi username</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link to="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        {/* //after login// */}
                        <li><a href="#"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </ul>
                    </div>
                    </div>
                </nav>
           
        </React.Fragment>
        )
    }
}


export default Navbar;