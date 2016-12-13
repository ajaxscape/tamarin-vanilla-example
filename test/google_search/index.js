const World = require('../support/world').World
const world = new World()

const url = 'http://google.com'
const title = 'Google'
const searchTerm = 'Tamarin'
const linkText = 'Images'

const page = {
  'search': { css: '[title="Search"]' },
  'navLink': (linkText) => ({ xpath: `//*[@role="navigation"]//a[text()="${linkText}"]` }),
  'results': (type, searchTerm) => ({ css: `img[alt="${type} result for ${searchTerm}"]` })
}

module.exports = {
  test: () => world.visit(url)
    .then(() => world.waitForTitle(title))
    .then(() => world.sendKeys(page.search, searchTerm + '\n'))
    .then(() => world.click(page.navLink(linkText)))
    .then(() => world.waitFor(page.results('Image', searchTerm)))
    .catch((err) => { throw err })
    // finally
    .then(() => world.getDriver())
    .then((driver) => driver.quit())
}

