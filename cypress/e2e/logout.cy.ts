import { LogoutPage } from '../pages/LogoutPage';

describe('Funcionalidade de Registro', () => {

  const logoutPage = new LogoutPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/')
    cy.login()
  });

  it('logout sucess', () => {

    logoutPage.clickIconUser()
    logoutPage.clickSignout()
    logoutPage.validateLogout()
  });
});
