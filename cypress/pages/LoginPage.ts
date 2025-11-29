export class LoginPage {

    clickMinhaConta() {
        cy.get('.acoes-conta > :nth-child(2) > .cor-secundaria').click()
    }

    fillEmail(email:string) {
        cy.get('.controls > [name="email"]').type(email)
    }

    fillPassword(password:string) {
        cy.get('.controls > [name="senha"]').type(password)
    }

    clickProsseguir() {
        cy.get('.controls > .botao').click()
        cy.get('.nome-usuario').should('be.visible')
    }

    
}