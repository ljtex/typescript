describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();

    cy.get('#query-btn', {timeout: 5000})
      .should('contain', 'Button')
      .should('have.class', 'query-btn')
      .and('be.visible')
      .and('be.enabled');

    expect(true).to.be.true;

    assert.equal(4, '4', 'NOT EQUAL');
    //assert.strictEqual(4, '4', 'NOT EQUAL');
  })
})
