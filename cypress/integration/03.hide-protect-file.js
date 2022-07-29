const user = require("../fixtures/user.json");
const upload = require("../fixtures/file.json")
const selectors = require("../fixtures/selectors.json")
const usr = Cypress.env("user");
const pas = Cypress.env("pass");


describe("Login account user role author", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.reload();
    cy.wait(2000);
  });

  afterEach(() => {
    cy.login(usr, pas)
      .deleteAllMedia()
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
    cy.wait(4000);
    cy.log("Done");
  });

  it("Use account user role other author", () => {
    //Check When Disable Hide Protect File
    cy.login(user.author.user, user.pass)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.author2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.author2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });

  it("Use account user role editor", () => {
    //Check When Disable Hide Protect File
    cy.login(user.author.user, user.pass)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.editor.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.editor.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });

  it("Use account user role admin", () => {
    //Check When Disable Hide Protect File
    cy.login(user.author.user, user.pass)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.admin2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.admin2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });
});

describe("Login account user role editor", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.reload();
    cy.wait(2000);
  });

  afterEach(() => {
    cy.login(usr, pas)
      .deleteAllMedia()
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
    cy.wait(4000);
    cy.log("Done");
  });

  it("Use account user role other author", () => {
    //Check When Disable Hide Protect File
    cy.login(user.editor.user, user.pass)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.editor2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.editor2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });

  it("Use account user role editor", () => {
    //Check When Disable Hide Protect File
    cy.login(user.editor.user, user.pass)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.author.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.author.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });

  it("Use account user role admin", () => {
    //Check When Disable Hide Protect File
    cy.login(user.editor.user, user.pass)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.admin2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.admin2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });
});

describe("Login account user role admin", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.reload();
    cy.wait(2000);
  });

  afterEach(() => {
    cy.login(usr, pas)
      .deleteAllMedia()
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
    cy.wait(4000);
    cy.log("Done");
  });

  it("Use account user role other author", () => {
    //Check When Disable Hide Protect File
    cy.login(usr, pas)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.author2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.author2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });

  it("Use account user role editor", () => {
    //Check When Disable Hide Protect File
    cy.login(usr, pas)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.editor.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.editor.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });

  it("Use account user role admin", () => {
    //Check When Disable Hide Protect File
    cy.login(usr, pas)
      //Unprotect file
      .addNewMedia()
      .upload(upload.img.jpeg)

      //Protect file
      .addNewMedia()
      .upload(upload.img.jpg)
      .protectFilelistView()

    cy.logout()
      .wait(2000)

    cy.login(user.admin2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)

    //Check When Enable Hide Protect File
    cy.login(usr, pas)
      .visit(selectors.plugin.pdaGold)
      .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
      .click({ force: true })
      .get("#submit")
      .click()
      .wait(2000)

    cy.logout()
      .wait(2000)


    cy.login(user.admin2.user, user.pass)
      .visit(selectors.pages.mediaListView)
      .wait(4000)

    cy.logout()
      .wait(2000)
  });
});
