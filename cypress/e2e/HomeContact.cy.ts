describe('Home Contact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('checks if form fields are empty by default', () => {
    cy.getByData('contact_name_input').should('be.empty');
    cy.getByData('contact_email_input').should('be.empty');
    cy.getByData('contact_message_input').should('be.empty');
  });

  it('checks if submiting the form without data triggers error message', () => {
    cy.getByData('contact_submit_button').click();
    cy.getByData('contact_name_error').should('exist');
    cy.getByData('contact_email_error').should('exist');
    cy.getByData('contact_message_error').should('exist');
  });

  it('checks if incorrect email address is rejected', () => {
    cy.getByData('contact_name_input').type('Ola');
    cy.getByData('contact_email_input').type('email.com');
    cy.getByData('contact_message_input').type(
      'exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage'
    );
    cy.getByData('contact_submit_button').click();
    cy.getByData('contact_email_error').should('exist');
  });

  it('checks if name is one word and correct error message displays', () => {
    cy.getByData('contact_name_input').type('Jan Paweł');
    cy.getByData('contact_submit_button').click();
    cy.getByData('contact_name_error').should('exist').contains('jednego');
  });

  it('checks if all fields are displaying error messages when incorrect data entered', () => {
    cy.getByData('contact_name_input').type('Jan Paweł');
    cy.getByData('contact_email_input').type('email.com@');
    cy.getByData('contact_message_input').type('exampleMessage');
    cy.getByData('contact_submit_button').click();
    cy.getByData('contact_name_error').should('exist');
    cy.getByData('contact_email_error').should('exist');
    cy.getByData('contact_message_error').should('exist');
  });

  it('checks if success message displays when correct data entered', () => {
    cy.getByData('contact_name_input').type('Ola');
    cy.getByData('contact_email_input').type('example@email.com');
    cy.getByData('contact_message_input').type(
      'exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage exampleMessage'
    );
    cy.getByData('contact_submit_button').click();
    cy.getByData('contact_success_message').should('exist');
  });
});
