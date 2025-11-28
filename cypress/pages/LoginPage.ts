export class LoginPage {

    clickMinhaConta() {
        cy.get('.nav-link.desktop').click()
        cy.contains('Log in to your account').should('be.visible')
    }

    
}