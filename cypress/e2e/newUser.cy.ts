import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';

describe('Funcionalidade de Registro', () => {

    let userData: CustomerData; 

    beforeEach(() => {
        // Gera um novo conjunto de dados ANTES de cada 'it'
        userData = generateNewCustomerData();
        cy.visit('/');
    });

    it('Deve ser possível cadastrar um novo usuário com dados aleatórios (Faker)', () => {
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
});