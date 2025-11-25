/// <reference types="cypress" />

import users from '../support/users.json';


Cypress.Commands.add("login", () => {
  cy.get('.nav-link.desktop').click()
  cy.contains('Log in to your account').should('be.visible')
  cy.get('[name="email"]').type(users.email);
  cy.get('[name="password"]').type(users.password);
  cy.get('.Ipyboe').click();
  cy.contains('Projects').should('be.visible');
});

