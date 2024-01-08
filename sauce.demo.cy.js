/// <reference types ="cypress"/>

describe("navbar test", function() {
    before(function() {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.url().should('include','com')
    });

    it('should fill login invalid username and password', function() {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    });

    it('should fill login valid username and password', function() {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('have.text','Products')
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('h4').should('include.text','Accepted usernames are:')

        cy.get('#user-name').clear()
        cy.get('#user-name').type('problem_user')
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('have.text','Products')
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('h4').should('include.text','Accepted usernames are:')

        cy.get('#user-name').clear()
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('have.text','Products')
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('h4').should('include.text','Accepted usernames are:')

    });

    it('should fill item detail product', function() {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.contains('Sauce Labs Backpack').click()
        cy.get('.inventory_details_desc').should('include.text','carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get('button').contains('<- Back').click('topRight')
        cy.get('.product_label').should('have.text','Products')
        cy.get('#item_4_img_link').click()
        cy.get('button').contains('<- Back').click('topRight')
        
        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.inventory_details_desc').should('include.text','1 AAA battery included.')
        cy.get('button').contains('<- Back').click('topRight')
        cy.get('.product_label').should('have.text','Products')
        cy.get('#item_0_img_link').click()
        cy.get('button').contains('<- Back').click('topRight')
        
        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.inventory_details_desc').should('include.text','heather gray with red bolt.')
        cy.get('button').contains('<- Back').click('topRight')
        cy.get('.product_label').should('have.text','Products')
        cy.get('#item_1_img_link').click()
        cy.get('button').contains('<- Back').click('topRight')

        cy.contains('Sauce Labs Fleece Jacket').click()
        cy.get('.inventory_details_desc').should('include.text','busy day at the office.')
        cy.get('button').contains('<- Back').click('topRight')
        cy.get('.product_label').should('have.text','Products')
        //cy.get(':nth-child(10) > [data-layer="Content"]').click()
        //cy.get('.inventory_item_img').contains('item_5_img_link').click()
        //cy.get('button').contains('<- Back').click('topRight')

        cy.contains('Sauce Labs Onesie').click()
        cy.get('.inventory_details_desc').should('include.text','unravel.')
        cy.get('button').contains('<- Back').click('topRight')
        cy.get('.product_label').should('have.text','Products')
        //cy.get('#item_2_img_link').click()
        //cy.get('button').contains('<- Back').click('topRight')

        cy.contains('Test.allTheThings() T-Shirt (Red)').click()
        cy.get('.inventory_details_desc').should('include.text','and comfy ringspun combed cotton.')
        cy.get('button').contains('<- Back').click('topRight')
        cy.get('.product_label').should('have.text','Products')
        //cy.get('#item_3_img_link').click()
        //cy.get('button').contains('<- Back').click('topRight')
    });

    it('should fill add to cart and checkout', function() {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').click()
        cy.get('.cart_desc_label').should('have.text','DESCRIPTION')
        cy.contains('CHECKOUT').click()
        cy.get('.subheader').should('include.text','Checkout: Your Information')

        cy.get('#first-name').clear()
        cy.get('#first-name').type('oman')
        cy.get('#last-name').clear()
        cy.get('#last-name').type('taupik')
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type('12345')
        cy.contains('CONTINUE').click()
        cy.get('.subheader').should('include.text','Checkout: Overview')
        cy.contains('FINISH').click()
        cy.get('h2').should('be.visible')
    });

    it('should fill item menu', function() {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        cy.contains('Open Menu').click()
        cy.contains('All Items').click()
        cy.get('.product_label').should('have.text','Products')

        cy.contains('Open Menu').click()
        cy.contains('Logout').click()
        cy.get('h4').should('include.text','Accepted usernames are:')
    });
});