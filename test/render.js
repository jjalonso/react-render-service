import assert from 'assert'

import renderComponent from '../src/renderer.jsx'
import MockComponent from './mock/MockComponent.jsx'
import mockReducer from './mock/mockReducer.js'


describe('Renderer', function() {
  // let routes = 

  it('(renderComponent) markup is a string and state is a Object definition', function () {
    let render = renderComponent(MockComponent, mockReducer, { name: 'React' })
    console.log(render)
    assert.equal(typeof render.markup, 'string')
    assert.equal(typeof render.state, 'object')
  });

});
