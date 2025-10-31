import users from '../fixtures/users.json';

describe('Funcionalidade de Registro', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('login', function() {
        cy.visit('/')
        cy.get('#loginPanel [name="username"]').type((users.validUser.username));
        cy.get('#loginPanel [name="password"]').type((users.validUser.password));
        cy.get('#loginPanel input.button').click();
        cy.contains('Accounts Overview').should('be.visible');
        // cy.intercept('GET', '/parabank/services_proxy/bank/customers/**').as('api_login_user');
        // cy.wait('@api_login_user', { timeout: 40000 });
    });
    
});