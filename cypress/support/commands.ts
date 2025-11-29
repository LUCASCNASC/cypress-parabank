/// <reference types="cypress" />

import users from '../support/users.json';

Cypress.Commands.add("login", () => {
  cy.get('.acoes-conta > :nth-child(2) > .cor-secundaria').click()
  cy.get('.controls > [name="email"]').type(users.validUser.email)
  cy.get('.controls > [name="senha"]').type(users.validUser.password)
  cy.get('.controls > .botao').click()
  cy.get('.nome-usuario').should('be.visible')
});

Cypress.Commands.add("closeInitialMessage", () => {
  cy.get('.fancybox-skin', { timeout: 13000 }) // espera até 10s aparecer
      .should('be.visible')                      // garante que está visível
      .within(() => {
        cy.get('.fancybox-close').click();       // clica no botão de fechar
      });
});

