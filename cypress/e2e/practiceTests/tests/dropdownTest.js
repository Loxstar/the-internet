require('../models/dropdownPageModel');
const dropdownPage = require('../models/dropdownPageModel');

describe('Dropdown Test Suite', () => {
    it('Dropdown Test Case', () => {
        cy.visit('/');
        cy.get(dropdownPage.dropdownLink).click();
        cy.get(dropdownPage.dropdown).select('Option 1').should('have.value', '1');
        cy.wait(2000);
        cy.get(dropdownPage.dropdown).select('Option 2').should('have.value', '2');
    });
});