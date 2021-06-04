import React from 'react';
import {Link} from 'react-router-dom' ;
class Adminnavbar extends React.Component{
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
                    <li class="dropdown"><Link class="dropdown-toggle" data-toggle="dropdown" >Accounts <span class="caret"></span></Link>  
                        <ul class="dropdown-menu">
                        <li><Link to={'/all_users'}>All </Link> </li>
                            <li><Link to={'/blocked_users'}>Blocked</Link> </li>
                            <li><Link to={'/active_users'}>Active</Link> </li>
                        </ul> 
                    </li> 
                    <li class="dropdown">
                        <Link class="dropdown-toggle" data-toggle="dropdown" >Collections<span class="caret"></span></Link> 
                        <ul class="dropdown-menu">
                        <li><Link to={'/all_collections'}>Available Collections</Link> </li>
                        <li><Link to={'/out_of_stock'}>Out Of Stocks</Link> </li> 
                        </ul>
                    </li>
                        <li><Link to={'/all_subscribes'}> Book Ordere</Link> </li>
                        <li><Link to={'/all_subscribes'}>Subscribes List</Link> </li>
                        <li><Link to={'/all_subscribes'}>User Request </Link> </li>
                    </ul> 
                    </div> 
                    </div>
                </nav>
           
        </React.Fragment>
        )
    }
}


export default Adminnavbar;