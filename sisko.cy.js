/// <reference types="cypress"/>

describe("FE Testing", () => {
  it('Login Validation', () => {
    cy.visit('https://sistemtoko.com/login')
    cy.url().should('include','login')
    cy.get(':nth-child(1) > .form-control').type('musictalk3419@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('1234567890')
    cy.get('#login > .btn').click()
    cy.get('.breadcrumb > .active').should('be.visible')
  })
  it('Login Invalid Password', () => {
    cy.visit('https://sistemtoko.com/login')
    cy.get(':nth-child(1) > .form-control').type('musictalk3419@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('123456789')
    cy.get('#login > .btn').click()
    cy.get('#title').should('be.visible')
  })
  it('Login Invalid Email', () => {
    cy.visit('https://sistemtoko.com/login')
    cy.get(':nth-child(1) > .form-control').type('musictalk@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('1234567890')
    cy.get('#login > .btn').click()
    cy.get('#title').should('be.visible')
  })
  it('Login Invalid Email & Password', () => {
    cy.visit('https://sistemtoko.com/login')
    cy.get(':nth-child(1) > .form-control').type('musictalk@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('123456789')
    cy.get('#login > .btn').click()
    cy.get('#title').should('be.visible')
  })
  it('Forget Email & Password if Registered', () => {
    cy.visit('https://sistemtoko.com/forgot')
    cy.get('.form-control').type('musictalk3419@gmail.com')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('.alert').should('be.visible')
  })
  it('Forget Email & Password if not Registered', () => {
    cy.visit('https://sistemtoko.com/forgot')
    cy.get('.form-control').type('musictalk@gmail.com')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('.alert').should('be.visible')
  })
})
