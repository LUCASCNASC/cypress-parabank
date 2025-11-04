describe('Acessar Products', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('Acessar Products', function() {

        cy.contains('a', 'Products').click();
        cy.contains('ATM Services').should('be.visible');
    });
    
});