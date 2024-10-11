describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  it('h1 contains correct text', () => {
    cy.visit('/')
    cy.getByData("hero-heading").contains('Laurie Lim Sam')
  })
})