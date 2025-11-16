import { ServicesPage } from '../pages/ServicesPage';

describe('Acessar Services', () => {

    const servicesPage = new ServicesPage(); // ✅ cria instância

    beforeEach(() => {
        cy.visit('/');
    });

    it('Acessar Services', function() {

        servicesPage.clickServices();
    });
    
});