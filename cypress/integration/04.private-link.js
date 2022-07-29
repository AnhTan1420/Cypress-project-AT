const upload = require("../fixtures/file.json");
const selectors = require("../fixtures/selectors.json");
const usr = Cypress.env("user");
const pas = Cypress.env("pass");
var randomNumber = Math.floor(Math.random() * Math.pow(4, 4));
var randomCN = Math.random().toString(16).slice(2, 7)
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

describe('Verify generate new private link by click button', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
    });

    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify generate 1 private link', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .get(".media-list-subtitle").should('have.text', 'demo.txt')
            .wait(2000)
        cy.protectFilelistView()
            .then(() => {
                cy.get('[value="Auto-generate new link"]')
                    .click()
                    .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
                    .should('have.attr', 'href')
            })
            .get('.ReactVirtualized__Grid__innerScrollContainer').find('div.ReactVirtualized__Table__row').each(function (row, i) {
                expect(i).to.be.lessThan(1)
            })
        cy.deleteAllMedia()
    })

    it('Verify generate 3 private link', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .get(".media-list-subtitle").should('have.text', 'demo.txt')
            .wait(2000)
        cy.protectFilelistView()
            .then(() => {
                for (let i = 0; i < 3; i++) {
                    console.log('Index', i);
                    cy.get('[value="Auto-generate new link"]')
                        .click()
                        .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
                        .should('have.attr', 'href')
                        .wait(2000)
                }
            })
            .get('.ReactVirtualized__Grid__innerScrollContainer').find('div.ReactVirtualized__Table__row').each(function (row, i) {
                expect(i).to.be.lessThan(3)
            })
        cy.deleteAllMedia()
    })

    it('Verify generate 5 private link', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .get(".media-list-subtitle").should('have.text', 'demo.txt')
            .wait(2000)
        cy.protectFilelistView()
            .then(() => {
                for (let i = 0; i < 5; i++) {
                    console.log('Index', i);
                    cy.get('[value="Auto-generate new link"]')
                        .click()
                        .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
                        .should('have.attr', 'href')
                        .wait(2000)
                }
            })
            .get('.ReactVirtualized__Grid__innerScrollContainer').find('div.ReactVirtualized__Table__row').each(function (row, i) {
                expect(i).to.be.lessThan(5)
            })
        cy.deleteAllMedia()
    })

    it('Verify generate 7 private link', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .get(".media-list-subtitle").should('have.text', 'demo.txt')
            .wait(2000)
        cy.protectFilelistView()
            .then(() => {
                for (let i = 0; i < 7; i++) {
                    console.log('Index', i);
                    cy.get('[value="Auto-generate new link"]')
                        .click()
                        .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
                        .should('have.attr', 'href')
                        .wait(2000)
                }
            })
            .get('.ReactVirtualized__Grid__innerScrollContainer').find('div.ReactVirtualized__Table__row').each(function (row, i) {
                expect(i).to.be.lessThan(7)
            })
        cy.deleteAllMedia()
    })

    it('Verify generate 9 private link', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .get(".media-list-subtitle").should('have.text', 'demo.txt')
            .wait(2000)
        cy.protectFilelistView()
            .then(() => {
                for (let i = 0; i < 9; i++) {
                    console.log('Index', i);
                    cy.get('[value="Auto-generate new link"]')
                        .click()
                        .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
                        .should('have.attr', 'href')
                        .wait(2000)
                }
            })
            .get('.ReactVirtualized__Grid__innerScrollContainer').find('div.ReactVirtualized__Table__row').each(function (row, i) {
                expect(i).to.be.lessThan(9)
            })
        cy.deleteAllMedia()
    })
})

describe('Verify Generate private Link Once Protected', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.enableGenerate()
            .wait(3000);
    });

    afterEach(() => {
        cy.enableGenerate()
            .wait(3500);
        cy.log("Done");
    });

    it('Verify generate private link when protect image file', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .wait(3000)
            .deleteAllMedia()
    })

    it('Verify generate private link when protect video file', () => {
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .wait(3000)
            .deleteAllMedia()
    })

    it('Verify generate private link when protect text file', () => {
        cy.addNewMedia()
            .upload(upload.text.doc)
            .protectFilelistView()
            .wait(3000)
            .deleteAllMedia()
    })

    it('Verify generate private link when protect audio file', () => {
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .wait(3000)
            .deleteAllMedia()
    })
})

