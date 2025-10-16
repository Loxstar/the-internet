require('cypress-xpath');
import dropdownPageModel from '../models/dropdownPageModel.js';
const dropdownPage = new dropdownPageModel();

describe('Dropdown Test Suite', () => {
    it('Verify Dropdown Functionality', () => {
        cy.url('/');
        cy.xpath(dropdownPage.dropdownLink).click();
        cy.get(dropdownPage.dropdown).select('Option 1').should('have.value', '1');
        cy.wait(2000);
        cy.get(dropdownPage.dropdown).select('Option 2').should('have.value', '2');
    });
});