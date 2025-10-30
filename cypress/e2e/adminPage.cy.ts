import users from '../fixtures/users.json';

describe('Acessar Admin Page', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Acessar Admin Page', function() {

        cy.contains('a', 'Admin Page').click();
        cy.contains('Administration').should('be.visible');
        
    });
    
});