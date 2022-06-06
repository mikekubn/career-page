import './commands';
import { mount } from 'cypress/react';

// Example use:
// cy.mount(<MyComponent />)
Cypress.Commands.add('mount', mount);
