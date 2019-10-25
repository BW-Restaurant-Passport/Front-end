import React from "react";
import { Route, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./helpers/PrivateRoute";
import Passport from "./components/Passport";
import Navbar from "./components/Navbar";
import RestoDetail from "./components/RestoDetail"

import { Typography } from 'antd';
import { Layout } from 'antd';

import "./App.css";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (

<div className="App">

 {/* <RestoDetail/> */}
<Layout>
  
  <Header>
    <Navbar />
  </Header>

<Layout>

  <Content>
    
    <Route exact path="/" component={Signup} />
    
    <Route exact path="/login" component={Login} />
    {/* <Route exact path="/restodetail" component={RestoDetail} /> */}

    <Route  path="/restodetail" component={RestoDetail}/>
    <PrivateRoute exact path="/passport" component={Passport} />
  
  </Content>

</Layout>

</Layout>
  </div>

  );
}

export default withRouter(App);

