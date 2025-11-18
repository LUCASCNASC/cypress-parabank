import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

describe('Funcionalidade de Registro', () => {

    // const loginPage = new LoginPage(); // ✅ cria instância
    // const logoutPage = new LogoutPage(); // ✅ cria instância

    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('login', function() {
        
        // cy.visit('/')
        // loginPage.fillUsername();
        // loginPage.fillPassword();
        // loginPage.clickLogin();
        // logoutPage.clickLogout()
    });
    
});