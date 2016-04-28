import assert from 'assert'

import renderComponent from '../src/renderer.jsx'
import resolveRoute from '../src/resolver.js'

import mockReducer from './mock/mockReducer.js'
import mockRoutes from './mock/mockRoutes.jsx'


describe('Renderer', function() {
  let resolved

  before(function() {
    resolved = resolveRoute('/', mockRoutes)
  });

  it('markup is a string and state is a Object definition', function () {
    // let renderProps = resolveRoute('/', mockRoutes).data
    let render = renderComponent(resolved.data, mockReducer, { name: 'React' })
    assert.equal(typeof render.markup, 'string')
    assert.equal(typeof render.state, 'object')
  });



});
