import users from '../fixtures/users.json';
import { LocationsPage } from '../pages/LocationsPage';

describe('Acessar Locations', () => {

    const locationsPage = new LocationsPage(); // ✅ cria instância

    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('Acessar Locations', function() {

        locationsPage.clickLocations();
    });
    
});