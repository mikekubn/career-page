describe('Running scroll', () => {
  beforeEach(() => {
    cy.visit('/experience');
  });

  it('running scroll bar', () => {
    cy.scrollTo('bottom');
    cy.dataCy('running-scroll-bar').should('be.visible');
  });
});
