import React from "react";
import { Route, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./helpers/PrivateRoute";
import Passport from "./components/Passport";
import Navbar from "./components/Navbar";
// import RestoCard from "./components/RestoCard";

import "./App.css";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header" /> */}
      <Navbar />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Signup} />
      <PrivateRoute exact path="/passport" component={Passport} />
    </div>
  );
}

export default withRouter(App);
