describe('Mobile test', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
    cy.visit('/');
  });

  it('menu', () => {
    const menu = [
      { eq: 0, name: 'Home' },
      { eq: 1, name: 'About' },
      { eq: 2, name: 'Blog' },
      { eq: 3, name: 'Contact' },
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
