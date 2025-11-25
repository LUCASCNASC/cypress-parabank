import users from '../support/users.json';

export class LoginPage {

    clickLogin() {
        cy.get('.nav-link.desktop').click()
        cy.contains('Log in to your account').should('be.visible')
    }

    fillEmail(email: string) {
        cy.get('[name="email"]').type(email);
    }

    fillPassword(password: string) {
        cy.get('[name="password"]').type(password);
    }

    clickSignin() {
        cy.get('.Ipyboe').click();
    }

    validadeLogin() {
        // cy.intercept('POST','**/v1/projects/list*').as('projectsList');
        // cy.wait('@projectsList', { timeout: 40000 });
        cy.contains('Projects').should('be.visible');
    }

    validadeEmailStrong() {
        // cy.intercept('POST','**/v1/projects/list*').as('projectsList');
        // cy.wait('@projectsList', { timeout: 40000 });
        cy.contains('These credentials do not match our records.').should('be.visible');
    }

    validadePasswordStrong() {
        // cy.intercept('POST','**/v1/projects/list*').as('projectsList');
        // cy.wait('@projectsList', { timeout: 40000 });
        cy.contains('These credentials do not match our records.').should('be.visible');
    }
}