describe('Verify total click when directly click private link', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
    });

    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify click 1 time private link', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(2000)
        cy.protectFilelistView().
            get('[value="Auto-generate new link"]').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            }).
            get('.fa-refresh').
            click().
            get('[title="1"]').
            should('have.text', '1').
            get('.close_btn > .fa').
            click().
            deleteAllMedia();
    })

    it('Verify click 3 time private link', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(5000)
        cy.protectFilelistView().
            get('[value="Auto-generate new link"]').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                for (let i = 0; i < 3; i++) {
                    console.log('Index', i);
                    cy.request({
                        url,
                        followRedirect: false,
                        timeout: 5000,
                    }).then((res) => {
                        cy.log("Response", res);
                        expect(res.status).to.eq(200);
                    })
                }
            }).
            get('.fa-refresh').
            click().
            get('[title="3"]').
            should('have.text', '3').
            get('.close_btn > .fa').
            click().
            deleteAllMedia();
    })

    it('Verify click 5 time private link', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(5000)
        cy.protectFilelistView().
            get('[value="Auto-generate new link"]').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                for (let i = 0; i < 5; i++) {
                    console.log('Index', i);
                    cy.request({
                        url,
                        followRedirect: false,
                        timeout: 5000,
                    }).then((res) => {
                        cy.log("Response", res);
                        expect(res.status).to.eq(200);
                    })
                }
            }).
            get('.fa-refresh').
            click().
            get('[title="5"]').
            should('have.text', '5').
            get('.close_btn > .fa').
            click().
            deleteAllMedia();
    })

    it('Verify click 7 time private link', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(5000)
        cy.protectFilelistView().
            get('[value="Auto-generate new link"]').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                for (let i = 0; i < 7; i++) {
                    console.log('Index', i);
                    cy.request({
                        url,
                        followRedirect: false,
                        timeout: 5000,
                    }).then((res) => {
                        cy.log("Response", res);
                        expect(res.status).to.eq(200);
                    })
                }
            }).
            get('.fa-refresh').
            click().
            get('[title="7"]').
            should('have.text', '7').
            get('.close_btn > .fa').
            click().
            deleteAllMedia();
    })

    it('Verify click 9 time private link', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(5000)
        cy.protectFilelistView().
            get('[value="Auto-generate new link"]').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                for (let i = 0; i < 9; i++) {
                    console.log('Index', i);
                    cy.request({
                        url,
                        followRedirect: false,
                        timeout: 5000,
                    }).then((res) => {
                        cy.log("Response", res);
                        expect(res.status).to.eq(200);
                    })
                }
            }).
            get('.fa-refresh').
            click().
            get('[title="9"]').
            should('have.text', '9').
            get('.close_btn > .fa').
            click().
            deleteAllMedia();
    })
})

