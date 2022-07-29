const upload = require("../fixtures/file.json");
const selectors = require("../fixtures/selectors.json");
const usr = Cypress.env("user");
const pas = Cypress.env("pass");
var randomCN = Math.random().toString(16).slice(2, 7);


describe('Verify restricttion access private link when click button "Auto-generate new link"', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.visit(selectors.plugin.pdaGold)
        cy.addIP("117.3.38.118")
        cy.wait(1000)
    });

    afterEach(() => {
        cy.deleteAllMedia();
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify image file', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.png)
            .protectFilelistView()
            .clickPrivateLinkIP()

    })

    it('Verify video file', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .clickPrivateLinkIP()

    })

    it('Verify text file', () => {
        //Verify TXT
        cy.addNewMedia()
            .upload(upload.text.txt)
            .protectFilelistView()
            .clickPrivateLinkIP()

    })

    it('Verify audio file', () => {
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .clickPrivateLinkIP()

    })
})

describe('Verify restriction access private link when enable generate download link once protected', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.visit(selectors.plugin.pdaGold)
        cy.enableGenerate()
        cy.wait(3000)
        cy.addIP("117.3.38.118")
        cy.wait(1000)
    });

    afterEach(() => {
        cy.deleteAllMedia();
        cy.enableGenerate()
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify image file', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            })
            .wait(2000)

    })

    it('Verify video file', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            })
            .wait(2000)

    })

    it('Verify text file', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            })
            .wait(2000)

    })

    it('Verify audio file', () => {
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            })
            .wait(2000)

    })
})

describe('Verify restriction access private link when generate "Customize new link"', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.visit(selectors.plugin.pdaGold)
        cy.addIP("117.3.38.118")
        cy.wait(1000)
    });

    afterEach(() => {
        cy.deleteAllMedia();
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify image file', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            })
            .wait(2000)

    })

    it('Verify video file', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .addCustomLink(randomCN + "2", "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            })
            .wait(2000)

    })

    it('Verify text file', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .protectFilelistView()
            .addCustomLink(randomCN + "3", "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            })
            .wait(2000)

    })

    it('Verify audio file', () => {
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .addCustomLink(randomCN + "4", "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    });
            })
            .wait(2000)

    })
})

describe('Verify access private link when click button "Auto-generate new link"', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.visit(selectors.plugin.pdaGold)
        cy.addIP("117.3.38.118")
        cy.delIP()
        cy.wait(1000)
    });

    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify image file', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.png)
            .protectFilelistView()
            .get('[value="Auto-generate new link"]').
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
                });
            })

    })

    it('Verify video file', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .get('[value="Auto-generate new link"]').
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
                });
            })

    })

    it('Verify text file', () => {
        //Verify TXT
        cy.addNewMedia()
            .upload(upload.text.txt)
            .protectFilelistView()
            .get('[value="Auto-generate new link"]').
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
                });
            })

    })

    it('Verify audio file', () => {
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .get('[value="Auto-generate new link"]').
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
                });
            })

    })
})

describe('Verify access private link when enable generate download link once protected', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.visit(selectors.plugin.pdaGold)
        cy.enableGenerate()
        cy.wait(3000)
        cy.addIP("117.3.38.118")
        cy.delIP()
        cy.wait(1000)
    });

    afterEach(() => {
        cy.enableGenerate()
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify image file', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            })
            .wait(2000)

    })

    it('Verify video file', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            })
            .wait(2000)

    })

    it('Verify text file', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            })
            .wait(2000)

    })

    it('Verify audio file', () => {
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            })
            .wait(2000)

    })
})

describe('Verify access private link when generate "Customize new link"', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.visit(selectors.plugin.pdaGold)
        cy.addIP("117.3.38.118")
        cy.delIP()
        cy.wait(1000)
    });

    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify image file', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            })
            .wait(2000)

    })

    it('Verify video file', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .addCustomLink(randomCN + "2", "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            })
            .wait(2000)

    })

    it('Verify text file', () => {
        cy.addNewMedia()
            .upload(upload.text.txt)
            .protectFilelistView()
            .addCustomLink(randomCN + "3", "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            })
            .wait(2000)

    })

    it('Verify audio file', () => {
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .addCustomLink(randomCN + "4", "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
            should('have.attr', 'href').
            then((url) => {
                cy.request({
                    url,
                    followRedirect: false,
                    timeout: 5000,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            })
            .wait(2000)

    })
})


