describe("wordList", () => {
  it("shoud add word", () => {
    cy.addWord("kot", "cat");
  });

  it("shoud get word list page", () => {
    cy.getEleBySel("hamburger-menu").click();
    cy.contains("a", "Words list").click();
    cy.get("[type='Search']").type("cat");
  });

  it("shoud not have description", () => {
    cy.getEleBySel("info-box").then(($els) => {
      const des = $els[0].ownerDocument.defaultView;
      const before = des.getComputedStyle($els[0], "before");
      const contentValue = before.getPropertyValue("content");
      expect(contentValue).to.eq('"No description"');
    });
  });

  it("should edit flashcard", () => {
    cy.getEleBySel("edit-word-button").click();
    cy.getEleBySel("edit-description").type("It is home animal");
    cy.getButtonByName("update");
  });

  it("shoud have description", () => {
    cy.getEleBySel("info-box").then(($els) => {
      const des = $els[0].ownerDocument.defaultView;
      const before = des.getComputedStyle($els[0], "before");
      const contentValue = before.getPropertyValue("content");
      expect(contentValue).to.eq('"It is home animal"');
    });
  });

  it("should delete word", () => {
    cy.getEleBySel("delete-word-button").click();
    cy.getButtonByName("DO IT!");
    cy.getEleBySel("table-row").should("not.exist");
  });
});
