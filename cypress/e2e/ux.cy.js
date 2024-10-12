describe('User experience and interactions',  { scrollBehavior: 'center' }, () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('enable light/dark mode', () => {
    cy.get('#modeToggleText').then(($text) => {
      if ($text.text().includes('Enable dark mode')) {
        cy.get('#modeToggleButton').click()
      }
    })
    cy.wait(1000)
    cy.get('#modeToggleButton').click()
    cy.get('html')
      .should('have.attr', 'data-user-color-scheme', 'light')
      .wait(1000)

    cy.reload()
    cy.log('**color theme remains light**')
    cy.get('html')
      .should('have.attr', 'data-user-color-scheme', 'light')
      .wait(1000)
    cy.get('#modeToggleButton').click()
    cy.get('html')
      .should('have.attr', 'data-user-color-scheme', 'dark')
  })

  it('scroll to top', () => {
    cy.scrollTo('bottom')
      .wait(1000)
    cy.get('[href="#top-of-site"]')
      .isInViewport()
      .click()
    cy.location('hash').should('equal', '#top-of-site')
    cy.window().its("scrollY").should("eq", 0);
  })

  it('site navigation', () => {
    cy.get('.site-nav li').should('have.length.gt', 1)
      .contains('a', 'Portfolio')
      .should('have.attr', 'href', '/portfolio/').click()
    cy.location('pathname').should('equal', '/portfolio/')
    cy.contains('h1', 'Portfolio').should('be.visible')

    cy.get('nav.site-nav')
      .find('a[href="/"]')
      .should('have.attr', 'aria-label', 'Homepage').click()
    cy.location('pathname').should('equal', '/')
    cy.contains('h1', 'Laurie Lim Sam').should('be.visible')

    cy.get('.site-nav li').should('have.length.gt', 1)
      .contains('a', 'Résumé')
      .should('have.attr', 'href', '/resume/').click()
    cy.location('pathname').should('equal', '/resume/')
    cy.contains('h1', 'Résumé').should('be.visible')

    cy.get('.site-nav li').should('have.length.gt', 1)
      .contains('a', 'Contact')
      .should('have.attr', 'href', '#contact').click()
    cy.get('section#contact')
      .isInViewport()
  })

})