import assert from 'assert'

import renderComponent from '../src/renderer.jsx'
import MockComponent from './mock/MockComponent.jsx'
import mockReducer from './mock/mockReducer.js'

console.log('XXX', mockReducer)

// let assert = require('assert');

describe('Renderer', function() {

  // before(function() {
  //   // runs before all tests in this block
  //   // renderer = require('../src/renderer.jsx')
  //   // MockComponent = require('./mock/MockComponent.jsx')
  //   // mockReducer = require('./mock/mockReducer.js')
  // });

  it('(renderComponent) markup is a string and state is a Object definition', function () {
    let render = renderComponent(MockComponent, mockReducer, { name: 'React' })
    assert.equal(typeof render.markup, 'string')
    assert.equal(typeof render.state, 'object')
  });

});
