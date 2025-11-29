import { LoginPage } from '../pages/LoginPage';
import users from '../support/users.json';

describe('Login', () => {

  const loginPage = new LoginPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cy.closeInitialMessage();
  });

  it('login sucess', () => {

    loginPage.clickMinhaConta()
    loginPage.fillEmail(users.validUser.email)
    loginPage.fillPassword(users.validUser.password)
    loginPage.clickProsseguir()
  });


});
