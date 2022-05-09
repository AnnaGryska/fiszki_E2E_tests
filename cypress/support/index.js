import "./commands";

before(() => {
  cy.visit(Cypress.env("baseUrl"));
  cy.login(Cypress.env("email"), Cypress.env("password"));
});

after(() => {
  cy.logout();
});
