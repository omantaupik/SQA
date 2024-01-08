/// <reference types="cypress"/>

describe("calculate your bmi", () => {
  it('field of calculate your bmi', () => {
    cy.visit('https://fitbybeat.com/')
    cy.get('.qodef-grid-row > :nth-child(1) > input').scrollIntoView()
    cy.get('.qodef-grid-row > :nth-child(1) > input').type(165)
    cy.get(':nth-child(2) > input').type(55)
    cy.get(':nth-child(3) > input').type(23)
    cy.get('.select2-selection__arrow').first().click()
    cy.get('.select2-dropdown li:contains("Male")').click()
    cy.get('span.select2-selection__arrow[role="presentation"]').eq(1).click()
    cy.get('.select2-dropdown li:contains("Little or no Exercise/ desk job")').click()
    cy.get(':nth-child(6) > .qodef-btn > .qodef-btn-text').click().should('be.visible')
  })
})