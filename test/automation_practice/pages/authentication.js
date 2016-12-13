'use strict'

const { host, baseUrl, testUser } = require('../config')
const url = `${host + baseUrl}?controller=athentication`

module.exports = function (world) {
  const page = {
    url,
    title: 'Login - My Store',
    email: { id: 'email' },
    password: { id: 'passwd' },
    login: { id: 'SubmitLogin' },
    signIn,
    signInTestUser
  }

  function signIn ({ email, password }) {
    return world.waitForTitle(page.title)
      .then(() => Promise.all([
        world.sendKeys(page.email, email),
        world.sendKeys(page.password, password)
      ]))
      .then(() => world.click(page.login, 50))
  }

  function signInTestUser () {
    return signIn(testUser)
  }

  return page
}
