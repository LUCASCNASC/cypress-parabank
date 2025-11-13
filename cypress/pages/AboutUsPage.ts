export class AboutUsPage {

    clickAboutUs() {
        cy.get('a[href="about.htm"]').first().click()
        cy.contains('ParaSoft Demo Website').should('be.visible');
    }
}