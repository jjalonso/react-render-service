import assert from 'assert'

import renderComponent from '../src/renderer.jsx'
import resolveRoute from '../src/resolver.js'

import mockReducer from './mock/mockReducer.js'
import mockRoutes from './mock/mockRoutes.jsx'


describe('Resolver', function() {

  it('resolving "/" return code 200 and data is an object', function() {
    let resolved = resolveRoute('/', mockRoutes)
    assert.equal(resolved.code, 200)
    assert.equal(typeof resolved.data, 'object')
  })

  it('resolving "/this-doesnt-exist" return code 404', function() {
    let resolved = resolveRoute('/this-doesnt-exist', mockRoutes)
    assert.equal(resolved.code, 404)
  })

  it('resolving "/redirect-me" return code 302 and data is "/"', function() {
    let resolved = resolveRoute('/redirect-me', mockRoutes)
    assert.equal(resolved.code, 302)
    assert.equal(resolved.data, '/')
  })

});
