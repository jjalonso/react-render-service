import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import requireDir from 'require-dir'

function renderer (compPath, reducerPath) {
  let Component = require(compPath).default
  let reducer = require(reducerPath).default
  let store = createStore(reducer)
  let html = renderToString(
    <Provider store={store}>
      <Component />
    </Provider>
  )
  return { html: html, state: store.getState() }
}


export { renderer as default }
