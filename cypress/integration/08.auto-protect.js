const usr = Cypress.env("user");
const pas = Cypress.env("pass");
const selectors = require("../fixtures/selectors.json");
const upload = require("../fixtures/file.json");
const user = require("../fixtures/user.json");

describe('Verify protect new file upload by these user roles only', () => {
    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.login(usr, pas);
    })


    after(() => {
        cy.logout().wait(1000)
        cy.login(usr, pas);
        cy.visit(selectors.plugin.pdaGold)
            .get('#pda_auto_protect_new_file_select2')
            .select('administrator', {force: true})
            .get("#submit")
            .click()
            .wait(2000)
            .get('#pda_auto_protect_new_file')
            .uncheck({ force: true })
            .get('#pda_roles_auto_protect_new_file')
            .uncheck({ force: true })
            .get("#submit")
            .click()
        cy.wait(2000)
        cy.log("Done")
    })

    it('Verify Administrator', () => {
        cy.enableAutoProtectRoles('administrator')
            .get('[title="administrator"]')
            .should('have.value', 0)
            .get("#submit")
            .click()
            .wait(3000)
        cy.logout()
            .wait(2000)
        cy.login(user.admin2.user, user.pass)
            .addNewMedia()
            .upload(upload.text.txt)
            .visit(selectors.pages.mediaListView)
            .get('[title= "This file is protected"]')
            .debug()
            .should('have.value', '')
        cy.deleteAllMedia()
    })

    it('Verify Editor', () => {
        cy.enableAutoProtectRoles('editor')
            .get('[title="editor"]')
            .should('have.value', 0)
            .get("#submit")
            .click()
            .wait(3000)
        cy.logout()
            .wait(2000)
        cy.login(user.editor.user, user.pass)
            .addNewMedia()
            .upload(upload.text.txt)
            .visit(selectors.pages.mediaListView)
            .get('[title= "This file is protected"]')
            .debug()
            .should('have.value', '')
        cy.deleteAllMedia()
    })

    it('Verify Author', () => {
        cy.enableAutoProtectRoles('author')
            .get('[title="author"]')
            .should('have.value', 0)
            .get("#submit")
            .click()
            .wait(3000)
        cy.logout()
            .wait(2000)
        cy.login(user.author.user, user.pass)
            .addNewMedia()
            .upload(upload.text.txt)
            .visit(selectors.pages.mediaListView)
            .get('[title= "This file is protected"]')
            .debug()
            .should('have.value', '')
        cy.deleteAllMedia()
    })
})

describe('Verify protect these file type only', () => {
    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.login(usr, pas);
    })


    afterEach(() => {
        cy.disableAutoProtect()
        cy.wait(2000)
        cy.log("Done")
    })

    it('Verify only files', () => {
        cy.enableAutoProtectFiles('png')
            .get('[title="png"]')
            .should('have.value', 0)
        cy.get("#submit")
            .click()
            .wait(3000)
        cy.addNewMedia()
            .upload(upload.img.png)
            .upload(upload.video.mp4)
            .upload(upload.text.doc)
            .upload(upload.audio.mp3)
            .visit(selectors.pages.mediaListView)
            .get('[title= "This file is protected"]')
            .debug()
            .should('have.value', '')
        cy.get("#the-list")
            .find("tr")
            .eq(0)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            }).checkProtectedFile().get(".close_btn > .fa").click()
        cy.get("#the-list")
            .find("tr")
            .eq(1)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            }).checkProtectedFile().get(".close_btn > .fa").click()
        cy.get("#the-list")
            .find("tr")
            .eq(2)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            }).checkProtectedFile().get(".close_btn > .fa").click()
        cy.get("#the-list")
            .find("tr")
            .eq(3)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            }).checkProtectedFile().get(".close_btn > .fa").click()
        cy.deleteAllMedia()
    })

    it('Verify multiple files', () => {
        cy.visit(selectors.plugin.pdaGold)
            .wait(1500)
            .get('#pda_auto_protect_new_file')
            .check({ force: true })
            .get("#pda_types_auto_protect_new_file")
            .check({ force: true })
            .enableAutoProtectMultipleFiles('jpg')
            .get('[title="jpg"]')
            .should('have.text', '×jpg')
            .enableAutoProtectMultipleFiles('webm')
            .get('[title="webm"]')
            .should('have.text', '×webm')
            .enableAutoProtectMultipleFiles('txt')
            .get('[title="txt"]')
            .should('have.text', '×txt')
            .enableAutoProtectMultipleFiles('mp3')
            .get('[title="mp3"]')
            .should('have.text', '×mp3')
            .get("#submit")
            .click()
            .wait(3000)

        cy.addNewMedia()
            .upload(upload.img.jpeg)
            .upload(upload.video.webm)
            .upload(upload.text.txt)
            .upload(upload.audio.mp3)
            .visit(selectors.pages.mediaListView)
            .get('[title= "This file is protected"]').each(function (row, i) {
                expect(i).to.be.lessThan(4)
            })
        cy.get("#the-list")
            .find("tr")
            .eq(0)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            }).checkProtectedFile().get(".close_btn > .fa").click()
        cy.get("#the-list")
            .find("tr")
            .eq(1)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            }).checkProtectedFile().get(".close_btn > .fa").click()
        cy.get("#the-list")
            .find("tr")
            .eq(2)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            }).checkProtectedFile().get(".close_btn > .fa").click()
        cy.get("#the-list")
            .find("tr")
            .eq(3)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            }).checkProtectedFile().get(".close_btn > .fa").click()
        cy.deleteAllMedia()

        cy.visit(selectors.plugin.pdaGold)
            .wait(1500)
            .then(() => {
                for (let i = 0; i < 5; i++) {
                    console.log("Index", i)
                    cy.get("#pda-grant-access-file-types > span > span.selection > span > ul")
                        .find("li > span.select2-selection__choice__remove")
                        .eq(0)
                        .click({ multiple: true })
                }
            })
            .get("#submit")
            .click()
            .wait(3000)
    })
})

