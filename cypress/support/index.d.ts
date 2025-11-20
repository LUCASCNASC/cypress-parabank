declare namespace Cypress {
  interface Chainable {
    /**
     * Comando customizado para realizar login
     */
    newUser(): Chainable<void>;
  }
}
