describe('LogIn', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/logowanie');
  });

  it('checks if form fields are empty by default', () => {
    cy.getByData('login_email_input').should('be.empty');
    cy.getByData('login_password_input').should('be.empty');
  });

  it('checks if incorrect email or password display error message', () => {
    cy.getByData('login_email_input').type('email.com@');
    cy.getByData('login_password_input').type('1');
    cy.getByData('login_submit_button').click();
    cy.getByData('login_email_error').should('exist');
    cy.getByData('login_password_error').should('exist');
  });
});
