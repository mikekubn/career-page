describe('Basic behavior', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('scroll', () => {
    cy.scrollTo('bottom');
    cy.wait(500);
    cy.dataCy('back-to-top').should('be.visible').click();

    cy.wait(500);
    cy.verifyUrl('/');
  });

  it('theme', () => {
    cy.dataCy('button-theme').should('be.visible');
    cy.dataCy('button-theme').click();
    cy.dataCy('button-theme')
      .invoke('text')
      .then((text) => {
        if (text === 'Theme light') {
          cy.dataCy('button-theme').click();
          cy.get('html').should('have.css', 'color-scheme', 'light');
          cy.dataCy('button-theme').click();
          cy.get('html').should('have.css', 'color-scheme', 'dark');
        }
        if (text === 'Theme dark') {
          cy.dataCy('button-theme').click();
          cy.get('html').should('have.css', 'color-scheme', 'dark');
          cy.dataCy('button-theme').click();
          cy.get('html').should('have.css', 'color-scheme', 'light');
        }
      });
  });

  it('navigation', () => {
    const menu = [
      {
        eq: 0,
        name: 'Home',
      },
      { eq: 1, name: 'Blog' },
      { eq: 2, name: 'Experience' },
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
