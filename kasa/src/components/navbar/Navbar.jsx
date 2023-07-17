import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';


function Navbar() {
  
  return (
    <nav className="navbar">
    <div className="navbar__logo">
      <img src ="logo.png" alt="logo"/>
      </div>
    <NavLink to="/">
      <div>Acceuil</div>
   </NavLink>
    <NavLink to="/about">
      <div>A propos </div>
    </NavLink>
        
      
    </nav>
  );
}


export default Navbar;