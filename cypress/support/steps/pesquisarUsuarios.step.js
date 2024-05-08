import { Given, When, Then, But, Before, After } from 'cypress-cucumber-preprocessor/steps';

import { faker } from '@faker-js/faker';
import CadastroPage from '../pages/cadastro.page';
import UsuarioPage from '../pages/usuario.page';
import DetalhesPage from '../pages/detalhes.page';

const paginaCadastro = new CadastroPage();
const paginaUsuario = new UsuarioPage();
const paginaDetalhes = new DetalhesPage();

Before({ tags: '@criarUsuario' }, function () {
    let usuario = {
        name: faker.person.firstName(),
        email: faker.internet.email().toLowerCase()
    }
    cy.intercept('POST', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users').as('esperar')
    cy.visit('')
    cy.get(paginaUsuario.linkNovoUsuario).click();
    paginaCadastro.cadastrar(usuario.name + ' Coelho', usuario.email)
    cy.wait('@esperar')
    cy.wrap(usuario).as('user')

})

After({ tags: "@deletarUsuario" }, function () {

    cy.visit('')
    cy.get('@user').then(function (usuario) {
        cy.get(paginaUsuario.inputBuscaUsuario).clear().type(usuario.email)
    });
    cy.deletarUsuario();
});

Given('que acessei a pagina dos usuários', function () {
    cy.visit('')
});

When('existir dois usuários com o texto procurado no campo nome', function () {
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=*', {
        statusCode: 200,
        fixture: 'userDaniel.json',
    }).as('esperar')
    //cy.wait('@esperar')

})
When('existir dois usuários com o texto procurado no campo nome ou no email', function () {
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=*', {
        statusCode: 200,
        fixture: 'userPedro.json',
    }).as('esperar')
    //cy.wait('@esperar')

})

When('não existir nenhum usuário com o nome buscado', function () {
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=*', {
        statusCode: 200,
        body: [],
    }).as('esperar')
    cy.wait('@esperar')

})

When('informar o nome de um usuário no campo de busca', function () {
    cy.get('@user').then(function (usuario) {
        cy.get(paginaUsuario.inputBuscaUsuario).type(usuario.name + ' Coelho');

    });

});

When('informar um email no campo de busca', function () {
    cy.get('@user').then(function (usuario) {
        cy.get(paginaUsuario.inputBuscaUsuario).type(usuario.email)
    });

});

When('informar o nome do usuário no campo de busca {string}', function (name) {
    cy.get(paginaUsuario.inputBuscaUsuario).type(name);
    
});

When('informar ID do usuário no campo de busca', function () {

    cy.get('@user').then(function (usuario) {
        cy.get(paginaUsuario.inputBuscaUsuario).clear().type(usuario.email)

    })
    let idUsuario
    cy.contains('Ver detalhes').click()
    cy.get(paginaDetalhes.labelId).invoke('val').then(function (id) {
        idUsuario = id

        cy.visit('')
        cy.get(paginaUsuario.inputBuscaUsuario).clear().type(idUsuario);
    })

});

When('visualizar os dados do usuário pesquisado em detalhes', function () {
    cy.contains('Ver detalhes').click()

});

Then('retornará o card do usuário', function () {
    cy.get('@user').then(function (usuario) {

        cy.contains(paginaUsuario.labelNome, usuario.name + ' Coelho').and('be.visible');
        cy.get(paginaUsuario.labelEmail).should("contain.text", "E-mail: ", usuario.email).and('be.visible');

    });

});

Then('será possível visualizar todos os dados do usuário', function () {

    cy.get('@user').then(function (usuario) {
        cy.get(paginaDetalhes.labelId).should('exist').and('be.visible');
        cy.get(paginaDetalhes.labelNome).should('exist').and('be.visible').and('have.value', usuario.name + ' Coelho');
        cy.get(paginaDetalhes.labelEmail).should('exist').and('be.visible').and('have.value', usuario.email);
    });

});

Then('retornará os cards de usuário que possuem o texto {string} pesquisado', function (nome) {
    
    cy.get(paginaUsuario.listaUsuarios).filter(`:contains(${nome})`).should('have.length', 2)

})

Then('não deve encontrar nenhum usuário e retornará um link para pagina de cadastro de usuário', function () {
    cy.contains(paginaUsuario.linkCadastroUsuario, 'Cadastre um novo usuário');
})

