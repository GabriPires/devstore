describe('add product to cart', () => {
  it('should be able to navigate to product page and add it to cart', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.get('button').contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products to cart', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.get('button').contains('Adicionar ao carrinho').click()
    cy.get('button').contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search a product and add to the cart', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[name=q]').type('moletom').parent('form').submit()

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.get('button').contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
