const automationPractice = require('./automation_practice')

automationPractice.test()
  .then(() => console.log('Completed all tests ok'))
  .catch(() => console.error('Some tests failed'))
