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

import { faker } from '@faker-js/faker';
import UsuarioPage from '../support/pages/usuario.page';


Cypress.Commands.add('deletarUsuario', function () {
    var paginaUsuario = new UsuarioPage();

    cy.get(paginaUsuario.buttonDelete).click();
    cy.get('button').contains('Confirmar').click();
    cy.contains('Usuário removido!').should('exist').and('be.visible');//necessário para a API esperar

})

Cypress.Commands.add('cadastrarUsuario', function () {
    let usuario = {
        name: faker.person.firstName() + ' Barbalho',
        email: faker.internet.email().toLowerCase()
    }
    cy.request({
        method: 'POST',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body: usuario
    })
})

Cypress.Commands.add('deletarUser', function (idUser) {
    cy.request({
        method: 'DELETE',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/' + idUser
    })
})