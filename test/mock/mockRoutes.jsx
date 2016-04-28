import React from 'react'
import { Router, Route } from "react-router";

import MockComponent from './MockComponent.jsx'


export default (
  <Router>
    <Route path="/" component={MockComponent}/>
  </Router>
);
