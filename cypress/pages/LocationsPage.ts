import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class LocationsPage {
    
    clickLocations() {
        //problema para carregar o link via href
        cy.contains('a', 'Locations').click(); 
        //cy.contains('Make manual regression testing faster, smarter, and more targeted').should('be.visible');
    }
}