describe('Basic behavior', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigation', () => {
    const menu = [
      { eq: 0, name: 'Home' },
      { eq: 1, name: 'About' },
      { eq: 2, name: 'Blog' },
      { eq: 3, name: 'Contact' },
    ];
    const url = (str: { name: string }) => (str.name.toLowerCase() === 'home' ? '/' : `/${str.name.toLowerCase()}`);

    menu.map((item) => {
      cy.dataCy('navigation-item').eq(item.eq).children().should('have.value', item.name).click();
      cy.verifyUrl(url(item));
      cy.request(url(item)).then((res) => {
        expect(res.status).equal(200);
      });
    });
  });
});
