describe('Home page', () => {
  it('Home page', () => {
    cy.visit('/');
    cy.verifyUrlHash('home');

    cy.visit('/#contact');
    cy.verifyUrlHash('contact');
  });
});