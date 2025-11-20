import users from '../support/users.json';

export class LoginPage {

    fillEmail() {
        cy.get(':nth-child(1) > [name="email"]').type((users.email));
    }

    fillPassword() {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type((users.password));
    }

    clickAcessar() {
        cy.get('.otUnI').click();
        //cy.contains('Accounts Overview').should('be.visible');
    }
}