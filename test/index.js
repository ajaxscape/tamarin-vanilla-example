const automationPractice = require('./automation_practice')
const acitime = require('./acitime')
const googleSearch = require('./google_search')

Promise.all([

  googleSearch.test()
    .then(() =>
      console.log('\nGoogle search completed successfully'))
    .catch((err) => {
      console.error('\nGoogle search failed')
      throw err
    }),

  acitime.test()
    .then(() =>
      console.log('\nAcitime completed successfully'))
    .catch((err) => {
      console.error('\nAcitime failed')
      throw err
    }),

  automationPractice.test()
    .then(() =>
      console.log('\nAutomation practice completed successfully'))
    .catch((err) => {
      console.error('\nAutomation practice failed')
      throw err
    })

]).then(() => console.log('\nCompleted all tests ok'))
