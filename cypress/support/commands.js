// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";
import "@testing-library/cypress/add-commands";
const selectors = require("../fixtures/selectors.json");

Cypress.Commands.add("login", (username, password) => {
  cy.get("#user_login")
    .type(username)
    .should("have.value", username)
    .get("#user_pass")
    .type(password)
    .should("have.value", password)
    .get("#wp-submit")
    .click({ multiple: true })
    .log();
});

Cypress.Commands.add("logout", () => {
  cy.get("#wp-admin-bar-logout > .ab-item").click({ force: true }).wait(1000)
})

Cypress.Commands.add("upload", (files) => {
  cy.get("#drag-drop-area")
    .selectFile(files, { action: "drag-drop" })
    .wait(2000);
});

Cypress.Commands.add("uploadGridView", (files) => {
  cy.get(".uploader-inline")
    .selectFile(files, { action: "drag-drop" })
    .wait(2000);
});

Cypress.Commands.add("uploadInContent", (files) => {
  cy.get(".uploader-inline-content")
    .selectFile(files, { action: "drag-drop" })
    .wait(7000);
})

Cypress.Commands.add("createPostDelPop", (title) => {
  cy.visit(selectors.pages.newPosts)
    .get(".components-modal__header > button:nth-child(2)")
    .click({ force: true })
    .get(".edit-post-visual-editor__post-title-wrapper")
    .type(title)
    .get(".block-editor-inserter__toggle")
    .click({ force: true })
    .get(".editor-block-list-item-image")
    .click({ force: true })
    .get("button.is-tertiary:nth-child(4)")
    .click({ force: true })
    .get("li.attachment:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
    .click()
    .get(".media-button")
    .click()
    .get(".editor-post-publish-panel__toggle")
    .wait(1000)
    .click()
    .wait(2000)
    .get(
      ".editor-post-publish-panel__header-publish-button > .components-button"
    )
    .wait(1000)
    .click(2000);

  cy.wait(3000);
});

Cypress.Commands.add("createPostDelPopUpFile", (title, content) => {
  content = content || "default";
  cy.visit(selectors.pages.newPosts)
    .get(".components-modal__header > button:nth-child(2)")
    .click({ force: true })
    .get(".edit-post-visual-editor__post-title-wrapper")
    .type(title)
    .get(".block-editor-inserter__toggle")
    .click({ force: true })
    .get(".components-search-control__input")
    .type("file")
    .get(".editor-block-list-item-file")
    .click({ force: true })
    .get("button.is-tertiary:nth-child(4)")
    .click({ force: true })
    .get("li.attachment:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
    .click()
    .get(".media-button")
    .click()
    .get(".editor-post-publish-panel__toggle")
    .wait(1000)
    .click()
    .wait(2000)
    .get(
      ".editor-post-publish-panel__header-publish-button > .components-button"
    )
    .wait(1000)
    .click(2000);

  cy.wait(3000);
});

Cypress.Commands.add("createPageDelPop", (title) => {
  cy.visit(selectors.pages.newPages)
    .get(".components-modal__header > button:nth-child(2)")
    .click({ force: true })
    .get(".edit-post-visual-editor__post-title-wrapper")
    .type(title)
    .get(".block-editor-inserter__toggle")
    .click({ force: true })
    .get(".editor-block-list-item-image")
    .click({ force: true })
    .get("button.is-tertiary:nth-child(4)")
    .click({ force: true })
    .get("li.attachment:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
    .click()
    .get(".media-button")
    .click()
    .get(".editor-post-publish-panel__toggle")
    .wait(1000)
    .click()
    .wait(2000)
    .get(
      ".editor-post-publish-panel__header-publish-button > .components-button"
    )
    .wait(1000)
    .click(2000);

  cy.wait(3000);
});

Cypress.Commands.add("createPageDelPopUpFile", (title) => {
  cy.visit(selectors.pages.newPages)
    .get(".components-modal__header > button:nth-child(2)")
    .click({ force: true })
    .get(".edit-post-visual-editor__post-title-wrapper")
    .type(title)
    .get(".block-editor-inserter__toggle")
    .click({ force: true })
    .get(".components-search-control__input")
    .type("file")
    .get(".editor-block-list-item-file")
    .click({ force: true })
    .get("button.is-tertiary:nth-child(4)")
    .click({ force: true })
    .get("li.attachment:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
    .click()
    .get(".media-button")
    .click()
    .get(".editor-post-publish-panel__toggle")
    .wait(1000)
    .click()
    .wait(2000)
    .get(
      ".editor-post-publish-panel__header-publish-button > .components-button"
    )
    .wait(1000)
    .click(2000);

  cy.wait(3000);
})

Cypress.Commands.add("createPost", (title, content) => {
  content = content || "default";
  cy.visit(selectors.pages.newPosts)
    .get(".edit-post-visual-editor__post-title-wrapper")
    .type(title)
    .get(".block-editor-default-block-appender__content")
    .click()
    .wait(1000)
    .get(".is-root-container")
    .type(content)
    .wait(1000)
    .get(".editor-post-publish-panel__toggle")
    .wait(1000)
    .click()
    .wait(2000)
    .get(
      ".editor-post-publish-panel__header-publish-button > .components-button"
    )
    .wait(1000)
    .click(2000)
    .get(".editor-post-publish-panel__header > .components-button > svg")
    .wait(2000)
    .click({ force: true })
    .wait(2000)
    .get(
      ".interface-complementary-area-header > ul > :nth-child(1) > .components-button"
    )
    .click();
  cy.wait(3000);
});

Cypress.Commands.add("deleteAllPosts", () => {
  cy.visit(selectors.pages.allPosts)
    .get("#cb-select-all-1")
    .click()
    .get("#bulk-action-selector-top")
    .select("Move to Trash")
    .get("#doaction")
    .click();
});

Cypress.Commands.add("deleteAllPages", () => {
  cy.visit(selectors.pages.allPages)
    .get("#cb-select-all-1")
    .click()
    .get("#bulk-action-selector-top")
    .select("Move to Trash")
    .get("#doaction")
    .click();
});

Cypress.Commands.add("deleteAllMedia", () => {
  cy.visit(selectors.pages.mediaListView)
    .get("#cb-select-all-1")
    .click()
    .get("#bulk-action-selector-top")
    .select("Delete permanently")
    .get("#doaction")
    .click()
    .wait(3000);
});

Cypress.Commands.add("disableSR", () => {
  cy.visit(selectors.plugin.pdaGold)
    .get(":nth-child(8) > :nth-child(1) > .pda_switch > .pda-slider")
    .click({ force: true })
    .get("#submit")
    .click();
});

Cypress.Commands.add("enableSR", (title) => {
  cy.visit(selectors.plugin.pdaGold)
    .get(":nth-child(8) > :nth-child(1) > .pda_switch > .pda-slider")
    .click({ force: true })
    .get(
      "#pda-pages-posts-replace > :nth-child(2) > .select2 > .selection > .select2-selection > .select2-selection__rendered"
    )
    .click({force: true})
    .wait(2000)
    .type(title)
    .get("#select2-pda_replaced_pages_select2-results")
    .wait(3000)
    .find("li")
    .eq(0)
    .click({ force: true })
    .get("#submit")
    .click()
    .wait(3000);
});

Cypress.Commands.add("keepRawUrls", () => {
  cy.visit(selectors.plugin.pdaGold)
    .get(":nth-child(28) > :nth-child(1) > .pda_switch > .pda-slider")
    .click({ force: true })
    .wait(2000)
    .get("#submit")
    .click()
    .wait(3000);
});

Cypress.Commands.add("addNewMedia", () => {
  cy.visit(selectors.pages.mediaListView)

  //Click Add New To Upload New Files
  cy.get(".page-title-action").click()
    .wait(3000)
})

Cypress.Commands.add("addNewMediaGrid", () => {
  cy.visit(selectors.pages.mediaGridView)

  //Click Add New To Upload New Files
  cy.get(".page-title-action").click()
    .wait(3000)
})

Cypress.Commands.add("checkProtectedFile", () => {
  cy.get('.pda-orginal-link')
    .then((link) => {
      cy.request(link.prop("href")).its("status").should("eq", 200);
    })
    .wait(3000)
})

Cypress.Commands.add("protectFilelistView", () => {
  cy.visit(selectors.pages.mediaListView)
    .get("#the-list")
    .find("tr")
    .eq(0)
    .within(() => {
      cy.get(".pda-gold-v3-tools").find("a").click();
    });
  cy.get(".pup-form > div > .button").click()
    .get(".rrt-title")
    .contains("Great! You've successfully protected this file.")
    .should("have.text", "Great! You've successfully protected this file.")
    .get('.pda-orginal-link')
    .then((link) => {
      cy.request(link.prop("href")).its("status").should("eq", 200);
    })
    .wait(3000)

});

Cypress.Commands.add("unProtectFilelistView", () => {
  cy.visit(selectors.pages.mediaListView)
    .get("#the-list")
    .find("tr")
    .eq(0)
    .within(() => {
      cy.get(".pda-gold-v3-tools").find("a").click();
    });
  cy.get(".unprotect-btn").click()
    .get(".rrt-title")
    .contains("Great! You've successfully unprotected this file.")
    .should("have.text", "Great! You've successfully unprotected this file.")
    .get('.pda-orginal-link')
    .then((link) => {
      cy.request(link.prop("href")).its("status").should("eq", 200);
    })
    .wait(3000);
});

Cypress.Commands.add("protectFileGridView", () => {
  cy.visit(selectors.pages.mediaGridView)
    .get(".attachments-wrapper")
    .find("li")
    .eq(0)
    .click()
    .get('[type="checkbox"]').check({ force: true })
    .wait(3000)
    .get("#attachment-details-two-column-copy-link")
    .then((link) => {
      cy.request(link.prop("value")).its("status").should("eq", 200);
    })
    .wait(3000)
    .get(".media-modal-close")
    .click({ force: true })
})

Cypress.Commands.add("unProtectFileGridView", () => {
  cy.visit(selectors.pages.mediaGridView)
    .get(".attachments-wrapper")
    .find("li")
    .eq(0)
    .click()
    .get('.pda_wrap_protection_setting :checked').uncheck({ force: true })
    .wait(3000)
    .get("#attachment-details-two-column-copy-link")
    .then((link) => {
      cy.request(link.prop("value")).its("status").should("eq", 200);
    })
    .wait(3000)
    .get(".media-modal-close")
    .click({ force: true })
})

Cypress.Commands.add("setUpProtectContent", () => {
  cy.visit(selectors.pages.newPosts)
    .get(".block-editor-inserter__toggle")
    .click({ force: true })
    .get(".editor-block-list-item-image")
    .click({ force: true })
    .get("button.is-tertiary:nth-child(4)")
    .click({ force: true })
})

Cypress.Commands.add("protectFileInContent", () => {
  cy.get('[type="checkbox"]').check({ force: true })
    .wait(3000)
    .get("#attachment-details-copy-link")
    .then((link) => {
      cy.request(link.prop("value")).its("status").should("eq", 200);
    })
    .wait(3000)

})

Cypress.Commands.add("unProtectFileInContent", () => {
  cy.get('.pda_wrap_protection_setting :checked').uncheck({ force: true })
    .wait(3000)
    .get("#attachment-details-copy-link")
    .then((link) => {
      cy.request(link.prop("value")).its("status").should("eq", 200);
    })
    .wait(3000)
})

Cypress.Commands.add("protectUseBulkAction", () => {
  cy.visit(selectors.pages.mediaListView)
    .get("#cb-select-all-1")
    .click()
    .get("#bulk-action-selector-top")
    .select("Protect files")
    .get("#doaction")
    .click()
    .wait(3000)
   
})

Cypress.Commands.add("unProtectUseBulkAction", () => {
  cy.visit(selectors.pages.mediaListView)
    .get("#cb-select-all-1")
    .click()
    .get("#bulk-action-selector-top")
    .select("Unprotect files")
    .get("#doaction")
    .click()
    .wait(3000)
    .get('span[title= "This file is unprotected"]').debug().should('have.value', '')
    .wait(3000)
})

Cypress.Commands.add("addCustomLink", (slugURL, limit, expiry) => {
  cy.get("input.button:nth-child(2)").click()
    .wait(2000)
    .get(".pda-textarea-field").type(slugURL)
    .get(".pda_wrap_form_custom_private_link > div:nth-child(4) > div:nth-child(2) > input:nth-child(1)").type(limit, { force: true })
    .get(".pda_wrap_form_custom_private_link > div:nth-child(5) > div:nth-child(2) > input:nth-child(1)").type(expiry, { force: true })

})

Cypress.Commands.add("clickPrivateUrl", () => {
  cy.get('[value="Auto-generate new link"]').
    click().
    get('[style="flex: 0 1 600px; overflow: hidden;"] > a').
    click().
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

Cypress.Commands.add("clickPrivateLinkIP", () => {
  cy.get('[value="Auto-generate new link"]').
    click().
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
    })
})

Cypress.Commands.add("addIP", (IP) => {
  cy.visit(selectors.plugin.ipRestrict)
    .get("#pda_gold_ip_block_tag").type(IP).should('have.value', IP)
    .get("#pda_gold_ip_block_form > p:nth-child(8) > input:nth-child(1)").click()
    .wait(3000)
})

Cypress.Commands.add("delIP", () => {
  cy.visit(selectors.plugin.ipRestrict)
    .get("#pda_gold_ip_block_tagsinput > span > a").click()
    .get("#pda_gold_ip_block_form > p:nth-child(8) > input:nth-child(1)").click()
    .wait(3000)
})

Cypress.Commands.add("enableGenerate", () => {
  cy.visit(selectors.plugin.pdaGold)
    .get(".pda_v3_settings_table > tbody:nth-child(1) > tr:nth-child(13) > td:nth-child(1) > label:nth-child(1) > span:nth-child(2)")
    .click({ force: true })
    .get("#submit")
    .click()
})

Cypress.Commands.add("enableForceDownload", () => {
  cy.visit(selectors.plugin.pdaGold)
    .get(":nth-child(14) > :nth-child(1) > .pda_switch > .pda-slider")
    .click({ force: true })
    .get("#submit")
    .click()
    .wait(3000);
})

Cypress.Commands.add("enableAutoProtectRoles", (role) => {
  cy.visit(selectors.plugin.pdaGold)
    .wait(2000)
    .get('#pda_auto_protect_new_file')
    .check({ force: true })
    .get('#pda_roles_auto_protect_new_file')
    .check({ force: true })
    .get('#pda_auto_protect_new_file_select2')
    .select(role, { force: true })
    .wait(3000)
})

Cypress.Commands.add("enableAutoProtectFiles", (file) => {
  cy.visit(selectors.plugin.pdaGold)
    .wait(2000)
    .get('#pda_auto_protect_new_file')
    .check({ force: true })
    .get("#pda_types_auto_protect_new_file")
    .check({ force: true })
    .get("#pda_types_auto_protect_new_file_select2")
    .select(file, { force: true })
    .wait(3000)
})

Cypress.Commands.add("enableAutoProtectMultipleFiles", (files) => {
  cy.get("#pda-grant-access-file-types > .select2 > .selection > .select2-selection > .select2-selection__rendered")
    .click({ force: true })
    .type(files).wait(1000)
    .get("#select2-pda_types_auto_protect_new_file_select2-results")
    .find('li').click({ force: true })
    
})

Cypress.Commands.add("disableAutoProtect", () => {
  cy.visit(selectors.plugin.pdaGold)
    .get('#pda_auto_protect_new_file')
    .uncheck({ force: true })
    .get('#pda_roles_auto_protect_new_file')
    .uncheck({ force: true })
    .get("#pda_types_auto_protect_new_file")
    .uncheck({ force: true })
    .get("#submit")
    .click()
})

Cypress.Commands.add("setFileAccessPermission", (permission) => {
  cy.visit(selectors.plugin.pdaGold)
    .get("#file_access_permission")
    .select(permission, {force: true})
    .should('contain', permission)
    .get('#submit')
    .click()
    .wait(3000)
})

Cypress.Commands.add('deactivatePlugin', (title) => {
  cy.get(`a[aria-label="Deactivate ${title}"]`).
  click({ force: true }).wait(1000);
});

Cypress.Commands.add('deletePlugin', (title) => {
  cy.get(`a[aria-label="Delete ${title}"]`).
  click({ force: true }).wait(5000);
});

Cypress.Commands.add('activatePlugin', (title) => {
  cy.get(`a[aria-label="Activate ${title}"]`).
  click({ force: true }).wait(1000);
});


Cypress.Commands.add("paste", { prevSubject: true }, (selector, pastePayload) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
  cy.wrap(selector).then($destination => {
    const pasteEvent = Object.assign(new Event("paste", { bubbles: true, cancelable: true }), {
      clipboardData: {
        getData: () => pastePayload
      }
    });
    $destination[0].dispatchEvent(pasteEvent);
  });
});

