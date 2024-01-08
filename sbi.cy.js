/// <reference types="cypress"/>

describe("MENU PAKET", () => {
  beforeEach(()=>{
    cy.visit('https://esborder.qs.esb.co.id/ibs/SBS/order?mode=dinein&tableNumber=46&category=1&categoryDetail=7')
    cy.clearAllCookies;
    cy.url().should('include','id');
    cy.wait(5000);
    cy.contains('MENU PAKET').click();

  });
  it('Successfully Ordered Package Nyaman 2', () => {
    cy.get('#menu-98 > .d-flex > .menu-name').click();
    cy.wait(3000);

    cy.get('.mat-mdc-button-touch-target').eq(2).dblclick();
    cy.contains(' Harus dipilih maks. 2 ').should('contain',' Harus dipilih maks. 2 ');
    cy.get('.mat-mdc-button-touch-target').eq(3).dblclick();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('.mat-mdc-button-touch-target').eq(4).dblclick();
    cy.get('.text-warning').should('be.visible');
    cy.get('.mat-mdc-button-touch-target').eq(5).dblclick();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('#mat-mdc-checkbox-1-input').click();
    cy.contains(' Harus dipilih maks. 1 ').should('be.visible');
    cy.get('#mat-mdc-checkbox-1-input').click();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('#mat-mdc-checkbox-2-input').click();
    cy.contains(' Harus dipilih maks. 1 ').should('be.visible');
    cy.get('#mat-mdc-checkbox-2-input').click();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('#mat-mdc-checkbox-3-input').click();
    cy.contains(' Harus dipilih maks. 1 ').should('be.visible');
    cy.get('#mat-mdc-checkbox-3-input').click();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('.mat-mdc-button-touch-target').eq(7).click();
    cy.get('.mat-mdc-button-touch-target').eq(9).click();
    cy.get('.mat-mdc-button-touch-target').eq(6).click();
    cy.get('.mat-mdc-button-touch-target').eq(11).click();
    cy.get('.mat-mdc-button-touch-target').eq(10).click();
    cy.get('.mat-mdc-button-touch-target').eq(7).click();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('#am-menu-notes')
    .type('1. Sambak ayam jangan terlalu garing{enter}')
    .type('2. Sambak iga jangan garing {enter}')
    .type('3. Es nya juga minta banyakin mas');

    cy.contains('Tambah Pesanan').click();
    cy.get('#itemsCart > .fw-700').should('be.visible');
  });
});

describe("MENU UTAMA", () => {
  beforeEach(()=>{
    cy.visit('https://esborder.qs.esb.co.id/ibs/SBS/order?mode=dinein&tableNumber=46&category=1&categoryDetail=1')
    cy.clearAllCookies;
    cy.url().should('include','id');
    cy.contains(' MENU UTAMA ').click();
    cy.wait(5000);
  });
  it('Successfully Ordered Package Sambak Ati Ampela', () => {
    cy.get('#menu-2 > .d-flex > .menu-name').click();
    cy.get('h1').should('contain','Sambak Ati Ampela');
    
    cy.get('#mat-mdc-checkbox-1-input').dblclick();
    cy.get('#mat-mdc-checkbox-2-input').dblclick();
    cy.get('#mat-mdc-checkbox-3-input').dblclick();
    cy.get('#mat-mdc-checkbox-1-input').click();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('#am-menu-notes').type('Jangan terlalu garing');
    cy.get('.mat-mdc-button-touch-target').eq(2).click();
    cy.get('.mat-mdc-button-touch-target').eq(3).dblclick();

    cy.contains('Tambah Pesanan').click();
    cy.contains('CHECK OUT (2)').should('contain','CHECK OUT (2)');
  });

  it('Successfully Ordered Package Sambak Ayam', () => {
    cy.get('#menu-5 > .d-flex > .menu-name').click();
    cy.get('h1').should('contain','Sambak Ayam');

    cy.get('#mat-mdc-checkbox-1-input').click();
    cy.get('#mat-mdc-checkbox-2-input').click();
    cy.get('#mat-mdc-checkbox-1-input').click();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('#mat-mdc-checkbox-3-input').click();
    cy.get('#mat-mdc-checkbox-4-input').click();
    cy.get('#mat-mdc-checkbox-5-input').click();
    cy.get('#mat-mdc-checkbox-3-input').click();
    cy.get('.ng-star-inserted').should('be.visible');

    cy.get('#am-menu-notes').type('Jangan terlalu garing');
    cy.get('.mat-mdc-button-touch-target').eq(2).click();
    cy.get('.mat-mdc-button-touch-target').eq(3).dblclick();

    cy.contains('Tambah Pesanan').click();
    cy.contains('CHECK OUT (2)').should('contain','CHECK OUT (2)');
  });
});