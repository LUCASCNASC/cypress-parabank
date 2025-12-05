import { CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class NewRegisterPage {

    clickCadastrar() {
        cy.get('fieldset > div > .botao').click()
    }

    clickCriarConta() {
        cy.get('.span3 > .principal').click()
        cy.get('.alert').should('be.visible')
        cy.contains('Cliente criado com sucesso.').should('be.visible')
    }

    fillEmail(email:string) {
        cy.get('fieldset > div > [name="email"]').type(email)
    }

    fillConfirmEmail() {
        cy.get('.controls > [name="email"]')
            .invoke('val')
            .then((email) => {
                if (typeof email === 'string') {
                    cy.get('[name="confirmacao_email"]').clear().type(email);
                }
            });
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

    fillCEP(cep:string) {
        cy.get('[name="cep"]').type(cep)
    }

    fillNumeroResidencia(numeroResidencia:string) {
        cy.get('[name="numero"]').type(numeroResidencia)
    }

    fillComplemento() {
        cy.get('[name="complemento"]').type('Complemento Teste')
    }

    fillReferencia() {
        cy.get('[name="referencia"]').type('Referencia Teste')
    }  
}
