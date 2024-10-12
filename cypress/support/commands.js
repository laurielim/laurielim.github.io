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

// https://github.com/cypress-io/cypress/issues/877#issuecomment-509499194
Cypress.Commands.add("isInViewport", { prevSubject: true },(subject) => {
  const bottom = Cypress.$(cy.state("window")).height();
  const rect = subject[0].getBoundingClientRect();

  expect(rect.top).not.to.be.greaterThan(bottom);
  expect(rect.bottom).not.to.be.greaterThan(bottom);

  return subject;
});