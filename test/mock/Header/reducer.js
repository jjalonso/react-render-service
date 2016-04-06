//
//  Reducer
//
function reducer(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  default:
    return state;
  }
}

export { reducer as default };
