import { NewProjectPage } from '../pages/NewProjectPage';
import { MenuPage } from '../pages/MenuPage';

describe('New Project', () => {

  const newProjectPage = new NewProjectPage(); // ✅ cria instância
  const menuPage = new MenuPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/')
    cy.login()
  });

  it('create new project and delete', () => {

    newProjectPage.clickCreateNewProject()
    newProjectPage.fillProjectName()
    newProjectPage.fillDescription()
    newProjectPage.clickCreateProject()
    newProjectPage.validateCreatedNewProject()
    menuPage.clickProject()
    newProjectPage.clickTresPontosProject()
    newProjectPage.clickRemove()
    //newProjectPage.clickDeleteProject()
    //newProjectPage.validateWithoutProject()
  });
});