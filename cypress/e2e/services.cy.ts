describe('Acessar Services', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Acessar Services', function() {

        cy.get('a[href="services.htm"]').first().click()
        cy.contains('Available Bookstore SOAP services:').should('be.visible');
    });
    
});