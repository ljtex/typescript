context('Mouse Event', () => {
  beforeEach( () => {
    cy.visit('https://example.cypress.io/commands/actions')
    //cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
  })

  it('trigers a popover on click', () => {
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('can click on different sections of a canvas', ()=> {
    cy.get("#action-canvas").click('top')
    cy.get("#action-canvas").click('bottomRight')
    cy.get("#action-canvas").click(80, 100)
  })

  it('can double click to edit', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('can right click to edit', () => {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  it('shows the nav links on hover', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })
})  