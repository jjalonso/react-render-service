import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


function renderComponent(Component, reducer, initialState) {
  console.log(Component, reducer, initialState)
  let store = createStore(reducer, initialState)
  let html = renderToString(
    <Provider store={store}>
      <Component />
    </Provider>
  )
  return {
    html: html,
    state: store.getState()
  }
}


export { renderComponent as default }
