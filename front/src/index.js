import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/tailwind.css'
import Home from './pages/home/home';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Route path="/logo">
              <Home mainTheme="logo" />
          </Route>
          <Route path="/google">
              <Home mainTheme="google" />
          </Route>
          <Route exact path="/">
              <Redirect to="/logo"/>
          </Route>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
