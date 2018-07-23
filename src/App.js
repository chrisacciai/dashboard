import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ControlledTabs from './ControlledTabs';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigation';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">[BETA] Dash</h1>
        </header>
        <ControlledTabs/>
      </div>
    );
  }
}

export default App;