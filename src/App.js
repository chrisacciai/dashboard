import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';

import LandingPage from './LandingPage';
import SignInPage from './SignInPage';
import HomePage from './HomePage';

import * as routes from './Routes';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
    </div>
  </Router>

export default App;