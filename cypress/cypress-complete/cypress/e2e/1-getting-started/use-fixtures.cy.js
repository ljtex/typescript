context('Use fixtures in test', ()=> {
  beforeEach(() => {
    cy.fixture('example')
    .then(function (data) {
      this.data = data
      console.log('THIS:', this.data)
    })
  })

  it('pulls data from a fixure', () => {
    cy.fixture('example')
      .then((data)=> {
        cy.log('Data: ', data)
      })
  })

  it('updates fixture data online', () => {
    cy.fixture('example')
      .then((data)=> {
        data.email = 'Updated@mail.com'
        cy.log('UPDATED: ', data)
      })
  })

  it('uses fixtures data in a network request', function () {
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.intercept(
      'GET',
      '**/comments/*', this.data
    ).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log('Response', res)
    });
  })

})