import { Given, When, Then, But, Before, After } from 'cypress-cucumber-preprocessor/steps';
import UsuarioPage from '../pages/usuario.page';

const paginaUsuario = new UsuarioPage();

let idUser
Before({ tags: '@cadastro' }, function () {
    cy.cadastrarUsuario().then(function (response) {
        idUser = response.body.id
        //cy.wrap(idUser).as('user')
    })
})

After({ tags: '@deletar' }, function () {
    cy.deletarUser(idUser)
})

Given('que acessei a pagina de usuários listados', function () {
    cy.visit('');
});

Given('a lista de usuários está vazia', function () {

    cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        body: []
    }).as('listaVazia')
    cy.wait('@listaVazia')
});

Given('existe 10 usuários cadastrados', function () {

    cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        fixture: 'listaUsuario10.json',
    })
});

Given('existe 15 usuários cadastrados', function () {

    cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        fixture: 'listaUsuario15.json',
    })
});

When('visualizar os usuários na lista', function () {

    cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        fixture: 'listaUsuario6.json',
    }).as('listaUsuarios')

    cy.wait('@listaUsuarios').then(function (consultaUsuarios) {
        const listaUsuario = consultaUsuarios.response.body;
        cy.wrap(listaUsuario).as('dadosUsuario')

    });
});

When('visualizar a pagina', function () {

});

When('analisar a pagina', function () {
    cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        fixture: 'listaUsuario6.json',
    })

});

When('o usuário navegar para a segunda página', function () {
    paginaUsuario.clickProximaPagina();
});

When('o usuário navegar para a terceira página', function () {
    paginaUsuario.clickProximaPagina();
    paginaUsuario.clickProximaPagina();
});

When('voltar para a página anterior', function () {
    paginaUsuario.clickPaginaAnterior();
});

Then('será possível visualizar os dados do usuário', function () {
    cy.get('@dadosUsuario').then(function (dados) {
        dados.forEach(function (usuarios) {
            cy.contains(paginaUsuario.labelNome, 'Nome: ' + usuarios.name);
            cy.contains(paginaUsuario.labelEmail, 'E-mail: ' + usuarios.email.slice(0, 20))
        })
    })

});

Then('deve existir o texto {string}', function (mensagem) {

    cy.contains(paginaUsuario.headerUsuarioNaoCadastro, mensagem);

});

Then('existir o link para página de cadastro de usuário', function () {

    cy.contains(paginaUsuario.linkCadastroUsuario, 'Cadastre um novo usuário');

});

Then('deve existir opção para excluir usuario', function () {

    paginaUsuario.getListaUsuarios().each((componenteUsuario) => {
        cy.wrap(componenteUsuario)
            .find(paginaUsuario.buttonDelete)
            .should('be.visible');
    })
});

Then('deve exitir opção para exibir detalhes do usuario', function () {

    paginaUsuario.getListaUsuarios().each((componenteUsuario) => {
        cy.wrap(componenteUsuario)
            .find(paginaUsuario.buttonDetalhes)
            .should('be.visible');
    })
});

Then('o botão de próxima página deve estar habilitado', function () {

    cy.get(paginaUsuario.buttonProxima).should('be.enabled').and('be.visible');

});

Then('o botão de próxima página deve estar desabilitado', function () {

    cy.get(paginaUsuario.buttonProxima).should('be.disabled').and('be.visible');

});

Then('o botão de página anterior deve estar habilitado', function () {

    cy.get(paginaUsuario.buttonAnterior).should('be.enabled').and('be.visible');

});

Then('o botão de página anterior deve estar desabilitado', function () {

    cy.get(paginaUsuario.buttonAnterior).should('be.disabled').and('be.visible');

});

Then('a numeração da página deve exibir o texto {string}', function (pagina) {

    cy.get(paginaUsuario.paginaAtual).contains(pagina).and('be.visible');

});