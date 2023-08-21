context('Cypress hooks', () => {
  before( () => {
    cy.request('https://api.spacexdata.com/v3/missions')
      .its('body').should('have.length', 10)
  })

  beforeEach( () => {
    cy.visit('https://example.cypress.io')

  })

  afterEach(() => {
    cy.log('After each hook is here')
  })

  after(() => {
    cy.log('The final after hook')
  })

  it('has h1 on the home page', () => {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })

})