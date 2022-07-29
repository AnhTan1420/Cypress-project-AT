const usr = Cypress.env("user");
const pas = Cypress.env("pass");
const upload = require("../fixtures/file.json");
const selectors = require("../fixtures/selectors.json");
var randomCN = Math.random().toString(16).slice(2, 7);

describe('Verify change private link prefix', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.visit(selectors.plugin.pdaGold);
        cy.get("#pda_prefix_url").clear().type("anhtan").should('have.value', 'anhtan')
            .get("#submit").click()
            .wait(3000);
    })

    afterEach(() => {
        cy.deleteAllMedia();
        cy.wait(3000);
        cy.log("Done")
    })

    it('Verify private link when click button auto-generate new link', () => {
        cy.addNewMedia().
            upload(upload.img.jpg).
            protectFilelistView().
            get('[value="Auto-generate new link"]').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    });
            })
    })

    it('Verify private link when enable generate download link once protected', () => {
        cy.enableGenerate().wait(3000).
            addNewMedia().
            upload(upload.img.jpg).
            protectFilelistView().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    });
            })
            .enableGenerate().wait(3000);
    })

    it('Verify private link when generate customize new link', () => {
        cy.addNewMedia().
            upload(upload.img.jpg).
            protectFilelistView().
            addCustomLink(randomCN, "{backspace}", "{backspace}").
            get(".btn").
            click().
            wait(2000).
            get("#react-tabs-0").
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    });
            })
    })
})