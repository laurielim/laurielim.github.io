describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('About section', () => {

    it('h1 contains correct text', () => {
      cy.getByData('about-heading').contains('Laurie Lim Sam')
    })

    it('there is a hero image', () => {
      cy.getByData('about-image')
        .should('have.css', 'background-image')
        .and('include', 'profile-picture.png')
    })
  })

  context('Featured projects', () => {
    it('there is a link to the portfolio page', () => {
      cy.get('section#portfolio')
        .find('a')
        .should('have.attr', 'href', '/portfolio')
    })

    it('there are 3 featured projects that link to project showcase', () => {
      cy.get('.card-container')
        .find('.card')
        .should('have.length', 3)
        .each(($card) => {
          cy.wrap($card)
            .find('a')
            .contains('See Project')
        })
    })
  })

  context('Contact', () => {
    it('there is a contact cta' , () => {
      cy.get('section#contact')
        .should('have.attr', 'id', 'contact')
        .find('a')
        .contains('laurie.limsam@gmail.com')
        .should('have.attr', 'href', 'mailto:laurie.limsam@gmail.com')
    })
  })
})