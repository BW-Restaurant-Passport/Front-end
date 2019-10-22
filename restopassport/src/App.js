import React from 'react';

import { Route, withRouter } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";

import {Route} from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import Passport from "./components/Passport";
import Navbar from "./components/Navbar";
import RestoCard from "./components/RestoCard";

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route
        exact path ="/login" component={Login} />
        <Route
        exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/passport" component={Passport} />
        {/* <Counter /> */}
        <Navbar />
    </div>
  );
}


export default withRouter(App);
