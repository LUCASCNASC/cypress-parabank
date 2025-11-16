import { ProductsPage } from '../pages/ProductsPage';

describe('Acessar Products', () => {

    const productsPage = new ProductsPage(); // ✅ cria instância

    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('Acessar Products', function() {

        productsPage.clickProducts();
    });
    
});