describe('Verify download limited private link', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
    });

    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify 1 time download limit', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(2000)
        cy.protectFilelistView()
            .get('[value="Auto-generate new link"]').
            click().
            get('[title="Edit"] > .fa').
            click().
            get('div.ReactVirtualized__Table__rowColumn:nth-child(4) > div:nth-child(1) > input:nth-child(1)').
            type(1, { force: true }).
            get('.ReactVirtualized__Grid').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                    expect(res.redirectedToUrl).
                        not.
                        to.
                        eq(`${Cypress.env('host')}/pda_404`);
                });
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                    failOnStatusCode: false,
                }).then((res) => {
                    cy.log('Response', res);
                    expect(res.status).to.eq(404);
                });
            }).
            get('.close_btn > .fa').
            click()
            .deleteAllMedia()

    })

    it('Verify 3 time download limit', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(2000)
        cy.protectFilelistView()
            .get('[value="Auto-generate new link"]').
            click().
            get('[title="Edit"] > .fa').
            click().
            get('div.ReactVirtualized__Table__rowColumn:nth-child(4) > div:nth-child(1) > input:nth-child(1)').
            type(3, { force: true }).
            get('.ReactVirtualized__Grid').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                for (let i = 0; i < 3; i++) {
                    console.log('Index', i)
                    cy.request({
                        url,
                        followRedirect: false,
                        timeout: 5000,
                    })
                        .then((res) => {
                            expect(res.status).to.eq(200);
                            expect(res.redirectedToUrl).
                                not.
                                to.
                                eq(`${Cypress.env('host')}/pda_404`);
                        })
                }
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                    failOnStatusCode: false,
                }).then((res) => {
                    cy.log('Response', res);
                    expect(res.status).to.eq(404);
                });
            }).
            get('.fa-refresh').
            click().
            wait(2000).
            get('.close_btn > .fa').
            click()
            .deleteAllMedia()

    })

    it('Verify 5 time download limit', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(2000)
        cy.protectFilelistView()
            .get('[value="Auto-generate new link"]').
            click().
            get('[title="Edit"] > .fa').
            click().
            get('div.ReactVirtualized__Table__rowColumn:nth-child(4) > div:nth-child(1) > input:nth-child(1)').
            type(5, { force: true }).
            get('.ReactVirtualized__Grid').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                for (let i = 0; i < 5; i++) {
                    console.log('Index', i)
                    cy.request({
                        url,
                        followRedirect: false,
                        timeout: 5000,
                    })
                        .then((res) => {
                            expect(res.status).to.eq(200);
                            expect(res.redirectedToUrl).
                                not.
                                to.
                                eq(`${Cypress.env('host')}/pda_404`);
                        })
                }
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                    failOnStatusCode: false,
                }).then((res) => {
                    cy.log('Response', res);
                    expect(res.status).to.eq(404);
                });
            }).
            get('.fa-refresh').
            click().
            wait(2000).
            get('.close_btn > .fa').
            click()
            .deleteAllMedia()

    })

    it('Verify 7 time download limit', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(2000)
        cy.protectFilelistView()
            .get('[value="Auto-generate new link"]').
            click().
            get('[title="Edit"] > .fa').
            click().
            get('div.ReactVirtualized__Table__rowColumn:nth-child(4) > div:nth-child(1) > input:nth-child(1)').
            type(7, { force: true }).
            get('.ReactVirtualized__Grid').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                for (let i = 0; i < 7; i++) {
                    console.log('Index', i)
                    cy.request({
                        url,
                        followRedirect: false,
                        timeout: 5000,
                    })
                        .then((res) => {
                            expect(res.status).to.eq(200);
                            expect(res.redirectedToUrl).
                                not.
                                to.
                                eq(`${Cypress.env('host')}/pda_404`);
                        })
                }
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                    failOnStatusCode: false,
                }).then((res) => {
                    cy.log('Response', res);
                    expect(res.status).to.eq(404);
                });
            }).
            get('.fa-refresh').
            click().
            wait(2000).
            get('.close_btn > .fa').
            click()
            .deleteAllMedia()

    })

    it('Verify 9 time download limit', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(2000)
        cy.protectFilelistView()
            .get('[value="Auto-generate new link"]').
            click().
            get('[title="Edit"] > .fa').
            click().
            get('div.ReactVirtualized__Table__rowColumn:nth-child(4) > div:nth-child(1) > input:nth-child(1)').
            type(9, { force: true }).
            get('.ReactVirtualized__Grid').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                for (let i = 0; i < 9; i++) {
                    console.log('Index', i)
                    cy.request({
                        url,
                        followRedirect: false,
                        timeout: 5000,
                    })
                        .then((res) => {
                            expect(res.status).to.eq(200);
                            expect(res.redirectedToUrl).
                                not.
                                to.
                                eq(`${Cypress.env('host')}/pda_404`);
                        })
                }
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                    failOnStatusCode: false,
                }).then((res) => {
                    cy.log('Response', res);
                    expect(res.status).to.eq(404);
                });
            }).
            get('.fa-refresh').
            click().
            wait(2000).
            get('.close_btn > .fa').
            click()
            .deleteAllMedia()

    })
})

describe('Verify download expiry private link', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
    });

    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify past date download expiry', () => {
        let randomDate = Math.floor(Math.random() * 10000) + 1;
        let pastDate = new Date(randomDate * (-1)).toLocaleDateString('en-CA');


        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(2000)
        cy.protectFilelistView().
            get('[value="Auto-generate new link"]').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            get('[title="Edit"] > .fa').
            click().
            get('input[type="date"]').type(pastDate, { force: true }).
            get('.ReactVirtualized__Grid').
            click().wait(1000).
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            }).
            get('.fa-refresh').
            click().
            wait(2000).
            get('.close_btn > .fa').
            click()
            .deleteAllMedia()
    })

    it('Verify future date download expiry', () => {
        let randomDate = Math.floor(Math.random() * 10000) + 1;
        let futureDate = new Date(randomDate).toLocaleDateString('en-CA');
        futureDate = pastDate.setDate(pastDate.getDate() + 1);
        
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .get(".media-list-subtitle").should('have.text', 'pexels-eberhard-grossgasteiger-844297.jpg')
            .wait(2000)
        cy.protectFilelistView().
            get('[value="Auto-generate new link"]').
            click().
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            get('[title="Edit"] > .fa').
            click().
            get('input[type="date"]').type(futureDate, { force: true }).
            get('.ReactVirtualized__Grid').
            click().wait(1000).
            get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    });
            }).
            get('.fa-refresh').
            click().
            wait(2000).
            get('.close_btn > .fa').
            click()
            .deleteAllMedia()
    })
})

