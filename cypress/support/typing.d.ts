/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */

declare namespace Cypress {
  interface Chainable {

    /**
    * Custom command to verify url.
    * @param url string)
    */
    verifyUrl(url: string): Chainable<Element>

    /**
    * Custom command to verify url hash.
    * @param url string)
    */
    verifyUrlHash(url: string): Chainable<Element>

    /**
    * Custom extension for cy.get('').
    * @param value string attached to data-cy
    */
    dataCy(value: string): Chainable<JQuery<HTMLElement>>

    // Augment the Cypress namespace to include type definitions for
    // your custom command.
    // Alternatively, can be defined in cypress/support/component.d.ts
    // with a <reference path="./component" /> at the top of your spec.
    mount: typeof import('cypress/react').mount
  }
}