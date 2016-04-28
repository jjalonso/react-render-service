import React from 'react'
import { Router, Route, Redirect } from "react-router";

import MockComponent from './MockComponent.jsx'


export default (
  <Router>
    <Route path="/" component={MockComponent}/>
    <Redirect from='/redirect-me' to='/' />
  </Router>
);
