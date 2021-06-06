import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserNavbar extends Component {
    render() {

        return(

<nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-end">
    {/* <a className="navbar-brand" href="#">TMS</a> */}
    <Link className="navbar-brand" to="/">
    
      <img 
        src="../images/logotms36.svg" 
        width="36" 
        height="36"
        // className="d-inline-block align-top"
        />
    
    </Link>
    <ul className="navbar-nav">
            <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <Link className="nav-link active" to="/">Mon profil</Link>
            </li>
            <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <Link className="nav-link active" to="/">Mes affaires</Link>
            </li>
            <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <Link className="nav-link active" to="/">Mes notifications</Link>
            </li>
        </ul>
    
    <button className="btn btn-info ml-auto mr-1"><i class="fa fa-fw fa-user"></i>user</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        
        
        <ul className="navbar-nav text-right">
            <li className="nav-item">
            
            <span class="glyphicon glyphicon-user"></span>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/home">Déconnexion</a>
            </li>
            
        </ul>
    </div>
</nav>


            
        )
    }

}

export default UserNavbar;