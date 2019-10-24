import React from 'react'
import {NavLink} from 'react-router-dom';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Sider } = Layout;

const { SubMenu } = Menu;

function Navbar () {
    return (

<div className= "navbar">
  <Layout>
    <Header>

    <Menu 
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px',
               fontSize : '20px',
               backgroundColor: '#98FFE6', 
            }}
            
    
    // #98FFE6
    // #DAD3F4
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
        <NavLink to="/signup">Log Out</NavLink>
      </Menu.Item>
    
    </Menu>
    </Header>
  </Layout>
</div>
        
      
       )
};

  export default Navbar;
