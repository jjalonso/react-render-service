import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

class HeaderPresentation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1 onClick={this.props.onHeaderClick}>
          Header {this.props.counter}
        </h1>
      </div>
    );
  }
}

//
// Container Component
//
const Header = connect(
  state => ({ counter: state.headerReducer }),
  dispatch => ({ onHeaderClick: () => dispatch({ type: 'INCREMENT' }) })
)(HeaderPresentation);

export default Header;
