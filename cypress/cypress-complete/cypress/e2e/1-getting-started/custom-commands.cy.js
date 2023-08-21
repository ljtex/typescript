/// <reference types="cypress" />
// @ts-nocheck
// const navbarTExt = Cypress.env('navbarText)

const token = 'abcd123456';

context('Use fixtures in test', ()=> {
  beforeEach(() => {
    cy.fixture('example')
      .then(function (data) {
        this.data = data
        console.log('THIS:', this.data)
      })
  })

  it('sets a token in local storage', () => {
    cy.setLocalStorage('token',token)
  })

  it('gets a token from local storage', () => {
    cy.setLocalStorage('token',token)
    //cy.getLocalStorage('token').should('have.value',token)
    cy.getLocalStorage('token').should('eq',token)
  })

  it('overwrites the type command by using sensitive chars', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.findAllByPlaceholderText('Email').type('test@mail.com')
    cy.findAllByPlaceholderText('Email').type('test@mail.com', {sensitive: true})
  })
})