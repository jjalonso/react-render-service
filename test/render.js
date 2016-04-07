'use strict'

import assert from 'assert'
// let assert = require('assert');

describe('Renderer', function() {
  let renderer
  let MockComponent
  let mockReducer

  before(function() {
    // runs before all tests in this block
    renderer = require('../src/renderer.jsx').default
    MockComponent = require('./mock/MockComponent.jsx').default
    mockReducer = require('./mock/mockReducer.js').default
  });

  it('(renderer) html is a string and state is a Object definition', function () {
    let render = renderer(
      '../test/mock/MockComponent.jsx',
      '../test/mock/mockReducer.js'
    )
    assert.equal(typeof render.html, 'string')
    assert.equal(typeof render.state, 'object')
  });

});
