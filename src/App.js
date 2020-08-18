import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavbar from './MainNavbar/MainNavbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RoutesContainer from './RoutesContainer/RoutesContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coteries Lab React Challenge</h1>
      </header>
      <div className="jumbotron App-content">
        <Router>
          <MainNavbar></MainNavbar>
          <RoutesContainer></RoutesContainer>
        </Router>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
