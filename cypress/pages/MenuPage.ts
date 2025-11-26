export class MenuPage {

    clickProject() {
        cy.get('.mYdffk').click()
        cy.get('.uA6zAY').should('be.visible')
    }
}