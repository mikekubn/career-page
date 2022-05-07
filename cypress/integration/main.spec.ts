describe('Basic behavior', () => {
  const white = 'rgb(255, 255, 255)';
  const dark = 'rgb(17, 24, 39)';

  beforeEach(() => {
    cy.visit('/');
  });

  it('Scrolling', () => {
    cy.verifyUrlHash('home');

    cy.visit('/#contact');
    cy.verifyUrlHash('contact');

    cy.dataCy('back-to-top').should('be.visible').click();
    cy.verifyUrlHash('home');
  });

  it('Theme', () => {
    cy.scrollTo('top');
    cy.dataCy('toggle-button').should('be.visible');

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
      cy.wait(300);
      cy.get('body')
        .should('have.css', 'background-color')
        .and('eq', dark);
    } else {
      cy.wait(300);
      cy.get('body')
        .should('have.css', 'background-color')
        .and('eq', white);
    }
  });

  it('Home page', () => {
    const name = 'Michael Kubín';
    const position = 'Javascript Developer';

    cy.verifyUrlHash('home');
    cy.dataCy('name').should('be.visible').contains(name);
    cy.dataCy('position').should('be.visible').contains(position);

    cy.dataCy('card').should('be.visible');
    cy.dataCy('job-content').first().click({ force: true });

    cy.verifyUrl('/experience/1');

    cy.dataCy('name').should('be.visible').contains(name);
    cy.dataCy('position').should('be.visible').contains(position);
    cy.dataCy('job-content').should('be.visible');
    cy.dataCy('close-btn').should('be.visible').click();

    cy.verifyUrlHash('home');
  });
});
