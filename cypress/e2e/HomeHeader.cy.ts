describe('Home Header', () => {
  it('checks if header button navigates to the correct section', () => {
    cy.visit('https://oddaj.netlify.app/')

    cy.getByData('nav_home_contact').contains('Kontakt').click()
    cy.location().should((loc) => {
      expect(loc.hash).to.eq('#home_contact')
    })

  })
})