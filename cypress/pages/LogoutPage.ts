export class LogoutPage {

    //clicar no botão Sair, para fazer logout
    clickSair() {
        cy.get(':nth-child(8) > a').click()
        cy.get('.bem-vindo').should('be.visible')
    }
}