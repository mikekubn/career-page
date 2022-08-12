describe('Mobile test', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
    cy.visit('/');
  });

  it('scroll', () => {
    cy.scrollTo('bottom');
    cy.wait(500);
    cy.dataCy('back-to-top').should('be.visible').click();

    cy.wait(500);
    cy.verifyUrl('/');
  });

  it('menu', () => {
    const menu = [
      {
        eq: 0,
        name: 'Home',
      },
      { eq: 1, name: 'Blog' },
      { eq: 2, name: 'Experience' },
    ];

    cy.dataCy('toggle-menu-false').should('be.visible').click();
    cy.dataCy('mobile-navigaiton-list').should('be.visible');
    cy.dataCy('toggle-menu-true').should('be.visible');

    menu.map((item) => {
      cy.dataCy('navigation-item').eq(item.eq).contains(item.name);
    });

    cy.dataCy('navigation-item').eq(menu[0].eq).contains(menu[0].name).click();
    cy.dataCy('toggle-menu-false').should('be.visible');
  });
});
