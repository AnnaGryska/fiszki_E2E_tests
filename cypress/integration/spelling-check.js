describe("spellingCheck", () => {
  it("should add word", () => {
    cy.addWord("kot", "cat");
    cy.addWord("pies", "dog");
    cy.addWord("koń", "horse");
  });

  it("should get spelling check page", () => {
    cy.getEleBySel("hamburger-menu").click();
    cy.contains("a", "Spelling check").click();
  });

  it("should swich language", () => {
    cy.getEleBySel("main-word").then(($p) => {
      const word = $p.text();
      cy.contains("button", "DRAW A NEW WORD").should("be.disabled");
      cy.get("input[type='checkbox']").click();
      cy.get("input[name='answer']").type(word);
      cy.getButtonByName("DRAW A NEW WORD");
    });
  });

  it("should be disable button", () => {
    cy.get("input[name='answer']").type("it is something");
    cy.contains("button", "DRAW A NEW WORD (+1 POINT)").should("be.disabled");
    cy.get("input[name='answer']").clear();
  });

  it("should drawing new word", () => {
    cy.getEleBySel("main-word").then(($p) => {
      const word = $p.text();
      cy.get("input[type='checkbox']").click();
      cy.get("input[name='answer']").type(word);
      cy.getButtonByName("DRAW A NEW WORD (+1 POINT)");
      cy.getEleBySel("main-word").should(($p2) => {
        expect($p2.text()).not.to.eq(word);
      });
    });
  });
  it("should delete word", () => {
    cy.getEleBySel("hamburger-menu").click();
    cy.contains("a", "Words list").click();
    cy.searchAndDeleteWord("kot");
    cy.searchAndDeleteWord("pies");
    cy.searchAndDeleteWord("koń");
  });
});
