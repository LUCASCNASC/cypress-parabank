import { LoginPage } from '../pages/LoginPage';
import users from '../support/users.json';

describe('Login', () => {

  const loginPage = new LoginPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it.only('login sucess', () => {

    
  });


});
