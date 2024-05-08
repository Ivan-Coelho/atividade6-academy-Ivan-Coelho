#language: pt

@criarUsuario @deletarUsuario
Funcionalidade: Pesquisar usuário

Cenário: Pesquisa de usuários pelo nome
    Dado que acessei a pagina dos usuários
    Quando informar um nome no campo de busca
    Então retornará os cards de usuário que possuem o texto pesquisado no campo nome ou e-mail

Cenário: Pesquisa de usuários pelo email
    Dado que acessei a pagina dos usuários
    Quando informar um email no campo de busca
    Então retornará os cards de usuário que possuem o texto pesquisado no campo nome ou e-mail

Cenário: Deve ser possível visualizar todas as informações dos usuários cadastrados
    Dado que acessei a pagina dos usuários
    Quando informar um email no campo de busca
    E visualizar os dados do usuário pesquisado em detalhes
    Então será possível visualizar todos os dados do usuário
