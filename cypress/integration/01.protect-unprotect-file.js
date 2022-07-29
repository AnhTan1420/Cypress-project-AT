const upload = require("../fixtures/file.json");
const selectors = require("../fixtures/selectors.json");
const usr = Cypress.env("user");
const pas = Cypress.env("pass");

describe("Protect & Unprotect file in List View", () => {
    beforeEach(() => {
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

    it("Verify protected & unprotected image file", () => {
        //Verify PNG
        cy.addNewMedia()
        cy.upload(upload.img.png)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia();

        //Verify JPG
        cy.addNewMedia()
        cy.upload(upload.img.jpg)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia();

        //Verify JPEG
        cy.addNewMedia()
        cy.upload(upload.img.jpeg)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia();

        //Verify GIF
        cy.addNewMedia()
        cy.upload(upload.img.gif)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia();
    });

    it("Verify protected & unprotected text file", () => {
        //Verify DOCX
        cy.addNewMedia()
        cy.upload(upload.text.docx)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

        //Verify TXT
        cy.addNewMedia()
        cy.upload(upload.text.txt)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

        //Verify XPS
        cy.addNewMedia()
        cy.upload(upload.text.xps)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

        //Verify OXPS
        cy.addNewMedia()
        cy.upload(upload.text.oxps)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

        //Verify PDF
        cy.addNewMedia()
        cy.upload(upload.text.pdf)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()


    })

    it("Verify protected & uprotected video file", () => {
        //Verify MP4
        cy.addNewMedia()
        cy.upload(upload.video.mp4)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

        //Verify M4V
        cy.addNewMedia()
        cy.upload(upload.video.m4v)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

        //Verify WEBM
        cy.addNewMedia()
        cy.upload(upload.video.webm)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

        //Verify OGV
        cy.addNewMedia()
        cy.upload(upload.video.ogv)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

        //Verify MKV
        cy.addNewMedia()
        cy.upload(upload.video.mkv)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()

    })

    it("Verfy protected & unprotected audio file", () => {
        //Verify MP3
        cy.addNewMedia()
        cy.upload(upload.audio.mp3)
            .protectFilelistView()
            .unProtectFilelistView()
            .deleteAllMedia()
    })
});

describe("Protect & Unprotect file in Grid View", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.clearCookies()
        cy.clearLocalStorage();
        cy.reload()
        cy.login(usr, pas)
    })

    afterEach(() => {
        cy.wait(3000)
        cy.log("done")
    })

    it("Verify protected & unprotected image file", () => {
        //Verify PNG 
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.img.png)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify JPG
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.img.png)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify JPEG
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.img.png)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify GIF
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.img.png)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

    })

    it("Verify protected & unprotected text file", () => {
        //Verify TXT
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.text.txt)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify DOCX
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.text.docx)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify DOC
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.text.doc)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify DOCM
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.text.docm)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify XPS
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.text.xps)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify OXPS
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.text.oxps)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify PDF 
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.text.pdf)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()
    })

    it("Verify protected & unprotected video file", () => {
        //Verify MP4 
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.video.mp4)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify WEBM
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.video.webm)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Veridy M4V
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.video.m4v)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify OGV 
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.video.ogv)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()

        //Verify MKV
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.video.mkv)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()
    })

    it("Verify protected & unprotected audio file", () => {
        //Verify MP3 
        cy.addNewMediaGrid()
        cy.uploadGridView(upload.audio.mp3)
            .protectFileGridView()
            .unProtectFileGridView()
            .deleteAllMedia()
    })
})

describe("Protect & Unprotect file in the content of edit post", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.clearCookies()
        cy.clearLocalStorage();
        cy.reload()
        cy.login(usr, pas)
    })

    afterEach(() => {
        cy.wait(3000)
        cy.log("done")
    })

    it("Verify protected & unprotected image file", () => {
        //Verify PNG
        cy.setUpProtectContent()
            .uploadInContent(upload.img.png)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify JPG 
        cy.setUpProtectContent()
            .uploadInContent(upload.img.jpg)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify JPEG
        cy.setUpProtectContent()
            .uploadInContent(upload.img.jpeg)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify GIF
        cy.setUpProtectContent()
            .uploadInContent(upload.img.gif)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

    })

    it("Verify protected & unprotected text file", () => {
        //Verify TXT 
        cy.setUpProtectContent()
            .uploadInContent(upload.text.txt)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify DOCX  
        cy.setUpProtectContent()
            .uploadInContent(upload.text.docx)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify DOC 
        cy.setUpProtectContent()
            .uploadInContent(upload.text.doc)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify DOCM
        cy.setUpProtectContent()
            .uploadInContent(upload.text.docm)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify XPS
        cy.setUpProtectContent()
            .uploadInContent(upload.text.xps)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify OXPS 
        cy.setUpProtectContent()
            .uploadInContent(upload.text.oxps)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify PDF 
        cy.setUpProtectContent()
            .uploadInContent(upload.text.pdf)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()
    })

    it("Verify protected & unprotected video file", () => {
        //Verify MP4
        cy.setUpProtectContent()
            .uploadInContent(upload.video.mp4)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify WEBM
        cy.setUpProtectContent()
            .uploadInContent(upload.video.webm)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify M4V
        cy.setUpProtectContent()
            .uploadInContent(upload.video.m4v)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify OGV
        cy.setUpProtectContent()
            .uploadInContent(upload.video.ogv)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

        //Verify MKV
        cy.setUpProtectContent()
            .uploadInContent(upload.video.mp4)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()

    })

    it("Verify protected & unprotected audio file", () => {
        //Verify MP3
        cy.setUpProtectContent()
            .uploadInContent(upload.audio.mp3)
            .protectFileInContent()
            .unProtectFileInContent()
        cy.deleteAllMedia()
    })
})

