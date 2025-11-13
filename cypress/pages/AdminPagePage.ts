export class AdminPagePage {
    
    clickAdminPage() {
        cy.contains('a', 'Admin Page').click();
        cy.contains('Administration').should('be.visible');
    }
}