describe('Verify generate customize new link', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
    });

    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify generate customize new private link', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(randomCN, "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .wait(2000)
            .addCustomLink(randomCN + "1", "1", '{backspace}')
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .wait(2000)
            .addCustomLink(randomCN + "2", '{backspace}', "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .wait(2000)
            .addCustomLink(randomCN + "3", '{backspace}', '{backspace}')
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .wait(2000)
            .deleteAllMedia()

    })

    it('Verify blank input custom URL slug and set download limit, expiry', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink('{backspace}', "1", "1")
            .get(".btn").click()
            .get(".error").should('have.text', 'Required')
            .get("#react-tabs-0")
            .click()
            .deleteAllMedia()

    })

    it('Verify generate custom link with enable, disable URL active', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(random, "1", "1")
            .get('#is_prevented').check({ force: true })
            .wait(2000)
            .get(".btn").click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .get("div.ReactVirtualized__Table__rowColumn:nth-child(2)")
            .find('i')
            .should('have.class', 'pda-active-link')
            .addCustomLink(random * 2, "1", "1")
            .get('#is_prevented').uncheck({ force: true })
            .wait(2000)
            .get(".btn").click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .get("div.ReactVirtualized__Table__rowColumn:nth-child(2)")
            .find('i')
            .should('have.class', 'pda-inactive-link')
            .deleteAllMedia()

    })

    it('Verify generate custom link when enter number input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(randomNumber, "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .deleteAllMedia()
    })

    it('Verify generate custom link when enter characters input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(randomCharacter, "{backspace}", "{backspace}")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
    })

    it('Verify generate custom link when enter doc(.) input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(".", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter doc(.) with number input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(".9", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter doc(.) with characters input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(".t", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter dash(-) input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink("-", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter dash(-) with number input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink("-9", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter dash(-) with character input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink("-t", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter underscore(_) input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink("_", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter underscore(_) with number input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink("_9", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter underscore(_) with characters input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink("_t", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter dot(.), dash(-), underscore(_) input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(".-_", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate custom link when enter dot(.), dash(-), underscore(_), number, characters input custom URL slug', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(".-_9t", "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .deleteAllMedia()
            .wait(3000)
    })

    it('Verify generate customize duplicate private link', () => {
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(randomCN, "1", "1")
            .get(".btn").click()
            .get("#react-tabs-0")
            .click()
            .get(".rrt-title").should('have.text', 'Great! You’ve successfully created a new secure link.')
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    cy.log("Response", res);
                    expect(res.status).to.eq(200);
                })
            })
            .wait(2000)
            .addCustomLink(randomCN, "1", "1")
            .get(".btn").click()
            .get(".rrt-title").should('have.text', 'Opps! Unable to create new custom private link due to duplicate slug.')
            .get("#react-tabs-0")
            .click()
            .deleteAllMedia()
            .wait(3000)


    })
})

describe('Verify delete, de-active private link in table action', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
    });

    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it('Delete private link', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .get(".media-list-subtitle").should('have.text', 'demo.txt')
            .wait(2000)
        cy.protectFilelistView()
            .then(() => {
                cy.get('[value="Auto-generate new link"]')
                    .click()
                    .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
                    .should('have.attr', 'href')
                    .get('[title="Delete link"] > .fa')
                    .click()
                    .get("button.rrt-button:nth-child(1)")
                    .click({ force: true })
                    .get(".rrt-title").should('have.text', 'Cool! You’ve successfully deleted the link')
                    .wait(3000)
            })
        cy.deleteAllMedia()
    })

    it('De-active private link', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .get(".media-list-subtitle").should('have.text', 'demo.txt')
            .wait(2000)
        cy.protectFilelistView()
            .then(() => {
                cy.get('[value="Auto-generate new link"]')
                    .click()
                    .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
                    .should('have.attr', 'href')
                    .get('[title="De-activate"] > .fa')
                    .click()
                    .get("div.ReactVirtualized__Table__rowColumn:nth-child(2)")
                    .find('i')
                    .should('have.class', 'pda-inactive-link')
                    .wait(2000)
                    .get('[title="De-activate"] > .fa')
                    .click()
                    .get("div.ReactVirtualized__Table__rowColumn:nth-child(2)")
                    .find('i')
                    .should('have.class', 'pda-active-link')
                    .wait(2000)
            })
        cy.deleteAllMedia()
    })

})