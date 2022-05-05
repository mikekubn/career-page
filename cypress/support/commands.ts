// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('dataCy', (value) => cy.get(`data-cy=[${value}]`));

Cypress.Commands.add('verifyUrl', (url) => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.include(url);
  });
});
