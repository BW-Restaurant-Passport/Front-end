import React from 'react'

//scaffolding for navbar component
//likely to refactored with antUI
//we need a new name for the project other than restaurant passport 


function Navbar () {
    return (
      <div>
        <nav>
          <div>
            <h1>Restaurant Passport</h1>
            <img src="#"/>
          </div>
          <div>
            <a>Home</a>
            <a>Login</a>   
            <a>Showcase</a>
            <a>Browse</a>
          </div>
        </nav>
      </div>
    )
  };

  export default Navbar;