import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import logo from "./logo.png";


function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src ={ logo } alt="logo kasa"/>
      </div>
      <NavLink to="/P6/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}


export default Navbar;
