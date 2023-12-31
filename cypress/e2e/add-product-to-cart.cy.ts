describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to product page and add it to cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.get('button').contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products to cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.get('button').contains('Adicionar ao carrinho').click()
    cy.get('button').contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search a product and add to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.get('button').contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
