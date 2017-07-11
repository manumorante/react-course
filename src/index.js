// Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// Routes
import AppRoutes from './routes';

// Assets
import 'bootstrap/dist/css/bootstrap.css';

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
);
