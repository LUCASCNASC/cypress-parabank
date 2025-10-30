import users from '../fixtures/users.json';

describe('Acessar About Us', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Acessar About Us', function() {

        cy.get('a[href="about.htm"]').first().click()
        cy.contains('ParaSoft Demo Website').should('be.visible');
        
    });
    
});