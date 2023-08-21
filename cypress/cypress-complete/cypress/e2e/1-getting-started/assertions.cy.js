context('Assertions', () => {
  it('shows an active class for the current page', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
  })

  it('should not have an active in inactive pages', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.dropdown-menu').find('li').first()
      .should('not.have.class','active')
      .find('a')
        .should('have.attr','href', '/commands/querying')
  })
})