'use strict'

const fs = require('fs')
const path = require('path')
const sanitize = require('sanitize-filename')

const automationPractice = require('./automation_practice')
const acitime = require('./acitime')
const googleSearch = require('./google_search')
const screenShotDir = 'screenshots'

function takeScreenshot (scenario, world) {
  world.getDriver()
    .then((driver) => driver.takeScreenshot())
    .then((data) => {
      let base64Data = data.replace(/^data:image\/pngbase64,/, '')
      try {
        fs.accessSync(screenShotDir)
      } catch (e) {
        fs.mkdirSync(screenShotDir)
      }
      fs.writeFile(path.join(screenShotDir, sanitize(`${scenario}_${Date.now()}.png`).replace(/ /g, '_')), base64Data, 'base64', (err) => {
        if (err) {
          console.log(err)
        }
      })
    })
}

Promise.all([

  googleSearch.test()
    .then(() =>
      console.log('\nGoogle search completed successfully'))
    .catch((err) => {
      console.error('\nGoogle search failed')
      takeScreenshot('google search', googleSearch.world)
      throw err
    }),

  acitime.test()
    .then(() =>
      console.log('\nAcitime completed successfully'))
    .catch((err) => {
      console.error('\nAcitime failed')
      takeScreenshot('acitime', acitime.world)
      throw err
    }),

  automationPractice.test()
    .then(() =>
      console.log('\nAutomation practice completed successfully'))
    .catch((err) => {
      console.error('\nAutomation practice failed')
      takeScreenshot('automation practice', automationPractice.world)
      throw err
    })

]).then(() => console.log('\nCompleted all tests ok'))
