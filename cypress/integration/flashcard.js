describe("flashcard", () => {
  it("should add word", () => {
    cy.getEleBySel("add-item-button").click();
    cy.typeWord("polish", "123");
    cy.get("input[name='english']").click();
    cy.get("#polish_error").should(
      "have.text",
      "Special characters are not allowed."
    );
    cy.get("input[name='english']").click();
    cy.get("textarea[name=description] ").click();
    cy.get("#english_error").should(
      "have.text",
      "The english word is required."
    );
    cy.contains("button", "add").should("be.disabled");
    cy.contains("button", "add & next").should("be.disabled");
    cy.get('input[name="polish"]').clear();
    cy.typeWord("polish", "pies");
    cy.typeWord("english", "dog");
    cy.getButtonByName("add & next");
    cy.typeWord("polish", "kot");
    cy.typeWord("english", "cat");
    cy.contains("button", "add").click();
  });

  it("should swich language", () => {
    cy.getEleBySel("big-word").then(($p) => {
      const word = $p.text();
      cy.get("input[type='checkbox']").click();
      cy.getEleBySel("small-word").should(($p2) => {
        expect($p2.text()).eq(word);
      });
    });
  });

  it("should drawing new word", () => {
    cy.getEleBySel("big-word").then(($p) => {
      const txt = $p.text();
      cy.getButtonByName("DRAW A NEW WORD");
      cy.getEleBySel("big-word").should(($p2) => {
        expect($p2.text()).not.to.eq(txt);
      });
    });
  });

  it("should drawing new word and adding 1 point", () => {
    cy.getEleBySel("big-word").then(($p) => {
      const txt = $p.text();
      cy.getButtonByName("I KNOW THIS WORD (+1 POINT)");
      cy.getEleBySel("big-word").should(($p2) => {
        expect($p2.text()).not.to.eq(txt);
      });
    });
  });

  it("should show translate for main word", () => {
    cy.getEleBySel("small-word").should("not.be.visible");
    cy.contains("button", "Show").click();
    cy.getEleBySel("small-word").should("be.visible");
  });

  it("shoud delete flashcard", () => {
    cy.getDeleteWord();
    cy.searchAndDeleteWord("dog");
    cy.searchAndDeleteWord("cat");
  });
});
