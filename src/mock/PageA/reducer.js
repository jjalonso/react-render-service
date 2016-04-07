import { combineReducers } from 'redux';

import headerReducer from '../Header/reducer';

let reducer = combineReducers({
  headerReducer,
});

export default reducer
