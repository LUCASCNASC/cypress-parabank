export class LogoutPage {

    clickLogout() {
        cy.get('a[href="logout.htm"]').click();
        cy.contains('Customer Login').should('be.visible');
    }
}