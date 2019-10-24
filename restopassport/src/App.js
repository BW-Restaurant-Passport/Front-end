import React from "react";
import { Route, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./helpers/PrivateRoute";
import Passport from "./components/Passport";
import Navbar from "./components/Navbar";
import RestoDetail from "./components/RestoDetail"

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <RestoDetail/>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      {/* <Route  path="/restodetail" component={RestoDetail}/> */}
      <PrivateRoute exact path="/passport" component={Passport} />
    </div>
  );
}

export default withRouter(App);
