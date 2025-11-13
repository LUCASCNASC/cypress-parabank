import { AdminPagePage } from '../pages/AdminPagePage';

describe('Acessar Admin Page', () => {

    const adminPagePage = new AdminPagePage(); // ✅ cria instância

    beforeEach(() => {
        cy.visit('/');
    });

    it('Acessar Admin Page', function() {

        adminPagePage.clickAdminPage()
        
    });
    
});