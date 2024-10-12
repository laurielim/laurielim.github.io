// ***********************************************
// For comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("hasContactCta", () => {
  return cy.get('section#contact')
            .should('have.attr', 'id', 'contact')
            .find('a')
            .contains('laurie.limsam@gmail.com')
            .should('have.attr', 'href', 'mailto:laurie.limsam@gmail.com')
})
