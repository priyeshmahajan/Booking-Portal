import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import {NavLink } from "react-router-dom";
 const Navbar = () => {
   
    
         return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                 <div className="home">
        <NavLink activeClassName="active" exact to="/">HOME</NavLink>
        </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <div class="d-grid gap-4 d-md-flex">
                        <li className="nav-item"><NavLink activeClassName="navlink"  exact to="/signup">Sign Up</NavLink></li>
                        
                        <li className="nav-item"><NavLink activeClassName="navlink"  exact to="/login">  Log In</NavLink></li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav> 


            
        </div>
    )
}

export default Navbar
