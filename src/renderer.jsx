import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


function renderComponent(url, routes, reducers, context) {
  let response = {}
  console.log(context)
  match({ routes, location: url }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.code = 500
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let store = createStore(reducers, context)
      response.state = store.getState()
      response.code = 200
      response.markup = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
    } else {
      response.code = 404
    }
  })
  return response



  // let store = createStore(reducer, initialState)
  // let markup = renderToString(
  //   <Provider store={store}>
  //     <Component />
  //   </Provider>
  // )
  // return {
  //   markup,
  //   state: store.getState()
  // }
}


export default renderComponent
