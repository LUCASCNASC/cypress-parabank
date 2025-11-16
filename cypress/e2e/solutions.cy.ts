import { SolutionsPage } from '../pages/SolutionsPage';

describe('Acessar Solutions', () => {

    const solutionsPage = new SolutionsPage(); // ✅ cria instância

    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('Acessar Solutions', function() {

        solutionsPage.clickSolutions();
        
    });
    
});