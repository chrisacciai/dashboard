import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from './Routes.js';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
    </ul>
  </div>

export default Navigation;