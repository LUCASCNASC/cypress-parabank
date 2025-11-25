import { NewProjectPage } from '../pages/NewProjectPage';

describe('Funcionalidade de Registro', () => {

  const newProjectPage = new NewProjectPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/')
    cy.login()
  });

  it('create new project and delete', () => {

    newProjectPage.clickCreateNewProject()
  });
});