'use strict'

require('./env')
const driver = require('./driver')
const tamarin = require('tamarin')
  .use(require('tamarin-dom-sleuth'))

module.exports = {
  World: class extends tamarin {
    constructor () {
      super(driver())
    }
  }
}
