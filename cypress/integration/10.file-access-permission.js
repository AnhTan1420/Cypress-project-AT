const usr = Cypress.env("user");
const pas = Cypress.env("pass");
const selectors = require("../fixtures/selectors.json");
const user = require("../fixtures/user.json");
const upload = require("../fixtures/file.json")

describe('Verify file access permission', () => {
    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.wait(1000);
        cy.login(usr, pas)

    })

    afterEach(() => {
        cy.wait(2000);
        cy.log("Done");
    })

    it('Verify Admin Users', () => {
        cy.setFileAccessPermission('Admin users').
            addNewMedia().
            upload(upload.img.jpg).
            protectFilelistView().
            then((url) => {

                //Verify Author
                cy.logout().
                    login(user.author.user, user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Author Role').to.be.a('String')
                    }).

                    //Verify Editor
                    logout().
                    login(user.editor.user, user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Editor Role').to.be.a('String')
                    }).

                    //Verify Other Admin
                    logout().
                    login(user.admin2.user, user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    }).then(() => {
                        expect('Can not access protect file with Other Admin Role').to.be.a('String')
                    }).

                    //Verify Unauthorize User
                    logout().
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Unauthorize User').to.be.a('String')
                    });

            }).
            login(usr, pas).
            visit(selectors.pages.mediaListView).
            deleteAllMedia();


    })

    it('Verify The file Author', () => {
        var arrayRoles = ['editor', 'author', 'editor2', 'author2'];
        var randomRole = Math.floor(Math.random() * 4);

        var randomOtherRoles = function () {
            var result = Math.floor(Math.random() * 4);
            return (result !== randomRole) ? result : randomOtherRoles();
        }

        var randomAnotherRoles = function () {
            var result = Math.floor(Math.random() * 4);
            return (result !== randomRole) ? result : randomOtherRoles();
        }

        var randomOtherRole = randomOtherRoles();
        var randonAnotherRole = randomAnotherRoles();


        cy.setFileAccessPermission("The file's author").

            //Admin
            addNewMedia().
            upload(upload.img.jpg).
            protectFilelistView().
            then((url) => {

                //Verify Author
                cy.logout().
                    login(user.author.user, user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Author Role').to.be.a('String')
                    }).wait(3000).

                    //Verify Editor
                    logout().
                    login(user.editor.user, user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Editor Role').to.be.a('String')
                    }).wait(3000).

                    //Verify Other Admin
                    logout().
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Other Admin Role').to.be.a('String')
                    });
            }).
            login(usr, pas).
            visit(selectors.pages.mediaListView).
            deleteAllMedia();

        //Author & Editor
        cy.logout().wait(1000).
            login(arrayRoles[randomRole], user.pass).
            addNewMedia().
            upload(upload.img.jpg).
            protectFilelistView().
            get('.pda-orginal-link').
            should('be.visible').
            should('have.attr', 'href').
            then((url) => {
                cy.request(url).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    }).then(() => {
                        expect('Can access protect file').to.be.a('String')
                    }).

                    //Verify Author
                    logout().
                    login(arrayRoles[randomOtherRole], user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file').to.be.a('String')
                    }).wait(3000).

                    //Verify Editor
                    logout().
                    login(arrayRoles[randonAnotherRole], user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file').to.be.a('String')
                    }).wait(3000).

                    //Verify Admin
                    logout().
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Admin Role').to.be.a('String')
                    });
            }).
            login(usr, pas).
            visit(selectors.pages.mediaListView).
            deleteAllMedia();
    })

    it('Verify Logged-in user', () => {
        cy.setFileAccessPermission('Logged-in users').
            addNewMedia().
            upload(upload.img.jpg).
            protectFilelistView().
            then((url) => {

                //Verify Author
                cy.logout().
                    login(user.author.user, user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    }).then(() => {
                        expect('Can access protect file with Author Role').to.be.a('String')
                    }).

                    //Verify Editor
                    logout().
                    login(user.editor.user, user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    }).then(() => {
                        expect('Can access protect file with Editor Role').to.be.a('String')
                    }).

                    //Verify Other Admin
                    logout().
                    login(user.editor.user, user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    }).then(() => {
                        expect('Can access protect file with Other Admin Role').to.be.a('String')
                    }).

                    //Verify Unauthorize User
                    logout().
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Unauthorize User').to.be.a('String')
                    });
            }).
            login(usr, pas).
            visit(selectors.pages.mediaListView).
            deleteAllMedia();
    })

    it('Verify No one user roles', () => {
        cy.setFileAccessPermission('No user roles')
            .addNewMedia()
            .upload(upload.img.jpeg)
            .protectFilelistView()
            .then((url) => {

                //Verify Author
                cy.logout()
                    .login(user.author.user, user.pass)
                    .request({ url, failOnStatusCode: false })
                    .then((res) => {
                        expect(res.status).to.eq(404)
                    }).then(() => {
                        expect('Can not access protect files with Author Role').to.be.a('String')
                    }).logout()

                    //Verify Editor
                    .login(user.editor.user, user.pass)
                    .request({ url, failOnStatusCode: false })
                    .then((res) => {
                        expect(res.status).to.eq(404)
                    }).then(() => {
                        expect('Can not access protect files with Editor Role').to.be.a('String')
                    }).

                    //Verify Unauthorize User
                    logout().
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect file with Unauthorize User').to.be.a('String')
                    });

            }).
            login(usr, pas).
            visit(selectors.pages.mediaListView).
            deleteAllMedia();
    })

    it('Verify Anyone', () => {
        cy.setFileAccessPermission('Anyone')
            .addNewMedia()
            .upload(upload.img.jpeg)
            .protectFilelistView()
            .then((url) => {


                //Verify Other Admin
                cy.logout()
                    .login(user.admin2.user, user.pass)
                    .request({ url, failOnStatusCode: false })
                    .then((res) => {
                        expect(res.status).to.eq(200)
                    }).then(() => {
                        expect('Can access protect files with Other Admin Role').to.be.a('String')
                    })
                    .logout()

                    //Verify Author
                    .login(user.author.user, user.pass)
                    .request({ url, failOnStatusCode: false })
                    .then((res) => {
                        expect(res.status).to.eq(200)
                    }).then(() => {
                        expect('Can access protect files with Author Role').to.be.a('String')
                    })
                    .logout()

                    //Verify Editor
                    .login(user.editor.user, user.pass)
                    .request({ url, failOnStatusCode: false })
                    .then((res) => {
                        expect(res.status).to.eq(200)
                    }).then(() => {
                        expect('Can access protect files with Editor Role').to.be.a('String')
                    })
                    .logout()

                    //Verify Unauthorize User
                    .request({ url, failOnStatusCode: false })
                    .then((res) => {
                        expect(res.status).to.eq(200)
                    }).then(() => {
                        expect('Can access protect files with Unauthorize User').to.be.a('String')
                    })
            }).
            login(usr, pas).
            visit(selectors.pages.mediaListView).
            deleteAllMedia();
    })

    it('Verify Choose Custom Roles', () => {
        var arrayRoles = ['editor', 'author'];
        var randomRole = Math.floor(Math.random() * 2);

        var randomOtherRoles = function () {
            var result = Math.floor(Math.random() * 2);
            return (result !== randomRole) ? result : randomOtherRoles();
        }

        var randomOtherRole = randomOtherRoles();

        cy.visit(selectors.plugin.pdaGold).
            get('#file_access_permission').
            select('custom_roles').
            get('#pda_role_select2').
            select(arrayRoles[randomRole], { force: true }).
            get('#submit').click().wait(3000).
            addNewMedia().upload(upload.img.jpg).
            protectFilelistView().
            then((url) => {
                cy.logout().
                    login(arrayRoles[randomRole], user.pass).
                    request(url).
                    then((res) => {
                        expect(res.status).to.eq(200);
                    }).then(() => {
                        expect('Can access protect files').to.be.a('String')
                    }).
                    logout().
                    request({ url, failOnStatusCode: false }).
                    login(user.admin2.user, user.pass).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect files').to.be.a('String')
                    }).
                    logout().
                    login(arrayRoles[randomOtherRole], user.pass).
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect files').to.be.a('String')
                    }).
                    logout().
                    request({ url, failOnStatusCode: false }).
                    then((res) => {
                        expect(res.status).to.eq(404);
                    }).then(() => {
                        expect('Can not access protect files').to.be.a('String')
                    })
            }).
            login(usr, pas).
            visit(selectors.pages.mediaListView).
            deleteAllMedia()
    })
})

