/// <reference types="cypress"
it("Google Search", function() {
  cy.visit("https://google.com/");
  cy.get('[href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"]');
  cy.get('#APjFqb').type('Cypress automation{Enter}');

  //cy.contains('Google Search').click();
})
