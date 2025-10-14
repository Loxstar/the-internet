const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // implement node event listeners here
    baseurl: 'https://the-internet.herokuapp.com/',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 12000,
    ViewportWidth: 1440,
    ViewportHeight: 900,
    chromeWebSecurity: false,
    video: false,
    screenshotsFolder: ' tmp/screenshot', screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
  },
},
);
