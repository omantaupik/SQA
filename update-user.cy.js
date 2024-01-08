/// <reference types="cypress"/>

describe("update user", () => {
  it('succesfully update user', () => {
    var user = {
        "name": "joko",
        "job": "tukang bubur"
    }

    cy.request('PUT','https://reqres.in/api/users/2',user).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(user.name)
        expect(response.body.job).to.eq(user.job)
    })
  });
});
