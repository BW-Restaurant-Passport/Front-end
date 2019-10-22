import React from 'react';

import { Route, withRouter } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import RestoCard from "./components/RestoCard";

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Navbar />
        <Login />
        <Signup />
        <Route 
         render={props => protectedRoute(RestoCard, props)}
         />
        {/* <RestoCard /> */}
      </header>
    </div>
  );
}

function protectedRoute(Component, props) {
  // Not really secure. Any token would pass the test.
  if (localStorage.getItem('token')) {
    return <Component {...props} />;
  }
  return 'error';
}

export default withRouter(App);
