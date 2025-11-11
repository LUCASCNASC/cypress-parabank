import users from '../fixtures/users.json';

export class LogoutPage {

    fillUsername() {
        cy.get('#loginPanel [name="username"]').type((users.validUser.username));
    }

    fillPassword() {
        cy.get('#loginPanel [name="password"]').type((users.validUser.password));
    }

    clickLogin() {
        cy.get('#loginPanel input.button').click();
        cy.contains('Accounts Overview').should('be.visible');
    }
}