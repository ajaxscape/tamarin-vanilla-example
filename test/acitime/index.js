const World = require('../support/world').World
const world = new World()

const page = {
  'menu': (menuLinkText) => ({xpath: `//*[@id="navigation-list"]//a[text()="${menuLinkText}"]`}),
  'subMenu': (submenuLinkText) => ({xpath: `//*[@id="nav-features"]//a[text()="${submenuLinkText}"]`}),
  'heading': {css: 'h1'}
}

module.exports = {
  world,
  test: () => world.visit('https://www.actitime.com/')
    .then(() => world.waitForCookie('_ym_isad').should.eventually.have.property('value', '2'))
    .then(() => world.waitForCookie('_ym_uid'))
    .then(() => world.waitForTitle('actiTIME – Timesheet Software'))
    .then(() => world.whenExists(page.subMenu('Features in detailx')))
    .then(() => Promise.all([
      world.hover(page.menu('Features'), 500),
      world.click(page.subMenu('Features in detail'))
    ]))
    .then(() => world.waitForTitle('Time Tracking Software | actiTIME Features'))
    .then(() => world.getText(page.heading).should.eventually.equal('Features in Detail'))
    .then(() => world.waitForUrl().should.eventually.contain('features-in-detail.html'))
    .catch((err) => {
      throw err
    })
    // finally
    .then(() => world.getDriver())
    .then((driver) => driver.quit())
}

