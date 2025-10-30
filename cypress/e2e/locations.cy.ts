import users from '../fixtures/users.json';

describe('Acessar Locations', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Acessar Locations', function() {

        //problema para carregar o link via href
        cy.contains('a', 'Locations').click(); 
        cy.contains('Make manual regression testing faster, smarter, and more targeted').should('be.visible');
        
    });
    
});