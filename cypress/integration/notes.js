describe("notes", () => {
  it("should get notes page", () => {
    cy.getEleBySel("hamburger-menu").click();
    cy.get('a[href*="/notes"]').click();
  });

  it("shoud add notes", () => {
    cy.getEleBySel("add-item-button").click();
    cy.getEleBySel("new-note-title").type(
      "Cypress consists of a free, open source"
    );
    cy.getEleBySel("content").click();
    cy.get("#title_error").should("have.text", "Too long.");
    cy.contains("button", "add").should("be.disabled");
    cy.contains("button", "add & next").should("be.disabled");
    cy.getEleBySel("new-note-title").clear();
    cy.get("#title_error").should("have.text", "The title is required.");
    cy.get("#content_error").should("have.text", "The content is required.");
    cy.getEleBySel("new-note-title").type("Cypress");
    cy.getEleBySel("content").type(
      "Cypress consists of a free, open source, locally installed Test Runner and a Dashboard Service for recording your tests. Cypress helps you set up and start writing tests every day while you build your application locally. TDD at its best! After building up a suite of tests and integrating Cypress with your CI Provider, our Dashboard Service can record your test runs. You will never have to wonder: Why did this fail?"
    );
    cy.get("#content_error").should("have.text", "Too long.");
    cy.contains("button", "add").should("be.disabled");
    cy.contains("button", "add & next").should("be.disabled");
    cy.getEleBySel("content").clear();
    cy.getEleBySel("content").type(
      "Cypress consists of a free, open source, locally installed Test Runner and a Dashboard Service for recording your tests."
    );
    cy.getButtonByName("add");
  });
  it("should search notes", () => {
    cy.get("[type='Search']").type("Cypress");
    cy.getButtonByName("edit");
    cy.getEleBySel("edit-note-content").type(
      "Cypress helps you set up and start writing tests every day while you build your application locally."
    );
    cy.getButtonByName("update");
  });

  it("should show more", () => {
    cy.contains("a", "Show more").click();
    cy.getEleBySel("details-close-button").click();
  });

  it("should remove notes", () => {
    cy.get("[type='Search']").type("Cypress");
    cy.getButtonByName("remove");
    cy.getButtonByName("DO IT!");
    cy.get("header").contains("Cypress").should("not.exist");
  });
});
