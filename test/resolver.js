import assert from 'assert'

import renderComponent from '../src/renderer.jsx'
import resolveRoute from '../src/resolver.js'

import mockReducer from './mock/mockReducer.js'
import mockRoutes from './mock/mockRoutes.jsx'


describe('Resolver', function() {

  it('resolve a url return code 200 and and get render props', function() {
    let resolved = resolveRoute('/', mockRoutes)
    assert.equal(resolved.code, 200)
    assert.equal(typeof resolved.data, 'object')
  })

  it('resolve a non-existent url return code 404', function() {
    let resolved = resolveRoute('/something-really-weird-like-bob', mockRoutes)
    assert.equal(resolved.code, 404)
  })

});
