const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
  projectId: 'a3b5tn',
  trashAssetsBeforeRuns: true,
  videoUploadOnPasses: false,
  videoCompression: 32,
  responseTimeout: 100000,
  viewportHeight: 900,
  viewportWidth: 1440,
  screenshotOnRunFailure: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './cypress/reports/mochawesome-report',
    reportPageTitle: 'Shan Test report',
    overwrite: false,
    charts: false,
    html: false,
    json: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      return require('./cypress/plugins/index.js')(on, config);
    },
    // baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/**/**.js',
  },
});
