export class LogoutPage {

    clickIconUser() {
        cy.get('.PqSF57').click()
        cy.contains('Sign out').should('be.visible')
    }

    clickSignout() {
        cy.contains('Sign out').click()
    }

    validateLogout() {
        cy.contains('Log in to your account').should('be.visible')
    }
}