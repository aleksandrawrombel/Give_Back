describe('LogIn', () => {
  beforeEach(() => {
    cy.visit('https://oddaj.netlify.app');
  });

  it('checks if form fields are empty by default', () => {
    cy.getByData('nav_register').click()
    cy.getByData('register_email_input').should('be.empty');
    cy.getByData('register_password_input').should('be.empty');
    cy.getByData('register_password_confirmation_input').should('be.empty');
  });

  it('checks if incorrect email or password display error message', () => {
    cy.getByData('nav_register').click()
    cy.getByData('register_email_input').type('email.com@');
    cy.getByData('register_password_input').type('1');
    cy.getByData('register_submit_button').click();
    cy.getByData('register_email_error').should('exist');
    cy.getByData('register_password_error').should('exist');
    cy.getByData('register_password2_error').should('exist');
  });
});
