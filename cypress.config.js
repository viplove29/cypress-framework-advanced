const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    env: {
      username: "standard_user",
      password: "secret_sauce"
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },

  reporter: "node_modules/mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  }
});
