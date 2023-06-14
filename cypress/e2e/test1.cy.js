/// <reference types="cypress" />

describe('todo mvc tests', () => {
  let mainData

  before(() => {
    cy.fixture('getData').then((data) => {
      mainData = data
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  context('Add items', () => {
    it('Adds a todo', () => {
      cy.get('.new-todo').type(mainData.firstItem + '{enter}')
      cy.get('label').should('contain.text', mainData.firstItem)
      cy.get('.toggle').should('not.be.checked')
    })
  
    it('Completes a todo', () => {
      cy.get('.new-todo').type(mainData.secondItem + '{enter}')
      cy.get('.toggle').click()
      cy.get('.toggle').should('be.checked')
    })
  })
})