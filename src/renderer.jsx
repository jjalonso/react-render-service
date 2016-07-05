import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


function renderComponent(Component, reducers, context) {
  let response = {}
  let store = createStore(reducers, context, applyMiddleware(thunk))
  response.state = store.getState()
  response.markup = renderToString(
    {/*}<Provider store={store}>*/
      <Component />
    {/*}</Provider>*/}
  )
  return response

  // let response = {}
  // match({ routes, location: url }, (error, redirectLocation, renderProps) => {
  //   if (error) {
  //     response.code = 500
  //   } else if (redirectLocation) {
  //     res.redirect(302, redirectLocation.pathname + redirectLocation.search)
  //   } else if (renderProps) {
  //     let store = createStore(reducers, context, applyMiddleware(thunk))
  //     response.state = store.getState()
  //     response.code = 200
  //     response.markup = renderToString(
  //       <Provider store={store}>
  //         <RouterContext {...renderProps} />
  //       </Provider>
  //     )
  //   } else {
  //     response.code = 404
  //   }
  // })
  // return response
}


export default renderComponent
