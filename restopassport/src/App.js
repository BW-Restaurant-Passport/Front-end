import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import RestoCard from "./components/RestoCard";
import PrivateRoute from "./helpers/PrivateRoute";
import Passport from "./components/Passport";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <PrivateRoute exact path="/restocard" component={RestoCard} /> 
        <Route
        exact path ="/login" component={Login} />
        <Route
        exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/passport" component={Passport} />
      </header>
    </div>
  );
}


export default withRouter(App);
