describe("account", () => {
  it("should change for dark mode", () => {
    cy.getEleBySel("hamburger-menu").click();
    cy.get('a[href*="/account"]').click();
    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
    cy.getEleBySel("change-darkmode-btn").click();
    cy.get("body").should("have.css", "background-color", "rgb(21, 22, 25)");
    cy.getEleBySel("change-darkmode-btn").click();
    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
    cy.getEleBySel("hamburger-menu").click();
    cy.contains("a", "Flashcards").click();
  });
});
