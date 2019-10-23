import React from 'react'
import {Link} from 'react-router-dom';



function Navbar () {
    return (

<div className= "navbar">
  <Layout>
    <Header>

    <Menu 
      theme="light"
      mode="horizontal"
      style={{ lineHeight: '64px',
      'font-size' : '32px',
      
    }}
    >

      < Menu.Item >  
        <NavLink to="/">Restaurant Passport</NavLink>
      </Menu.Item>
    
      <Menu.Item >  
        <NavLink to="/signup">Sign Up</NavLink>
      </Menu.Item>
    
      <Menu.Item >  
        <NavLink to="/login">Login</NavLink>
      </Menu.Item>

      <Menu.Item >  
        <NavLink to="/restocard">Showcase</NavLink>
      </Menu.Item>
    
      <Menu.Item >  
        <NavLink to="/browse">Browse</NavLink>
      </Menu.Item>

      <Menu.Item>  
        <NavLink to="/passport">Passport</NavLink>
      </Menu.Item>
          
    </Menu>
    </Header>
  </Layout>
</div>
        
      
       )
};

  export default Navbar;
