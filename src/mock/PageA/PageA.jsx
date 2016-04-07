import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from '../Header/Header';
import reducer from './reducer';


class PageA extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header/>
        <h2>Page A</h2>
        <a href="/b">Go to Page B</a>
      </div>
    );
  }
}

export default PageA
