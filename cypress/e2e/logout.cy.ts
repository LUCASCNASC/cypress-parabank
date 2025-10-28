import users from '../fixtures/users.json';

describe('Funcionalidade de Registro', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('login', function() {
        
        cy.visit('/')
        cy.get('#loginPanel [name="username"]').type((users.validUser.username));
        cy.get('#loginPanel [name="password"]').type((users.validUser.password));
        cy.get('#loginPanel input.button').click();
        cy.contains('Accounts Overview').should('be.visible');
        cy.get('a[href="logout.htm"]').click();
        cy.contains('Customer Login').should('be.visible');
    });
    
});