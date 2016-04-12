import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


function renderComponent(Component, reducer, initialState) {
  console.log(Component, reducer, initialState)
  let store = createStore(reducer, initialState)
  let markup = renderToString(
    <Provider store={store}>
      <Component />
    </Provider>
  )
  return {
    markup,
    state: store.getState()
  }
}


export default renderComponent
