// import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function renderer (compSrc, props) {

  const comp = React.createElement(component, props)
  // const html = renderToString(comp)
  const initialState = store.getState()
  res.send(renderFullPage(html, initialState))
}

export { renderer as default }
