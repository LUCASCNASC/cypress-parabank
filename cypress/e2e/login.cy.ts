import { LoginPage } from '../pages/LoginPage';
import users from '../support/users.json';

describe('Funcionalidade de Registro', () => {

  const loginPage = new LoginPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('login', () => {
    
    cy.get('.ihdmxA').click();
    cy.wait(2000);
    cy.contains('E-mail')
    // cy.contains('label', 'E-mail').type(users.email);
    // cy.get('[name="name"]').type(users.nome);
    // cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type(users.password);
    // cy.get('[name="passwordConfirmation"]').type(users.password);
    cy.get('button[type="submit"]').click();


    //cy.newUser()

    // loginPage.fillEmail();
    // loginPage.fillPassword();
    // loginPage.clickAcessar();
    
  });

});
