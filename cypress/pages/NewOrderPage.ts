export class NewOrderPage {

    clickSair() {
        cy.get(':nth-child(8) > a').click()
        cy.get('.bem-vindo').should('be.visible')
    }
}