describe('LogIn', () => {
  it('checks if form fields are empty by default', () => {
    cy.visit('https://oddaj.netlify.app');
    cy.getByData('nav_login').click();
    cy.getByData('login_email_input').should('be.empty');
    cy.getByData('login_password_input').should('be.empty');
  });

  it('checks if incorrect email or password display error message', () => {
    cy.visit('https://oddaj.netlify.app');
    cy.getByData('nav_login').click();
    cy.getByData('login_email_input').type('email.com@');
    cy.getByData('login_password_input').type('1');
    cy.getByData('login_submit_button').click();
    cy.getByData('login_email_error').should('exist');
    cy.getByData('login_password_error').should('exist');
  });

  it('checks if users may log in correctly', () => {
    cy.visit('https://oddaj.netlify.app/');
    cy.getByData('nav_login').click();
    cy.login();
    cy.url({ timeout: 10000 }).should('equal', '/');
  });

  it.only('checks if logged in user may access the main form for logged in users only', () => {
    cy.visit('https://oddaj.netlify.app/');
    cy.getByData('nav_login').click();
    cy.login();
    cy.origin('https://main--oddaj.netlify.app/', () => {
      cy.get('[data-cy=hero_button_give_away]').click()
    })
  });
});
