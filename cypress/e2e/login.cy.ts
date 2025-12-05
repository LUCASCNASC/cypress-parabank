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
    loginPage.validateLoginSuccess()
  });

  it('login email strong', () => {

    loginPage.clickMinhaConta()
    loginPage.fillEmail(users.invalidUser.email)
    loginPage.fillPassword(users.validUser.password)
    loginPage.clickProsseguir()
    loginPage.validateEmailStrong()
  });

  it('login password strong', () => {

    loginPage.clickMinhaConta()
    loginPage.fillEmail(users.validUser.email)
    loginPage.fillPassword(users.invalidUser.password)
    loginPage.clickProsseguir()
    loginPage.validatePasswordStrong()
  });

  it('login email and password strong', () => {

    loginPage.clickMinhaConta()
    loginPage.fillEmail(users.invalidUser.email)
    loginPage.fillPassword(users.invalidUser.password)
    loginPage.clickProsseguir()
    loginPage.validatePasswordStrong()
  });


});
