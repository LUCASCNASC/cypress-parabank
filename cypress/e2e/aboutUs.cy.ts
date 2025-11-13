import { AboutUsPage } from '../pages/AboutUsPage';

describe('Acessar About Us', () => {

    const aboutUsPage = new AboutUsPage(); // ✅ cria instância

    beforeEach(() => {
        cy.visit('/');
    });

    it('Acessar About Us', function() {

        aboutUsPage.clickAboutUs()
    });
    
});