/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
    }
  }
}
