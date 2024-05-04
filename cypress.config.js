const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl:'https://rarocrud-frontend-88984f6e4454.herokuapp.com',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // implement node event listeners here
    },
  },
});
