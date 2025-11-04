import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';
import { NewUserPage } from '../pages/NewUserPage';

const newUserPage = new NewUserPage();

describe('Funcionalidade de Registro', () => {

    let userData: CustomerData; 

    beforeEach(() => {
        userData = generateNewCustomerData();
        cy.visit('/');
    });

    it('Cadastrar novo usuário com sucesso', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.fillCity(userData.city);
        newUserPage.fillState(userData.state);
        newUserPage.fillZipCode(userData.zipCode);
        newUserPage.fillPhoneNumber(userData.phoneNumber);
        newUserPage.fillSSN(userData.ssn);
        newUserPage.fillUsername(userData.username);
        cy.get('[name="customer.password"]').type(userData.password);
        cy.get('[name="repeatedPassword"]').type(userData.password);
        
        newUserPage.clickConfirmNewUser();

        cy.contains('Your account was created successfully. You are now logged in.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário sem preencher todos os campos obrigatórios', () => {
        newUserPage.clickRegister();
        newUserPage.clickConfirmNewUser();
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

    it('Tentar cadastrar novo usuário apenas com First Name', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
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

    it('Tentar cadastrar novo usuário apenas com First Name e Last Name', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('Address is required').should('be.visible');
        cy.contains('City is required.').should('be.visible');
        cy.contains('State is required.').should('be.visible');
        cy.contains('Zip Code is required.').should('be.visible');
        cy.contains('Social Security Number is required.').should('be.visible');
        cy.contains('Username is required.').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário apenas com First Name, Last Name e Address', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('City is required.').should('be.visible');
        cy.contains('State is required.').should('be.visible');
        cy.contains('Zip Code is required.').should('be.visible');
        cy.contains('Social Security Number is required.').should('be.visible');
        cy.contains('Username is required.').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário apenas com First Name, Last Name, Address e City', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.fillCity(userData.city);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('State is required.').should('be.visible');
        cy.contains('Zip Code is required.').should('be.visible');
        cy.contains('Social Security Number is required.').should('be.visible');
        cy.contains('Username is required.').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário apenas com First Name, Last Name, Address, City e State', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.fillCity(userData.city);
        newUserPage.fillState(userData.state);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('Zip Code is required.').should('be.visible');
        cy.contains('Social Security Number is required.').should('be.visible');
        cy.contains('Username is required.').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário apenas com First Name, Last Name, Address, City, State e Zip Code', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.fillCity(userData.city);
        newUserPage.fillState(userData.state);
        newUserPage.fillZipCode(userData.zipCode);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('Social Security Number is required.').should('be.visible');
        cy.contains('Username is required.').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário apenas com First Name, Last Name, Address, City, State, Zip Code e Phone Number', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.fillCity(userData.city);
        newUserPage.fillState(userData.state);
        newUserPage.fillZipCode(userData.zipCode);
        newUserPage.fillPhoneNumber(userData.phoneNumber);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('Social Security Number is required.').should('be.visible');
        cy.contains('Username is required.').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário apenas com First Name, Last Name, Address, City, State, Zip Code, Phone Number e Social Security Number', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.fillCity(userData.city);
        newUserPage.fillState(userData.state);
        newUserPage.fillZipCode(userData.zipCode);
        newUserPage.fillPhoneNumber(userData.phoneNumber);
        newUserPage.fillSSN(userData.ssn);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('Username is required.').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário apenas com First Name, Last Name, Address, City, State, Zip Code, Phone Number, Social Security Number e Username', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.fillCity(userData.city);
        newUserPage.fillState(userData.state);
        newUserPage.fillZipCode(userData.zipCode);
        newUserPage.fillPhoneNumber(userData.phoneNumber);
        newUserPage.fillSSN(userData.ssn);
        newUserPage.fillUsername(userData.username);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('Password is required.').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

    it('Tentar cadastrar novo usuário apenas com First Name, Last Name, Address, City, State, Zip Code, Phone Number, Social Security Number, Username e Password', () => {
        newUserPage.clickRegister();
        newUserPage.fillFirstName(userData.firstName);
        newUserPage.fillLastName(userData.lastName);
        newUserPage.fillAddress(userData.streetAddress);
        newUserPage.fillCity(userData.city);
        newUserPage.fillState(userData.state);
        newUserPage.fillZipCode(userData.zipCode);
        newUserPage.fillPhoneNumber(userData.phoneNumber);
        newUserPage.fillSSN(userData.ssn);
        newUserPage.fillUsername(userData.username);
        newUserPage.fillPassword(userData.password);
        newUserPage.clickConfirmNewUser();
        cy.contains('Signing up is easy!').should('be.visible');
        cy.contains('Password confirmation is required.').should('be.visible');
    });

   
});