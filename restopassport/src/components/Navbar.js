import React from 'react'

import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';



// const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function Navbar () {
  
  const onLogout = () => {
    localStorage.clear();
  };

  return (

  <div className= "navbar">
    <Layout className="logo">
      <Header>
      <div className='logo'>
        

      <Menu 
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px',
        fontSize : '20px',
        backgroundColor: '#44b39c',          
      }}
      defaultSelectedKeys={['1']}
      
      >

        < Menu.Item key="1">  
         <NavLink to="/">Restaurant Passport</NavLink>
        </Menu.Item>
    
        <Menu.Item >  
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>

       <Menu.Item >  
          <NavLink to="/restodetail">Showcase</NavLink>
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

      </div>
    </Header>
  </Layout>
</div>  
       )
};

// #components-layout-demo-top .logo {
//   width: 120px;
//   height: 31px;
//   background: rgba(255, 255, 255, 0.2);
//   margin: 16px 24px 16px 0;
//   float: left;
// }

  export default Navbar;
