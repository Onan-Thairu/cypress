/// <reference types="cypress" />

describe('todo mvc tests', () => {
  let mainData

  before(() => {
    cy.visit('/')
    cy.fixture('getData').then((data) => {
      mainData = data
    })
  })

  // beforeEach(() => {
  //   cy.visit('/')
  // })

  // afterEach(() => {
  //   cy.screenshot()
  // })

  context('Add items', () => {
    it('Adds a todo', () => {
      cy.get('.new-todo').type(mainData.firstItem + '{enter}')
      cy.get('label').should('contain.text', mainData.firstItem)
      cy.get('.toggle').should('not.be.checked')
    })
  
    it('Completes a todo', () => {
      cy.get('.new-todo').type(mainData.secondItem + '{enter}')
      cy.get(':nth-child(2) > .view > .toggle').click()
      cy.get(':nth-child(2) > .view > .toggle').should('be.checked')
    })
  })

  context('Clear completed', () => {
    it('Clears completed todos', () => {
      cy.get('.clear-completed').click()
    })
  })
})