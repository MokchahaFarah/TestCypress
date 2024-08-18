const { defineConfig } = require("cypress");
const setupNodeEvents = require("./cypress/plugins/index")

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1900,
    viewportHeight: 1200,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 40000,
    chromeWebSecurity: false,
    failOnStatusCode: false,
    experimentalMemoryManagement:true,
    env: {
      fixturesBaseDir:"test_data_files/",
      testEnv :"https://pharma-shop.tn/",
    },
    video: false,
    specPattern: "**/*.feature",
    setupNodeEvents,
    numTestsKeptInMemory: 0
  },
});
