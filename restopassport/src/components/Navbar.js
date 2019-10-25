import React from 'react'
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function Navbar () {
  
  const onLogout = () => {
    localStorage.clear();
  };

  return (

  <div className= "navbar">
    <Layout>
      <Header>

      <Menu 
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px',
                fontSize : '20px',
                backgroundColor: '#44b39c',          
              }}
      >

        < Menu.Item >  
         <NavLink to="/">Restaurant Passport</NavLink>
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
          
        <Menu.Item >  
          <NavLink onClick={onLogout} to="/login">Log Out</NavLink>
        </Menu.Item>
    
    </Menu>

    </Header>
  </Layout>
</div>  
       )
};

  export default Navbar;
