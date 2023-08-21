context('First Test', () => {
  it('types into the email field', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(2000).then(() => {
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json())
        .then((data)=> {
            // eslint-disable-next-line no-console
            console.log(data)
        })
      console.log('test is finished')
    })
  })
})