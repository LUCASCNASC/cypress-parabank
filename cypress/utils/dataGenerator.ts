// cypress/utils/dataGenerator.ts
import { faker } from '@faker-js/faker';

// Definindo o tipo para os dados do cliente (melhor prática com TypeScript)
export type CustomerData = {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    ssn: string;
    username: string;
    password: string;
};

/**
 * Gera um objeto com dados aleatórios de um novo cliente.
 */
export function generateNewCustomerData(): CustomerData {
    const password = faker.internet.password({ length: 10, pattern: /[\w\d]/, prefix: '@Lcn' });

    return {
        // Dados Pessoais
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        
        // Endereço
        streetAddress: `${faker.location.streetAddress()}, ${faker.location.secondaryAddress()}`,
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }), // Ex: PR, SP, NY
        zipCode: faker.location.zipCode('#####'), // Ex: 44444
        
        // Contato/Segurança
        phoneNumber: faker.string.numeric(11), // Ex: 44988775566
        ssn: faker.string.numeric(3), // Social Security Number - simulando 3 dígitos
        // Opção 1: Geração totalmente aleatória (e a mais recomendada)
        username: faker.string.uuid().substring(0, 8),
        
        // Senha
        password: password,
    };
}