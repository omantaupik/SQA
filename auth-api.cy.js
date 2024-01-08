/// <reference types="cypress"/>

describe("API Authentication", () => {
    it('Seccesfully login via api', () => {
        cy.LoginViaAPI('email','password')
    });
});
