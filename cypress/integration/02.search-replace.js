const usr = Cypress.env("user");
const pas = Cypress.env("pass");
const upload = require("../fixtures/file.json");
const selectors = require("../fixtures/selectors.json");

describe("Enable search & replace with image file in post", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.reload();
    cy.login(usr, pas);
    cy.addNewMedia()
  });

  afterEach(() => {
    cy.wait(4000);
    cy.log("Done");
  });

  //PNG File
  it("Verify PNG", () => {
    cy.upload(upload.img.png);
    cy.createPostDelPop("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //JPEG Files
  it("Verify JPEG", () => {
    cy.upload(upload.img.jpeg);
    cy.createPostDelPop("hasago");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasago");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //JPG Files
  it("Verify JPG", () => {
    cy.upload(upload.img.jpg);
    cy.createPostDelPop("hasage");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasage");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //TIF Files
  it("Verify TIF", () => {
    cy.upload(upload.img.tif);
    cy.createPostDelPop("hasaga");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasaga");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //TIFF Files
  it("Verify TIFF", () => {
    cy.upload(upload.img.tiff);
    cy.createPostDelPop("yasuo");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("yasuo");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //GIF Files
  it("Verify GIF", () => {
    cy.upload(upload.img.gif);
    cy.createPostDelPop("yasua");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("yasua");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });
});

describe("Enable search & replace with image file in page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.reload();
    cy.login(usr, pas);
    cy.addNewMedia()
  });

  afterEach(() => {
    cy.wait(4000);
    cy.log("Done");
  });

  //PNG File
  it("Verify PNG", () => {
    cy.upload(upload.img.png);
    cy.createPageDelPop("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //JPEG Files
  it("Verify JPEG", () => {
    cy.upload(upload.img.jpeg);
    cy.createPageDelPop("hasago");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasago");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //JPG Files
  it("Verify JPG", () => {
    cy.upload(upload.img.jpg);
    cy.createPageDelPop("hasage");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasage");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //TIF Files
  it("Verify TIF", () => {
    cy.upload(upload.img.tif);
    cy.createPageDelPop("hasaga");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasaga");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //TIFF Files
  it("Verify TIFF", () => {
    cy.upload(upload.img.tiff);
    cy.createPageDelPop("yasuo");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("yasuo");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //GIF Files
  it("Verify GIF", () => {
    cy.upload(upload.img.gif);
    cy.createPageDelPop("yasua");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("yasua");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });
});

describe("Enable search & replace with text file in post", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
    cy.login(usr, pas);
    cy.addNewMedia()
  });

  afterEach(() => {
    cy.wait(4000);
    cy.log("Done");
  });

  //TXT File
  it("Verify TXT", () => {
    cy.upload(upload.text.txt);
    cy.createPostDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //DOCX File
  it("Verify DOCX", () => {
    cy.upload(upload.text.docx);
    cy.createPostDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //DOC File
  it("Verify DOC", () => {
    cy.upload(upload.text.doc);
    cy.createPostDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //DOCM File
  it("Verify DOCM", () => {
    cy.upload(upload.text.docm);
    cy.createPostDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //XPS File
  it("Verify XPS", () => {
    cy.upload(upload.text.xps);
    cy.createPostDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //OXPS File
  it("Verify OXPS", () => {
    cy.upload(upload.text.oxps);
    cy.createPostDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //ODT File
  it("Verify ODT", () => {
    cy.upload(upload.text.odt);
    cy.createPostDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //PDF File
  it("Verify PDF", () => {
    cy.upload(upload.text.pdf);
    cy.createPostDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });
});

describe("Enable search & replace with text file in page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
    cy.login(usr, pas);
    cy.addNewMedia()
  });

  afterEach(() => {
    cy.wait(4000);
    cy.log("Done");
  });

  //TXT File
  it("Verify TXT", () => {
    cy.upload(upload.text.txt);
    cy.createPageDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //DOCX File
  it("Verify DOCX", () => {
    cy.upload(upload.text.docx);
    cy.createPageDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //DOC File
  it("Verify DOC", () => {
    cy.upload(upload.text.doc);
    cy.createPageDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //DOCM File
  it("Verify DOCM", () => {
    cy.upload(upload.text.docm);
    cy.createPageDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //XPS File
  it("Verify XPS", () => {
    cy.upload(upload.text.xps);
    cy.createPageDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //OXPS File
  it("Verify OXPS", () => {
    cy.upload(upload.text.oxps);
    cy.createPageDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //ODT File
  it("Verify ODT", () => {
    cy.upload(upload.text.odt);
    cy.createPageDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //PDF File
  it("Verify PDF", () => {
    cy.upload(upload.text.pdf);
    cy.createPageDelPopUpFile("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPages)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-file")
      .find("a")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPages();
    cy.deleteAllMedia();
    cy.disableSR();
  });
});

describe("Enable search & replace and enable keep raw urls with image files", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
    cy.login(usr, pas);
    cy.keepRawUrls();
    cy.addNewMedia()
  });

  afterEach(() => {
    cy.keepRawUrls();
    cy.wait(4000);
    cy.log("Done");
  });

  //PNG File
  it("Verify PNG", () => {
    cy.upload(upload.img.png);
    cy.createPostDelPop("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
    
  });

  //JPEG Files
  it("Verify JPEG", () => {
    cy.upload(upload.img.jpeg);
    cy.createPostDelPop("hasago");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasago");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //JPG Files
  it("Verify JPG", () => {
    cy.upload(upload.img.jpg);
    cy.createPostDelPop("hasage");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasage");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //TIF Files
  it("Verify TIF", () => {
    cy.upload(upload.img.tif);
    cy.createPostDelPop("hasaga");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasaga");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //TIFF Files
  it("Verify TIFF", () => {
    cy.upload(upload.img.tiff);
    cy.createPostDelPop("yasuo");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("yasuo");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //GIF Files
  it("Verify GIF", () => {
    cy.upload(upload.img.gif);
    cy.createPostDelPop("yasua");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("yasua");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });
})

describe("Enable search & replace and enable keep raw urls with text files", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
    cy.login(usr, pas);
    cy.keepRawUrls();
    cy.addNewMedia()
  });

  afterEach(() => {
    cy.keepRawUrls();
    cy.wait(4000);
    cy.log("Done");
  });

  //PNG File
  it("Verify PNG", () => {
    cy.upload(upload.img.png);
    cy.createPostDelPop("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasagi");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
    
  });

  //JPEG Files
  it("Verify JPEG", () => {
    cy.upload(upload.img.jpeg);
    cy.createPostDelPop("hasago");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasago");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //JPG Files
  it("Verify JPG", () => {
    cy.upload(upload.img.jpg);
    cy.createPostDelPop("hasage");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasage");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //TIF Files
  it("Verify TIF", () => {
    cy.upload(upload.img.tif);
    cy.createPostDelPop("hasaga");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("hasaga");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //TIFF Files
  it("Verify TIFF", () => {
    cy.upload(upload.img.tiff);
    cy.createPostDelPop("yasuo");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("yasuo");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });

  //GIF Files
  it("Verify GIF", () => {
    cy.upload(upload.img.gif);
    cy.createPostDelPop("yasua");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Unprotect URL').to.be.a('String');
      })
      .wait(5000);
    cy.protectFilelistView();
    cy.enableSR("yasua");
    cy.visit(selectors.pages.allPosts)
      .get(".view")
      .find("a")
      .eq(0)
      .click({ force: true })
      .reload()
      .get(".wp-block-image")
      .find("img")
      .then((link) => {
        cy.request(link.prop("src")).its("status").should("eq", 200);
      }).then(() => {
        expect('Change To Protect URL').to.be.a('String');
      })
      .wait(5000);
    cy.deleteAllPosts();
    cy.deleteAllMedia();
    cy.disableSR();
  });
})


