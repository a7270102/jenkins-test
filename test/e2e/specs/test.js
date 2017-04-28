// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
  },

  'client test': function (client) {

      client.expect.element('body').to.be.present.before(1000);
      // hello.vue load success
      client.expect.element('.hello').to.be.present
  },

  // input changed ,span.text will update
  'input setValue test' : function (browser) {
    browser
      .setValue('.hello input', 'test me')
      .assert.containsText('#sp', 'test me');
  },

  // get data success , li will appear
  'button click test' : function (browser) {
    browser
      .click('#btn')
      .pause(5000)
      .assert.elementPresent('.hello ul li')
      .end()
  }
}
