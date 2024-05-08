import { Given, When, Then, But, Before, After } from 'cypress-cucumber-preprocessor/steps';

import { faker } from '@faker-js/faker';
import CadastroPage from '../pages/cadastro.page';
import UsuarioPage from '../pages/usuario.page';
import Detalhespage from '../pages/detalhes.page'


const paginaCadastro = new CadastroPage();
const paginaUsuario = new UsuarioPage();
const paginaDetalhes = new Detalhespage();

Before({ tags: '@emailJaCadastrado' }, function () {
    let usuario2 = {
        nome: faker.person.firstName() + ' Almeida',
        email: faker.internet.email().toLowerCase()
    }
    cy.intercept('POST', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users').as('esperar')
    cy.visit('');
    cy.get(paginaUsuario.linkNovoUsuario).click();
    paginaCadastro.cadastrar(usuario2.nome, usuario2.email)
    cy.wait('@esperar')

    cy.wrap(usuario2.email).as('emailCadastrado')
});

Before({ tags: '@CadastrarUsers'}, function () {
    let usuario = {
        nome: faker.person.firstName() + " Coelho",
        email: faker.internet.email().toLowerCase()

    }
    cy.intercept('POST', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users').as('esperar')
    cy.visit('');
    cy.get(paginaUsuario.linkNovoUsuario).click();
    paginaCadastro.cadastrar(usuario.nome, usuario.email)
    cy.wait('@esperar')
    cy.wrap(usuario).as('user')
})

After({ tags: '@delUsers' }, function () {
    cy.visit('')
    cy.get('@user').then(function (usuario) {
        cy.get(paginaUsuario.inputBuscaUsuario).clear().type(usuario.email)
    });

    cy.deletarUsuario();
});

After({ tags: '@delUsersCadastrado' }, function () {
    cy.visit('')
    cy.get('@emailCadastrado').then(function (email) {
        cy.get(paginaUsuario.inputBuscaUsuario).clear().type(email)
    });

    cy.deletarUsuario();
});



// Given ('que acessei em detalhes os dados do usuário', function(){
//     cy.visit('')
//     cy.get('@user').then(function(usuario){
//         cy.get(paginaUsuario.inputBuscaUsuario).clear().type(usuario.email)

//     })    
//     cy.contains('Ver detalhes').click()    
// });

Given('que acessei em detalhes os dados do usuário', function () {
    cy.visit('')
    cy.get('@user').then(function (usuario) {
        cy.get(paginaUsuario.inputBuscaUsuario).clear().type(usuario.email)

    })
    let idUser
    cy.contains('Ver detalhes').click()
    cy.get(paginaDetalhes.labelId).invoke('val').then(function (id) {
        idUser = id
        cy.wrap(idUser).as("idUsuario")
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + idUser)
    })

});

When('acessa a funcionalidade editar', function () {

    paginaDetalhes.clickButtonEditar();
});

When('informar um novo nome para o usuario', function () {

    let name = faker.person.firstName();
    cy.get(paginaDetalhes.labelNome).clear().type(name + ' Barbalho')

    cy.wrap(name + ' Barbalho').as('nome')
})

When('informar um novo email para o usuario', function () {

    let novoEmail = faker.internet.email().toLowerCase();
    cy.get(paginaDetalhes.labelEmail).clear().type(novoEmail);

    cy.get('@user').then(function (usuario) {

        cy.wrap({
            nome: usuario.nome,
            email: novoEmail
        }).as('user')

    })
});

When('informar um novo nome e um novo email', function () {

    let novoNome = faker.person.firstName();
    let novoEmail = faker.internet.email().toLowerCase();

    cy.get(paginaDetalhes.labelNome).clear().type(novoNome + ' Barbalho')
    cy.get(paginaDetalhes.labelEmail).clear().type(novoEmail);
    cy.wrap({
        nome: novoNome + " Barbalho",
        email: novoEmail
    }).as('user')
})

When('informar um novo nome e email', function () {
    let novoNome = faker.person.firstName();
    let novoEmail = faker.internet.email().toLowerCase();

    cy.get(paginaDetalhes.labelNome).clear().type(novoNome + ' Barbalho')
    cy.get(paginaDetalhes.labelEmail).clear().type(novoEmail);    
})

When('informar o nome {string}', function (nome) {

    cy.get(paginaDetalhes.labelNome).clear().type(nome);

});

When('informar o email {string}', function (email) {

    cy.get(paginaDetalhes.labelEmail).clear().type(email);

});

When('informar um e-mail já cadastrado', function () {

    cy.get('@emailCadastrado').then(function (email) {

        cy.get(paginaDetalhes.labelEmail).clear().type(email);

    })

});

When('salvar a atualização', function () {
    paginaDetalhes.clickButtonSalvar();
    
})

When('cancelar a atualização', function () {
    paginaDetalhes.clickButtonCancelar();
    
})

Then('deve aparecer a mensagem {string}', function (mensagem) {
    cy.contains(mensagem).should('exist').and('be.visible');

});

Then('o nome do usuário deve ter sido atualizado', function () {
    cy.get('@idUsuario').then(function (id) {
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + id)
    })

    cy.get('@nome').then(function (name) {
        cy.get('@user').then(function (usuario) {
            cy.get('@idUsuario').then(function (id) {

                cy.get(paginaDetalhes.labelId).should('exist').and('be.visible').and('have.value', id);
                cy.get(paginaDetalhes.labelNome).should('exist').and('be.visible').and('have.value', name);
                cy.get(paginaDetalhes.labelEmail).should('exist').and('be.visible').and('have.value', usuario.email);

            })
        })
    })
});

Then('os dados do usuário devem ter sido atualizado', function () {
    cy.get('@idUsuario').then(function (id) {
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + id)
    })

    cy.get('@user').then(function (usuario) {
        cy.get('@idUsuario').then(function (id) {

            cy.get(paginaDetalhes.labelId).should('exist').and('be.visible').and('have.value', id);
            cy.get(paginaDetalhes.labelNome).should('exist').and('be.visible').and('have.value', usuario.nome);
            cy.get(paginaDetalhes.labelEmail).should('exist').and('be.visible').and('have.value', usuario.email);

        })

    })
});

Then('os dados do usuário não devem ter sido alterados', function(){

    cy.get('@idUsuario').then(function (id) {
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + id)
    })

    cy.get('@user').then(function (usuario) {
        cy.get('@idUsuario').then(function (id) {

            cy.get(paginaDetalhes.labelId).should('exist').and('be.visible').and('have.value', id);
            cy.get(paginaDetalhes.labelNome).should('exist').and('be.visible').and('have.value', usuario.nome);
            cy.get(paginaDetalhes.labelEmail).should('exist').and('be.visible').and('have.value', usuario.email);

        })

    })

});