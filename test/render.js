import assert from 'assert'

import renderComponent from '../src/renderer.jsx'
import resolveRoute from '../src/resolver.js'

import mockReducer from './mock/mockReducer.js'
import mockRoutes from './mock/mockRoutes.jsx'


describe('Renderer', function() {
  let renderProps

  it('(resolveRoute) resolve a url return code 200 and and get render props', function() {
    let resolved = resolveRoute('/', mockRoutes)
    assert.equal(resolved.code, 200)
    assert.equal(typeof resolved.data, 'object')
  })

  it('(renderComponent) markup is a string and state is a Object definition', function () {
    let renderProps = resolveRoute('/', mockRoutes).data
    let render = renderComponent(renderProps, mockReducer, { name: 'React' })
    assert.equal(typeof render.markup, 'string')
    assert.equal(typeof render.state, 'object')
  });

});
