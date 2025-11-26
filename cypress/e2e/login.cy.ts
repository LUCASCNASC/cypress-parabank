import { LoginPage } from '../pages/LoginPage';
import users from '../support/users.json';

describe('Login', () => {

  const loginPage = new LoginPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('login sucess', () => {

    loginPage.clickLogin()
    loginPage.fillEmail(users.email)
    loginPage.fillPassword(users.password)
    loginPage.clickSignin()
    loginPage.validadeLogin()
  });

  it('login email strong', () => {
    
    loginPage.clickLogin()
    loginPage.fillEmail(users.email_strong)
    loginPage.fillPassword(users.password)
    loginPage.clickSignin()
    loginPage.validadeEmailStrong()
  });

  it('login password strong', () => {
    
    loginPage.clickLogin()
    loginPage.fillEmail(users.email)
    loginPage.fillPassword(users.password_strong)
    loginPage.clickSignin()
    loginPage.validadePasswordStrong()
  });

});