describe("Protect & Unprotect multiple files by using bulk actions", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.reload()
        cy.login(usr, pas)
    })

    afterEach(() => {
        cy.wait(3000)
        cy.log("done")
    })

    it("Verify protect & unprotect 3 files", () => {
        cy.addNewMedia()
            .upload(upload.img.png)
            .upload(upload.video.mp4)
            .upload(upload.audio.mp3)
        cy.protectUseBulkAction()
            .get('[title= "This file is protected"]').each(function (row, i) {
                expect(i).to.be.lessThan(3)
            })
        cy.unProtectUseBulkAction()
        cy.deleteAllMedia()
    })

    it("Verify protect & unprotect 5 files", () => {
        cy.addNewMedia()
            .upload(upload.img.png)
            .upload(upload.video.mp4)
            .upload(upload.audio.mp3)
            .upload(upload.img.png)
            .upload(upload.video.mp4)
        cy.protectUseBulkAction()
            .get('[title= "This file is protected"]').each(function (row, i) {
                expect(i).to.be.lessThan(5)
            })
        cy.unProtectUseBulkAction()
        cy.deleteAllMedia()
    })

    it("Verify protect & unprotect 7 files", () => {
        cy.addNewMedia()
            .upload(upload.img.png)
            .upload(upload.video.mp4)
            .upload(upload.audio.mp3)
            .upload(upload.img.png)
            .upload(upload.video.mp4)
            .upload(upload.audio.mp3)
            .upload(upload.img.png)
        cy.protectUseBulkAction()
            .get('[title= "This file is protected"]').each(function (row, i) {
                expect(i).to.be.lessThan(7)
            })
        cy.unProtectUseBulkAction()
        cy.deleteAllMedia()
    })

    it("Verify protect & unprotect 9 files", () => {
        cy.addNewMedia()
            .upload(upload.img.png)
            .upload(upload.video.mp4)
            .upload(upload.audio.mp3)
            .upload(upload.img.png)
            .upload(upload.video.mp4)
            .upload(upload.audio.mp3)
            .upload(upload.img.png)
            .upload(upload.video.mp4)
            .upload(upload.audio.mp3)
        cy.protectUseBulkAction()
            .get('[title= "This file is protected"]').each(function (row, i) {
                expect(i).to.be.lessThan(9)
            })
        cy.unProtectUseBulkAction()
        cy.deleteAllMedia()
    })
})

describe("Protect & Unprotect file by click button", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.login(usr, pas);
    })
    afterEach(() => {
        cy.wait(3500);
        cy.log("Done");
    });

    it("Verify protect & unprotect file by button", () => {

        cy.addNewMedia()
            .upload(upload.img.jpg)
        cy.visit(selectors.pages.mediaListView)
            .get(".pda_protect")
            .find("a")
            .eq(0)
            .click({ force: true })
            .wait(3000)
            .get('span[title= "This file is protected"]').debug().should('have.value', '')
            .get(".toast-message").contains("Great! You've successfully protected this file.")
            .wait(2000)
            .get("#the-list")
            .find("tr")
            .eq(0)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            })
            .get('.pda-orginal-link')
            .then((link) => {
                cy.request(link.prop("href")).its("status").should("eq", 200);
            })
            .get(".close_btn > .fa").click()
            .wait(5000)
            .get(".pda_protect").find('a').eq(0).should("be.visible")
            .click({ force: true })
        cy.get('span[title= "This file is unprotected"]').debug().should('have.value', '')
            .get(".toast-message").contains("Great! You've successfully unprotected this file.")
            .wait(2000)
            .get("#the-list")
            .find("tr")
            .eq(0)
            .within(() => {
                cy.get(".pda-gold-v3-tools").find("a").click();
            })
            .get('.pda-orginal-link')
            .then((link) => {
                cy.request(link.prop("href")).its("status").should("eq", 200);
            })
            .wait(5000)
        cy.deleteAllMedia()

    })
})

describe('Verify tick this box to protect upcoming file uploads', () => {
    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.login(usr, pas);
    })

    afterEach(() => {
        cy.wait(2000)
        cy.log("Done")
    })

    it('Verify tick this box to protect upcoming file uploads', () => {
        cy.visit(selectors.pages.uploadMediaList)
          .get("#pda_protect_media_upload")
          .check({force: true})
          .upload(upload.img.jpg)
          .upload(upload.text.txt)
          .upload(upload.video.webm)
        cy.visit(selectors.pages.mediaListView)
          .get('[title= "This file is protected"]').each(function (row, i) {
            expect(i).to.be.lessThan(3)
        }).deleteAllMedia()
       

    })
})