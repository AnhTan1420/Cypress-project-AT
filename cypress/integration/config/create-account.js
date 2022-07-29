const usr = Cypress.env("user");
const pas = Cypress.env("pass");
const selectors = require("../../fixtures/selectors.json")

describe('Create account', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.wait(500);
        cy.login(usr, pas)
    })

    it('Create account author', () => {
        //Create Other Admin
        cy.visit(selectors.pages.createAcc)
            .get(".page-title-action").click()
            .wait(2000)
            .get(".form-table").within(() => {
                cy.get("#user_login").type("admin2").should("have.value", "admin2")
                    .get("#email").type("user5@gmail.com").should("have.value", "user5@gmail.com")
                    .get("#pass1").clear().type("123456").should("have.value", "123456")
                    .get(".pw-checkbox").check({ force: true })
                    .get("#role").select("Administrator")
            })
            .get("#createusersub").click()
            .wait(1000)

        //Create Author
        cy.visit(selectors.pages.createAcc)
            .get(".page-title-action").click()
            .wait(2000)
            .get(".form-table").within(() => {
                cy.get("#user_login").type("author").should("have.value", "author")
                    .get("#email").type("user1@gmail.com").should("have.value", "user1@gmail.com")
                    .get("#pass1").clear().type("123456").should("have.value", "123456")
                    .get(".pw-checkbox").check({ force: true })
                    .get("#role").select("Author")
            })
            .get("#createusersub").click()
            .wait(1000)

        //Create Other Author
        cy.visit(selectors.pages.createAcc)
            .get(".page-title-action").click()
            .wait(2000)
            .get(".form-table").within(() => {
                cy.get("#user_login").type("author2").should("have.value", "author2")
                    .get("#email").type("user2@gmail.com").should("have.value", "user2@gmail.com")
                    .get("#pass1").clear().type("123456").should("have.value", "123456")
                    .get(".pw-checkbox").check({ force: true })
                    .get("#role").select("Author")
            })
            .get("#createusersub").click()
            .wait(1000)

        //Create Editor
        cy.visit(selectors.pages.createAcc)
            .get(".page-title-action").click()
            .wait(2000)
            .get(".form-table").within(() => {
                cy.get("#user_login").type("editor").should("have.value", "editor")
                    .get("#email").type("user3@gmail.com").should("have.value", "user3@gmail.com")
                    .get("#pass1").clear().type("123456").should("have.value", "123456")
                    .get(".pw-checkbox").check({ force: true })
                    .get("#role").select("Editor")
            })
            .get("#createusersub").click()
            .wait(1000)

        //Create Other Editor
        cy.visit(selectors.pages.createAcc)
            .get(".page-title-action").click()
            .wait(2000)
            .get(".form-table").within(() => {
                cy.get("#user_login").type("editor2").should("have.value", "editor2")
                    .get("#email").type("user4@gmail.com").should("have.value", "user4@gmail.com")
                    .get("#pass1").clear().type("123456").should("have.value", "123456")
                    .get(".pw-checkbox").check({ force: true })
                    .get("#role").select("Editor")
            })
            .get("#createusersub").click()
            .wait(1000)
    })
})