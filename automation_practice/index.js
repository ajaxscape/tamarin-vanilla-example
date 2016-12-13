const World = require('../support/world').World
const world = new World()
const homePage = require('./pages/home')(world)
const authenticationPage = require('./pages/authentication')(world)
const findText = (text) => ({xpath: `//*[text()="${text}"]`})

module.exports = {
  test: () => world.visit(homePage.url)
    .then(() => world.waitFor(homePage.productContainer))
    .then(() => world.select(homePage.productList, homePage.productContainer.css).should.eventually.have.lengthOf(7))
    .then(() => world.click(homePage.masthead.signIn))
    .then(() => authenticationPage.signInTestUser())
    .then(() => world.waitFor(findText('Authentication failed.')))
    .catch((err) => { throw err })
    // finally
    .then(() => world.getDriver())
    .then((driver) => driver.quit())
}
