Cypress.Commands.add("login", (email, password) => {
  cy.get("input[name='email']").type(email);
  cy.get("input[name='password']").type(password);
  cy.contains("button", "SIGN IN").click();
});

Cypress.Commands.add("logout", () => {
  cy.get("[data-cy=hamburger-menu").click();
  cy.contains("a", "Log out").click();
});

Cypress.Commands.add("typeWord", (lang, word) => {
  cy.get(`input[name=${lang}]`).type(word);
});

Cypress.Commands.add("getButtonByName", (name) => {
  cy.contains("button", name).click();
});

Cypress.Commands.add("getEleBySel", (elem) => {
  cy.get(`[data-cy=${elem}`);
});

Cypress.Commands.add("addWord", (polish, english) => {
  cy.getEleBySel("add-item-button").click();
  cy.get("input[name='polish']").type(polish);
  cy.get("input[name='english']").type(english);
  cy.contains("button", "add").click();
});

Cypress.Commands.add("getDeleteWord", () => {
  cy.getEleBySel("hamburger-menu").click();
  cy.contains("a", "Words list").click();
});

Cypress.Commands.add("searchAndDeleteWord", (word) => {
  cy.get("[type='Search']").type(word);
  cy.getEleBySel("delete-word-button").click();
  cy.contains("button", "DO IT!").click();
  cy.get("[type='Search']").clear();
});
