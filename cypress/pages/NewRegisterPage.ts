import { generateNewCustomerData, CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class NewRegisterPage {

    clickCadastrar() {
        cy.get('fieldset > div > .botao').click()
    }

    fillEmail(email:string) {
        cy.get('fieldset > div > [name="email"]').type(email)
    }

    fillConfirmEmail(email:string) {
        cy.get('[name="confirmacao_email"]').type(email)
    }

    fillPassword(password:string) {
        cy.get(':nth-child(1) > [name="senha"]').type(password)
    }

    fillConfirmPassword(password:string) {
        cy.get('[name="confirmacao_senha"]').type(password)
    }

    fillNomeCompleto(nomeCompleto:string) {
        cy.get('[name="nome"]').type(nomeCompleto)
    }

    fillCPF(cpf:string) {
        cy.get('[name="cpf"]').type(cpf)
    }

    fillCelular(celular:string) {
        cy.get('[name="telefone_celular"]').type(celular)
    }

    fillTelefoneFixo(telefoneFixo:string) {
        cy.get('[name="telefone_principal"]').type(telefoneFixo)
    }

    selectSexoMasculino() {
        cy.get('#id_sexo').select('Masculino');
    }

    selectSexoFeminino() {
        cy.get('#id_sexo').select('Feminino');
    }

    fillDataNascimento(dataNascimento:string) {
        cy.get('[name="data_nascimento"]').type(dataNascimento)
    }
    
    
}
