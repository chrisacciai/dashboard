import React from 'react';
import ControlledTabs from './ControlledTabs';
import logo from './logo';

const HomePage = () =>
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">[BETA] Dash</h1>
        </header>
        <ControlledTabs/>
    </div>

export default LandingPage;
