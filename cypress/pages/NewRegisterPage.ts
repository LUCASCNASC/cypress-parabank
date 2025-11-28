import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class NewProjectPage {

    clickCreateNewProject() {
        cy.contains('Create new project').click();
    }
    
    fillProjectName() {
        cy.get('#project-name').type('First Project');
    }

    fillDescription() {
        cy.get('#description-area').type('Esta é a descrição de um novo projeto.');
    }

    clickCreateProject() {
        cy.contains('button', 'Create project').click();
    }

    validateCreatedNewProject() {
        cy.get('#create-case-button').should('be.visible')
    }

    clickTresPontosProject() {
        cy.get('svg[data-icon="ellipsis-vertical"]').click()
    }

    clickRemove() {
        cy.get('[data-testid="remove"]').click()
        cy.get('.VNd5UT').should('be.visible')
    }

    clickDeleteProject() {
        cy.get('span.qc0jO1').click({ force: true });
    }

    validateWithoutProject() {
        cy.get('Looks like you don’t have any projects yet.').should('be.visible')
    }
}
