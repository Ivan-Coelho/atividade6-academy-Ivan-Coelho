#language: pt


Funcionalidade: Pesquisar usuário

@criarUsuario @deletarUsuario
Cenário: Pesquisa de usuários pelo nome
    Dado que acessei a pagina dos usuários
    Quando informar o nome de um usuário no campo de busca
    Então retornará o card do usuário

@criarUsuario @deletarUsuario
Cenário: Pesquisa de usuários pelo email
    Dado que acessei a pagina dos usuários
    Quando informar um email no campo de busca
    Então retornará o card do usuário

@criarUsuario @deletarUsuario
Cenário: Deve ser possível visualizar todas as informações dos usuários cadastrados
    Dado que acessei a pagina dos usuários
    Quando informar um email no campo de busca
    E visualizar os dados do usuário pesquisado em detalhes
    Então será possível visualizar todos os dados do usuário

Cenário: Pesquisa de dois usuários pelo nome
    Dado que acessei a pagina dos usuários          
    Quando informar o nome do usuário no campo de busca "Daniel"
    E existir dois usuários com o texto procurado no campo nome       
    Então retornará os cards de usuário que possuem o texto "Daniel" pesquisado

Cenário: Pesquisa de usuários deverá encontrar usuário com o texto buscado no nome ou no email
    Dado que acessei a pagina dos usuários      
    Quando informar o nome do usuário no campo de busca "Pedro"
    E existir dois usuários com o texto procurado no campo nome ou no email     
    Então retornará os cards de usuário que possuem o texto "pedro" pesquisado

Cenário: Pesquisa de usuário inexistente
    Dado que acessei a pagina dos usuários
    Quando informar o nome do usuário no campo de busca "Ivan"
    E não existir nenhum usuário com o nome buscado 
    Então não deve encontrar nenhum usuário e retornará um link para pagina de cadastro de usuário

@criarUsuario
Cenário: Não deve ser possível buscar um usuário pelo ID
    Dado que acessei a pagina dos usuários
    Quando informar ID do usuário no campo de busca    
    Então não deve encontrar nenhum usuário e retornará um link para pagina de cadastro de usuário

    

