/// <reference types="cypress"/>

describe("Create New User", () => {
    it('Succesfully create new user', () => {
        var user = {
            "name": "Eduwork",
            "job": "Education"
        }
        
        cy.request('POST','https://reqres.in/api/users?', user).then((respone) =>{
            expect(respone.status).equal(201)
            expect(respone.body.name).to.eq(user.name)
            expect(respone.body.job).to.equal(user.job)
        })
    })
})
