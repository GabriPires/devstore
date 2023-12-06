/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to search by query
     * @example cy.searchByQuery('cypress')
     */
    searchByQuery(query: string): Chainable<void>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')

  cy.get('input[name=q]').type(query).parent('form').submit()
})
