import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

module.exports = {
  projectId: "hnqg5e",
  // ...rest of the Cypress project config
}

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    defaultCommandTimeout: 5000, 
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
    },
  },

  viewportWidth: 1440,
  viewportHeight: 900,
  video: false, // Desabilitar por padrão para economizar espaço e tempo
  videoCompression: 32, // Nível de compressão do vídeo
  screenshotOnRunFailure: true,
  fixturesFolder: 'cypress/fixtures', 
});