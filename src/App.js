import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import CovidQuiz from './components/CovidQuiz';
import AboutUs from './components/AboutUs';
import SelfDiagnosis from './components/SelfDiagnosis';

function App() {
  return (
    <Router>
      <div>
      <Link to="/home"><button>home</button></Link>
      <Link to="/aboutus"><button>about us</button></Link>
   

      </div> 
      <Route path="/" exact render={()=>{ 
        return(
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

          </header>
        </div> 
        )       
      }

    }>
    </Route>

    <Route path="home" exact render={()=> <Home></Home>}></Route>
    <Route path="aboutus" exact render={()=> <AboutUs></AboutUs>}></Route>

    </Router>

  );
}

export default App;
