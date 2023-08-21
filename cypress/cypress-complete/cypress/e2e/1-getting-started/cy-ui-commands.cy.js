context('UI commands', () => {
  it('can click on shown element', () => {
    cy.visit('https://example.cypress.io/')
    cy.findAllByText('Actions').last().click()
    cy.url().should('include', 'commands/actions')
  })

  it('can click on by force on hidden element', () => {
    cy.visit('https://example.cypress.io/')
    cy.findAllByText('Actions').first().click({force : true})
    cy.url().should('include', 'commands/actions')
  })

  it('lets you type in an input field', ()=> {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.findAllByPlaceholderText('Email').type('Test')
      .should('have.value','Test')
  })

  it('lets you clear an input field', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    cy.findByLabelText('Describe:')
      .type('Test Desc')
      .should('have.value','Test Desc')
      .clear()
      .should('have.value','')
  })

  it('lets you check a checkbox', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should('be.checked')
    cy.get('.action-checkboxes [type="checkbox"]')
      .eq(1)
      .check({force:true})
      .should('be.checked')
  })

  it('lets you check a radiobutton', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should('be.checked')
    cy.get('.action-checkboxes [type="checkbox"]')
      .eq(1)
      .check({force:true})
      .should('be.checked')
    
  })
})