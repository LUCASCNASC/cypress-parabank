import users from '../fixtures/users.json';

describe('Acessar Solutions', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Acessar Solutions', function() {

        cy.contains('li.Solutions', 'Solutions').click()
        cy.contains('ParaSoft Demo Website').should('be.visible');
        
    });
    
});