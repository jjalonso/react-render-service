import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let PageA = require('../test/mock/PageA/PageA.jsx').default
// import PageA from '../test/mock/PageA/PageA.jsx'
// import reducer from '../test/mock/PageA/reducer.js'



function renderer (compPath, reducerPath) {
  console.log(PageA)
  return
  let store = createStore(reducer)
  let html = renderToString(
    <Provider store={store}>
      <PageA />
    </Provider>
  )
  return { html: html, state: store.getState() }
}


export { renderer as default }
