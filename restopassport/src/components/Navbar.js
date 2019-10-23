import React from 'react'
import {Link} from 'react-router-dom';

//scaffolding for navbar component
//likely to refactored with antUI
//we need a new name for the project other than restaurant passport 


function Navbar () {
    return (
      <div>
        <nav>
          <div>
            <h1>Restaurant Passport</h1>
            <img src="#" alt="."/>
          </div>
          <div>
            <Link to="/">Home </Link>
            <Link to="/login" >Login</Link>   
            <Link to="">Showcase</Link>
            <Link to="">Browse</Link>
          </div>
        </nav>
      </div>
    )
  };

  export default Navbar;