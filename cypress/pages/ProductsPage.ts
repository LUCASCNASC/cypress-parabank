import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class ProductsPage {
    
    clickProducts() {
        cy.contains('a', 'Products').click();
        cy.contains('ATM Services').should('be.visible');
    }
}