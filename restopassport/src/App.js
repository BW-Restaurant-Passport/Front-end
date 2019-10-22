import React from 'react';
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Route} from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import Passport from "./components/Passport";

// import Counter from "./components/Counter";

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
      </header>
    </div>
  );
}

export default App;
