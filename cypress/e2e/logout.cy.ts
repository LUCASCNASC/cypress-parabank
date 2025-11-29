import { LogoutPage } from '../pages/LogoutPage';
import users from '../support/users.json';

describe('Logout', () => {

  const logoutPage = new LogoutPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cy.closeInitialMessage();
    cy.login();
  });

  it('logout sucess', () => {

    logoutPage.clickSair()
  });


});
