import { Given, When, Then, But, Before, After } from 'cypress-cucumber-preprocessor/steps';

import UsuarioPage from '../pages/usuario.page';
import DetalhesPage from '../pages/detalhes.page';


const paginaUsuario = new UsuarioPage();
const paginaDetalhes = new DetalhesPage();

Given('que existi dois usuários cadastrados', function () {
    
    //criando um usuário
    let usuario1 = {
        name: 'Ivan Coelho',
        email: "ivancoelhob@raro.com"
    }
    cy.request({
        method: 'POST',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body: usuario1
    })
    cy.wrap(usuario1).as('user2')
    
    //criando o segundo usuário
    let usuario2 = {
        name: 'Ivan Barbalho',
        email: "IvanCoelho2@raro.com"
        }   
    cy.request({
        method: 'POST',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body: usuario2
    })
    cy.wrap(usuario2).as('user2')

});

When('atualiza o email de um usuário para um email já utilizado pelo outro usuário', function(){
    cy.visit('') //visita a página
    cy.get('@user2').then(function (usuario2) {
        cy.get(paginaUsuario.inputBuscaUsuario).clear().type(usuario2.email) //pesquiso usuário pelo email
    })    
    cy.contains('Ver detalhes').click()
    paginaDetalhes.clickButtonEditar();
    cy.get(paginaDetalhes.labelEmail).clear().type('ivancoelhob@raro.com') //altero para um email já que já existe
    paginaDetalhes.clickButtonSalvar();
    cy.wait(1000)
});

Then('o sistema não deve permitir', function(){
    cy.contains('Este e-mail já é utilizado por outro usuário.')
});

