import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class NewUserPage {

    //incial
    clickRegistrar() {
        cy.get('.ihdmxA').click();
    }
    
    clickRegister() {
        cy.contains('Register').click();
    }

    clickConfirmNewUser() {
        cy.get('[value="Register"]').click();
    }

    fillFirstName(firstName: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.firstName"]').type(userData.firstName);
    }

    fillLastName(lastName: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.lastName"]').type(userData.lastName);
    }

    fillAddress(address: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.address.street"]').type(userData.streetAddress);
    }

    fillCity(city: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.address.city"]').type(userData.city);
    }

    fillState(state: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.address.state"]').type(userData.state);
    }

    fillZipCode(zipCode: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.address.zipCode"]').type(userData.zipCode);
    }

    fillPhoneNumber(phoneNumber: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.phoneNumber"]').type(userData.phoneNumber);
    }

    fillSSN(ssn: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.ssn"]').type(userData.ssn);
    }

    fillUsername(username: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.username"]').type(userData.username);
    }

    fillPassword(password: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.password"]').type(userData.password);
    }

    fillRepeatedPassword(repeatedPassword: string) {
        userData = generateNewCustomerData();
        cy.get('[name="repeatedPassword"]').type(userData.password); 
    }

    fillPasswordANDRepeatedPassword(password: string) {
        userData = generateNewCustomerData();
        cy.get('[name="customer.password"]').type(userData.password);
        cy.get('[name="repeatedPassword"]').type(userData.password);
    }

//   // 🚀 Método de alto nível
//   login(username: string, password: string) {
//     this.fillUsername(username);
//     this.fillPassword(password);
//     this.submit();
//   }
}
