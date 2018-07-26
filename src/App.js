import React, { Component } from 'react';
import './App.css';
import ControlledTabs from './ControlledTabs';
import logo from './logo-light.png'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class= "logo">
            <img src={logo} alt="logo"/>
        </div>
          <h1 className="App-title">[BETA] Corporate Dashboard</h1>
        </header>
        <ControlledTabs/>
      </div>
    );
  }
}

export default App;