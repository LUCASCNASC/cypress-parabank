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
    }

    validateLoginSuccess() {
        cy.get('.nome-usuario').should('be.visible')
    }

    validateEmailStrong() {
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.')
    }

    validatePasswordStrong() {
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.')
    }

    validateEmailEmpty() {
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.')
    }

    validatePasswordEmpty() {
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.')
    } 
}