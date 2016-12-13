const automationPractice = require('./automation_practice')
const acitime = require('./acitime')
const googleSearch = require('./google_search')

Promise.all([

  automationPractice.test()
    .then(() =>
      console.log('Automation practice completed successfully'))
    .catch((err) => {
      console.error('Automation practice failed')
      throw err
    }),

  acitime.test()
    .then(() =>
      console.log('Acitime completed successfully'))
    .catch((err) => {
      console.error('Acitime failed')
      throw err
    }),

  googleSearch.test()
    .then(() =>
      console.log('Google search completed successfully'))
    .catch((err) => {
      console.error('Google search failed')
      throw err
    })

]).then(() => console.log('Completed all tests ok'))
