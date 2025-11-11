import { LoginPage } from '../pages/LoginPage';

describe('Funcionalidade de Registro', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('login', function() {
        
        LoginPage.fillUsername()
        LoginPage.fillPassword()
        LoginPage.clickLogin()
    });
    
});