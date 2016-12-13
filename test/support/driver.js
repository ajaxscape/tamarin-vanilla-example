'use strict'

const webDriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const service = new chrome.ServiceBuilder(require('chromedriver').path).build()
chrome.setDefaultService(service)

module.exports = function () {
  return new webDriver.Builder()
    .withCapabilities(webDriver.Capabilities.chrome())
    .build()
}
