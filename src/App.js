import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;

import Signup from './components/signup';
import ErrorPage from './components/errorPage';
import ForgetPassword from './components/forgetPassword';
//import Navbar from "./components/navbar";
// import BootstrapNavbar from './bootstr'
import Login from "./components/login"
import Landing from "./components/landing";
import Footer from "./components/footer";
//import Welcome from "./components/welcome";
import Loader from "./components/loader";
import './App.css';
import {IconContext} from 'react-icons'
import Header from './components/header';

// import Axios from 'axios';

function App() {

  
  return (
        
    <>
       <Header />
       {/* <Landing /> */}
       {/* <Footer /> */}
    </>

  );
}

export default App;
