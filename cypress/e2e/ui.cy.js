import LoginPage from '../pages/LoginPage';

describe('POM Login Test', () => {
  it('Login using environment variables', () => {
    LoginPage.visit();
    LoginPage.enterUsername(Cypress.env('username'));
    LoginPage.enterPassword(Cypress.env('password'));
    LoginPage.clickLogin();
    cy.contains('Products').should('be.visible');
  });
});
