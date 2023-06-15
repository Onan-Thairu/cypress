const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "c6n358",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://todomvc-app-for-testing.surge.sh/'
  },
});
