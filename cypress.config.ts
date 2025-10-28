import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  // Configurações E2E
  e2e: {
    // 1. URL Base (Já definida)
    baseUrl: process.env.BASE_URL,

    // 2. Timeout Padrão (Já definido)
    defaultCommandTimeout: 30000, 
    
    // 3. Padrão de Arquivos de Teste (specPattern)
    // Garante que o Cypress encontre apenas arquivos .cy.ts na pasta e2e
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 

    // 4. Arquivo de Suporte (supportFile)
    // Onde comandos customizados e configurações de ambiente são carregados
    // O Cypress 10+ cria o arquivo support/e2e.ts por padrão
    supportFile: 'cypress/support/e2e.ts',

    // 5. Configuração do Browser (opcional)
    // Configura eventos Node (como plugins, tarefas)
    setupNodeEvents(on, config) {
      // Exemplo de configuração para carregar variáveis de ambiente externas:
      // const file = config.env.configFile || 'development';
      // return getConfigurationByFile(file); 
    },
  },

  // Configurações Globais (Afetam E2E e Component Testing)
  
  // 6. Resolução da Viewport
  // Define o tamanho padrão da janela do navegador (desktop padrão)
  viewportWidth: 1440,
  viewportHeight: 900,

  // 7. Configuração de Vídeos
  // Habilita/Desabilita a gravação de vídeos dos testes
  video: false, // Desabilitar por padrão para economizar espaço e tempo
  videoCompression: 32, // Nível de compressão do vídeo

  // 8. Configuração de Screenshots
  // Tira screenshots automaticamente quando um teste falha
  screenshotOnRunFailure: true,

  // 9. Configuração de Fixtures (Dados de Teste)
  // Onde o Cypress deve procurar por arquivos de fixtures (ex: dados.json)
  fixturesFolder: 'cypress/fixtures', 
});