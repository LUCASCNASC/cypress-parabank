import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';

describe('Funcionalidade de Registro', () => {

    let userData: CustomerData; 

    beforeEach(() => {
        userData = generateNewCustomerData();
        cy.visit('/');
    });

    it('Cadastrar novo usuário com sucesso', () => {
        cy.contains('Register').click();
        cy.get('[name="customer.firstName"]').type(userData.firstName);
        cy.get('[name="customer.lastName"]').type(userData.lastName);
        cy.get('[name="customer.address.street"]').type(userData.streetAddress);
        cy.get('[name="customer.address.city"]').type(userData.city);
        cy.get('[name="customer.address.state"]').type(userData.state);
        cy.get('[name="customer.address.zipCode"]').type(userData.zipCode);
        cy.get('[name="customer.phoneNumber"]').type(userData.phoneNumber);
        cy.get('[name="customer.ssn"]').type(userData.ssn);
        cy.get('[name="customer.username"]').type(userData.username);
        cy.get('[name="customer.password"]').type(userData.password);
        cy.get('[name="repeatedPassword"]').type(userData.password); // Confirmação de senha
        
        cy.get('[value="Register"]').click();

        cy.contains('Your account was created successfully. You are now logged in.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário sem preencher todos os campos obrigatórios', () => {
        cy.contains('Register').click();
        cy.get('[value="Register"]').click();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('First name is required.').should('be.visible');
        cy.contains('Last name is required').should('be.visible');
        cy.contains('Address is required').should('be.visible');
        cy.contains('City is required.').should('be.visible');
        cy.contains('State is required.').should('be.visible');
        cy.contains('Zip Code is required.').should('be.visible');
        cy.contains('Social Security Number is required.').should('be.visible');
        cy.contains('Username is required.').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });
});