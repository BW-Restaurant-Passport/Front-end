import React from 'react';
import { NavLink } from 'react-router-dom';

//scaffolding for navbar component
//likely to refactored with antUI
//we need a new name for the project other than restaurant passport 


function Navbar () {
    return (
      <div className= "navbar">
        <NavLink to="/">Restaurant Passport</NavLink>
        <div className="navbar-list">
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>

          <NavLink to="/showcase">Showcase</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/passport">Passport</NavLink>
        </div>
      </div>
      )
  };

  export default Navbar;