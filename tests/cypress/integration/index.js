/* eslint-disable no-magic-numbers */

describe('Cypress tests', function () {
  it('Visits the website', function () {
    cy.visit(Cypress.config('baseUrl'));
  });
});
