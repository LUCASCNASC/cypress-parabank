import { LogoutPage } from '../pages/LogoutPage';

describe('Logout', () => {

  const logoutPage = new LogoutPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cy.closeInitialMessage();
    cy.login();
  });

  it('logout sucess', () => {

  });

});