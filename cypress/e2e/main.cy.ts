import { first } from "cypress/types/lodash";

describe("Basic behavior", () => {
  const white = "rgb(255, 255, 255)";
  const dark = "rgb(17, 24, 39)";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Scrolling", () => {
    cy.verifyUrlHash("home");

    cy.visit("/#contact");

    cy.wait(500);
    cy.verifyUrlHash("contact");

    cy.wait(500);
    cy.dataCy("back-to-top").should("be.visible").click();

    cy.wait(500);
    cy.verifyUrlHash("home");
  });

  it("Theme", () => {
    cy.scrollTo("top");
    cy.dataCy("toggle-button").should("be.visible");

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDark) {
      cy.wait(300);
      cy.get("body").should("have.css", "background-color").and("eq", dark);
    } else {
      cy.wait(300);
      cy.get("body").should("have.css", "background-color").and("eq", white);
    }
  });

  it("Home page", () => {
    const name = "Michael Kubín";
    const position = "Frontend developer";

    cy.verifyUrlHash("home");
    cy.dataCy("name").should("be.visible").contains(name);
    cy.dataCy("position").first().should("be.visible").contains(position);

    cy.dataCy("card")
      .first()
      .should("be.visible")
      .then(() => {
        cy.dataCy("company-name")
          .first()
          .then((val) => {
            cy.dataCy("position-card")
              .first()
              .then((str) => {
                const companyName = val[0].innerText
                  .toLowerCase()
                  .replace(" ", "");
                const positionCard = str[0].innerText.trim();

                cy.dataCy("job-content").first().click({ force: true });
                cy.verifyUrl(`/experience/${companyName}`);

                cy.wait(500);
                cy.dataCy("position")
                  .should("be.visible")
                  .contains(positionCard);
              });
          });
      });

    cy.dataCy("name").should("be.visible").contains(name);
    cy.dataCy("job-content").should("be.visible");
    cy.dataCy("close-btn").should("be.visible").click();

    cy.verifyUrlHash("home");
  });
});
