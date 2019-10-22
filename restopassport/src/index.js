import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import * as reducers from "./state/reducers";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import {BrowserRouter as Router } from "react-router-dom";

// const monsterReducer = combineReducers({
//   // the key is the real name for the slice
//   // count: reducers.countReducer,
//   userDetails: reducers.userReducer
// });

// const store = createStore(
//   monsterReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { combineReducers, createStore, compose,applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import * as reducers from './state/reducers';

// import App from './App';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

const monsterReducer = combineReducers( {
    city: reducers.cityReducer,
    // userDetails: reducers.userReducer
})

const store = createStore ( 
    monsterReducer, 
    {}, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
