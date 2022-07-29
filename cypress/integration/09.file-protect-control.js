const usr = Cypress.env("user");
const pas = Cypress.env("pass");
const selectors = require("../fixtures/selectors.json");
const upload = require("../fixtures/file.json");
const user = require("../fixtures/user.json");

describe("Verify file protection control", () => {
    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.login(usr, pas);
    })

    afterEach(() => {
        cy.wait(2000);
        cy.log("Done");
    })

    it('Verify author can not protect files but editor can protect files', () => {
        cy.visit(selectors.plugin.pdaGold)
            .get("#pda_role_protection")
            .select('editor', { force: true })
            .get("#submit")
            .click()
            .wait(3000)
        cy.logout()
            .wait(1500)
            .login(user.author.user, user.pass)
            .addNewMedia()
            .upload(upload.img.jpg)
            .visit(selectors.pages.mediaListView)
            .then(() => {
                expect('Can Not Protect Files With Role Author').to.be.a('string')
            }).deleteAllMedia()
        cy.logout()
            .wait(1500)
            .login(user.editor.user, user.pass)
            .addNewMedia()
            .upload(upload.img.jpg)
            .visit(selectors.pages.mediaListView)
            .protectFilelistView()
            .then(() => {
                expect('Can Protect Files With Role Editor').to.be.a('string')
            })
            .deleteAllMedia()
    })
})