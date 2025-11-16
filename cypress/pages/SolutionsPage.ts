import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class SolutionsPage {
    
    clickSolutions() {
        cy.contains('li.Solutions', 'Solutions').click()
        cy.contains('ParaSoft Demo Website').should('be.visible');
    }
}