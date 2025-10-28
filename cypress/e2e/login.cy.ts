describe('Funcionalidade de Registro', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('login', function() {
        cy.visit('/')
        cy.get('#loginPanel [name="username"]').click();
        cy.get('#loginPanel [name="username"]').type('Lucascnasc');
        cy.get('#loginPanel [name="password"]').click();
        cy.get('#loginPanel [name="password"]').type('@Lcn123');
        cy.get('#loginPanel input.button').click();
        cy.contains('Accounts Overview').should('be.visible');
        cy.intercept('GET', '/parabank/services_proxy/bank/customers/**').as('api_login_user');
        cy.wait('@api_login_user', { timeout: 40000 });
    });
    
});

