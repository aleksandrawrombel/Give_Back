describe('LogIn', () => {
  it('checks if form fields are empty by default', () => {
    cy.visit('http://localhost:5173/logowanie');
    cy.getByData('login_email_input').should('be.empty');
    cy.getByData('login_password_input').should('be.empty');
  });

  it('checks if incorrect email or password display error message', () => {
    cy.visit('http://localhost:5173/logowanie');
    cy.getByData('login_email_input').type('email.com@');
    cy.getByData('login_password_input').type('1');
    cy.getByData('login_submit_button').click();
    cy.getByData('login_email_error').should('exist');
    cy.getByData('login_password_error').should('exist');
  });

  it('checks if logged in users are redirected to main page', () => {
    cy.visit('https://oddaj.netlify.app/');
    cy.getByData('nav_login').click();
    cy.login();
    cy.url().should('eq', 'https://main--oddaj.netlify.app/');
  });
});
