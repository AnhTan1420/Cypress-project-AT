const selectors = require("../fixtures/selectors.json");
const usr = Cypress.env("user");
const pas = Cypress.env("pass");

describe('Verify remove license & data when delete plugin', () => {
    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.wait(1000);
        cy.login(usr, pas)

    })

    afterEach(() => {
        cy.wait(2000);
        cy.log("Done");
    })

    it('should remove license and all related data upon uninstall', () => {
        cy.visit(selectors.plugin.pdaGold).
            get('#remove_license_and_all_data').
            check({ force: true }).
            get('#submit').click().
            visit(selectors.pages.plugin).
            deactivatePlugin('Prevent Direct Access Gold').
            deletePlugin('Prevent Direct Access Gold').
            visit(selectors.pages.uploadPlugin).
            get(".upload-view-toggle").click().
            get("#pluginzip").
            attachFile('prevent-direct-access-gold-7928614d7b377242bed532f0ff92fc93d1ce21e0.zip').
            get('#install-plugin-submit').click().
            visit(selectors.pages.plugin).
            activatePlugin('Prevent Direct Access Gold').
            visit(selectors.plugin.pdaGold).
            get('#prevent-direct-access-gold_license_key').
            should('be.visible').
            visit(selectors.pages.plugin).
            deactivatePlugin('Prevent Direct Access Gold').
            deletePlugin('Prevent Direct Access Gold').
            wait(7000);
    });
})