import { LoginPage } from '../pages/LoginPage';
import users from '../support/users.json';

describe('Funcionalidade de Registro', () => {

  const loginPage = new LoginPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('login', () => {
    
    //cy.get('.ico-login').click()
    
    
  });

});
