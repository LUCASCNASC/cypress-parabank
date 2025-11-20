/// <reference types="cypress" />

import users from '../support/users.json';


Cypress.Commands.add("newUser", () => {
  cy.get('.ihdmxA').click();
  cy.wait(1000);
  //cy.get('input[name="email"]').type(users.email);
  cy.get('[name="name"]').type(users.nome);
  cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type(users.password);
  cy.get('[name="passwordConfirmation"]').type(users.password);
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click();
});

