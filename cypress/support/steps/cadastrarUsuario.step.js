
import {Given, When, Then, But, Before, After} from 'cypress-cucumber-preprocessor/steps';

import { faker } from '@faker-js/faker';
import CadastroPage from '../pages/cadastro.page';
import UsuarioPage from '../pages/usuario.page';


const paginaCadastro = new CadastroPage();
const paginaUsuario = new UsuarioPage();

After({ tags: '@delUser'}, function(){
   cy.visit('')   
   cy.get('@emailAs').then(function(email){          
      cy.get(paginaUsuario.inputBuscaUsuario).clear().type(email)
   });
   cy.deletarUsuario();
})
Before({ tags: '@CadastrarUser'}, function(){
   let usuario = {
      nome: faker.person.firstName(),
      email: faker.internet.email()
   } 
   cy.intercept('POST', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users').as('esperar')  
   cy.visit('');
   cy.get(paginaUsuario.linkNovoUsuario).click();
   paginaCadastro.cadastrar(usuario.nome + 'Coelho', usuario.email)
   cy.wait('@esperar')
      
   cy.wrap(usuario.email).as('emailAs')
   
})

Given ('que acessei a pagina de cadastro de usuários', function(){
   cy.visit('')
   cy.get(paginaUsuario.linkNovoUsuario).click();
   
});

When ('informar um nome {string}', function(nome){
   paginaCadastro.typeNome(nome);

});

When ('informar um novo nome', function(){
   let nome = faker.person.firstName();
   
   paginaCadastro.typeNome(nome + 'Coelho');

});

When ('informar um e-mail {string}', function(email){
     
   paginaCadastro.typeEmail(email);

   cy.wrap(email).as('emailAs')

});

When ('informar um novo e-mail', function(){
   let email = faker.internet.email(); 
   
   paginaCadastro.typeEmail(email);
   cy.wrap(email).as('emailAs')

});

When ('informar um email já cadastrado', function(){   
      
   cy.get('@emailAs').then(function(email){
      paginaCadastro.typeEmail(email)
   });   
            
});

When ('salvar a operação', function(){
   paginaCadastro.clickButtonSalvar();
    
});

Then('retornará a mensagem {string}', function(mensagem){
   
   cy.contains(mensagem).should('exist').and('be.visible');

});
