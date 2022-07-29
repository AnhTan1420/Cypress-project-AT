const selectors = require("../../fixtures/selectors.json")
const usr = Cypress.env("user")
const pas = Cypress.env("pass")

describe('Upload and active plugin', () => {
    beforeEach(() => {
        cy.visit("/")
          .clearCookies()
          .clearLocalStorage()
          .reload()
          .wait(500)
          .login(usr, pas)
    })

    afterEach(() => {
        cy.wait(3000)
          .log("done")
    })

    it('Upload plugin when plugin not exist', () => {
        cy.visit(selectors.pages.uploadPlugin)
          .get(".upload-view-toggle").click()
          .get("#pluginzip")
          .attachFile('prevent-direct-access-gold-7928614d7b377242bed532f0ff92fc93d1ce21e0.zip')
          .get("#install-plugin-submit").click()
          .wait(1500)
          .get("a.button").click()
          .wait(1500)
        cy.visit(selectors.plugin.pdaGold)
          .get("#prevent-direct-access-gold_license_key")
          .type("485d7e8d-0224-42a7-9b5e-d0f50d343275")
          .get("#submit").click()
          .wait(9000)
    })

    it.skip('Upload plugin when plugin exist', () => {
        cy.visit(selectors.pages.uploadPlugin)
          .get(".upload-view-toggle").click()
          .get("#pluginzip")
          .attachFile('prevent-direct-access-gold-7928614d7b377242bed532f0ff92fc93d1ce21e0.zip')
          .get("#install-plugin-submit").click()
          .wait(1500)
          .get("a.button:nth-child(1)").click()
          .wait(1500)
        cy.visit(selectors.plugin.pdaGold)
    })
})