import { LoginPage } from '../pages/LoginPage';

describe('Funcionalidade de Registro', () => {

  const loginPage = new LoginPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it.skip('login', () => {
    loginPage.fillUsername();
    loginPage.fillPassword();
    loginPage.clickLogin();
  });

});
