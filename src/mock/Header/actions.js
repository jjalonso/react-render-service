//
// Actions Types
//
const INCREMENT = 'INCREMENT';

//
//  Actions Creators
//
const actions = {
  incrementCounter: () => {
    return { type: INCREMENT };
  },
};

export { actions as default };
