import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  projectId: "hnqg5e",

  e2e: {
    baseUrl: process.env.BASE_URL,
    defaultCommandTimeout: 20000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",

    // Desabilita bloqueios de CORS e restringe menos
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122 Safari/537.36",

    // Permite visitar sites externos sem bloquear frame/headers
    experimentalModifyObstructiveThirdPartyCode: true,

    // Aqui você pode registrar tasks, plugins etc
    setupNodeEvents(on, config) {
      console.log("🌱 Ambiente carregado:");
      console.log("BASE_URL:", config.env.BASE_URL ?? process.env.BASE_URL);

      // Retornar o config é importante
      return config;
    },
  },

  // Dimensões do browser
  viewportWidth: 1440,
  viewportHeight: 900,

  video: false,
  videoCompression: 32,

  screenshotOnRunFailure: true,
  fixturesFolder: "cypress/fixtures",
});
