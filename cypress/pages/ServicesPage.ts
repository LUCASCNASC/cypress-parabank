import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class ServicesPage {
    
    clickServices() {
        cy.get('a[href="services.htm"]').first().click()
        cy.contains('Available Bookstore SOAP services:').should('be.visible');
    }
}