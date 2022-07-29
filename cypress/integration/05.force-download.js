const usr = Cypress.env("user");
const pas = Cypress.env("pass");
const upload = require("../fixtures/file.json");
var randomCN = Math.random().toString(16).slice(2, 7);


describe('Verify generate private urls by click button auto-generate', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.enableForceDownload();
    });

    afterEach(() => {
        cy.enableForceDownload()
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify click private urls download image files', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.png)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

        //Verify JPG
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

        //Verify JPEG
        cy.addNewMedia()
            .upload(upload.img.jpeg)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

        //Verify GIF
        cy.addNewMedia()
            .upload(upload.img.gif)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()
    })

    it('Verify click private urls download video files', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

        //Verify WEBM
        cy.addNewMedia()
            .upload(upload.video.webm)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

        //Verify M4V
        cy.addNewMedia()
            .upload(upload.video.m4v)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

        //Verify MOV
        cy.addNewMedia()
            .upload(upload.video.mov)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()
    })

    it('Verify click private urls download audio files', () => {
        //Verify MP3
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

    })

    it('Verify click private urls download text files', () => {
        //Verify TXT
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

        //Verify TXT
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .clickPrivateUrl()
            .deleteAllMedia()

    })
})

describe('Verify generate private urls by enable generate once protected', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.enableGenerate();
        cy.wait(3000)
        cy.enableForceDownload();
    });

    afterEach(() => {
        cy.enableGenerate()
        cy.wait(3000)
        cy.enableForceDownload()
        cy.wait(3500);
        cy.log("Done");
    });

    after(() => {
        cy.enableGenerate()
    })

    it('Verify click private urls download image files', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.png)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

        //Verify JPG
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

        //Verify JPEG
        cy.addNewMedia()
            .upload(upload.img.jpeg)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

        //Verify GIF
        cy.addNewMedia()
            .upload(upload.img.gif)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()
    })

    it('Verify click private urls download video files', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

        //Verify WEBM
        cy.addNewMedia()
            .upload(upload.video.webm)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

        //Verify M4V
        cy.addNewMedia()
            .upload(upload.video.m4v)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

        //Verify MOV
        cy.addNewMedia()
            .upload(upload.video.mov)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()
    })

    it('Verify click private urls download audio files', () => {
        //Verify MP3
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

    })

    it('Verify click private urls download text files', () => {
        //Verify TXT
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

        //Verify TXT
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
              cy.request({
                url,
                followRedirect: false,
                timeout: 5000,
              }).
                then((res) => {
                  expect(res.status).to.eq(200);
                });
            })
            .deleteAllMedia()

    })
})

describe('Verify generate private urls by click button customize link', () => {
    beforeEach(() => {
        cy.viewport(1280, 824);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
        cy.enableForceDownload();
    });

    afterEach(() => {
        cy.enableForceDownload()
        cy.wait(3500);
        cy.log("Done");
    });

    it('Verify click private urls download image files', () => {
        //Verify PNG
        cy.addNewMedia()
            .upload(upload.img.png)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

        //Verify JPG
        cy.addNewMedia()
            .upload(upload.img.jpg)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

        //Verify JPEG
        cy.addNewMedia()
            .upload(upload.img.jpeg)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

        //Verify GIF
        cy.addNewMedia()
            .upload(upload.img.gif)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()
    })

    it('Verify click private urls download video files', () => {
        //Verify MP4
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

        //Verify WEBM
        cy.addNewMedia()
            .upload(upload.video.webm)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

        //Verify M4V
        cy.addNewMedia()
            .upload(upload.video.m4v)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

        //Verify MOV
        cy.addNewMedia()
            .upload(upload.video.mov)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()
    })

    it('Verify click private urls download audio files', () => {
        //Verify MP3
        cy.addNewMedia()
            .upload(upload.audio.mp3)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

    })

    it('Verify click private urls download text files', () => {
        //Verify TXT
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

        //Verify TXT
        cy.addNewMedia()
            .upload(upload.video.mp4)
            .protectFilelistView()
            .addCustomLink(randomCN, "{backspace}", "{backspace}")
            .get(".btn").click()
            .wait(2000)
            .get("#react-tabs-0")
            .click()
            .get('[style="flex: 0 1 600px; overflow: hidden;"] > a')
            .click()
            .should('have.attr', 'href')
            .then((url) => {
                cy.request({
                  url,
                  followRedirect: false,
                  timeout: 5000,
                }).
                  then((res) => {
                    expect(res.status).to.eq(200);
                  });
              })
            .deleteAllMedia()

    })
})