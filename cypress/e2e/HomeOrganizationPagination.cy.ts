describe('Home Organization Pagination', () => {
  beforeEach(() => {
    cy.visit('https://oddaj.netlify.app/');
  });

  it('checks if correct data displayed on page 1 and 2 for organizations section', () => {
    cy.getByData('organizations_button').click();
    cy.getByData('first_pagination_page').children('article').should('have.length', 3);
    cy.getByData('first_pagination_page').children('article').first().should('contain', 'Lorem Ipsum 1');
    cy.getByData('pagination_button_2').click()
    cy.getByData('second_pagination_page').children('article').first().should('contain', 'Lorem ipsum dolor sit amet');
  });

  it('checks if no pagination buttons are displayed for locals section', () => {
    cy.getByData('locals_button').click()
    cy.getByData('pagination_button_1').should('not.exist')
  })
});
