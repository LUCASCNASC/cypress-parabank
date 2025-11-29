import { faker } from '@faker-js/faker';
import { generateCPF } from '../support/generateCPF'
import { LoginPage } from '../pages/LoginPage';
import { NewRegisterPage } from '../pages/NewRegisterPage';

describe('New User', () => {

  const loginPage = new LoginPage(); // ✅ cria instância
  const newRegisterPage = new NewRegisterPage(); // ✅ cria instância

  const email = faker.internet.email();
  const password = faker.internet.password();
  const nomeCompleto = faker.person.fullName();
  const celular = faker.helpers.replaceSymbols('(44) 9####-####');
  const telefoneFixo = faker.helpers.replaceSymbols('(44) 3###-####');
  const data = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });
  const dataNascimento = data.toLocaleDateString('pt-BR')
  const cpf = generateCPF();
  

  beforeEach(() => {
    cy.visit('/');
    cy.closeInitialMessage();
  });

  it('Create new user - pessoa física', () => {

    loginPage.clickMinhaConta()
    newRegisterPage.fillEmail(email)
    newRegisterPage.clickCadastrar()
    newRegisterPage.fillConfirmEmail(email)
    newRegisterPage.fillPassword(password)
    newRegisterPage.fillConfirmPassword(password)
    newRegisterPage.fillNomeCompleto(nomeCompleto)
    newRegisterPage.fillCPF(cpf)
    newRegisterPage.fillCelular(celular)
    newRegisterPage.fillTelefoneFixo(telefoneFixo)
    newRegisterPage.selectSexoMasculino()
    newRegisterPage.fillDataNascimento(dataNascimento)

  });


});