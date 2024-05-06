#language: pt

Funcionalidade: Listar usuários

Cenario: Consultar a lista de usuários
    Dado que acessei a pagina de usuários listados
    #Quando eu for curioso
    Então será possível visualizar os dados do usuário

Cenário: Caso não existam usuários cadastrados deve existir uma opção para cadastrar um usuário
    Dado que acessei a lista de usuários
    E a lista de usuários está vazia
    #Quando a lista de usuários está vazia
    Então deve existir o texto "Ops! Não existe nenhum usuário para ser exibido."
    E o link para página de cadastro de usuário

Cenário: Não deve ser possível avançar para a próxima página se não existir mais usuários a serem listados
    Dado que acessei a lista de usuários
    #Quando
    Então o botão de próxima página deve estar desabilitado
    E o botão de página anterior deve estar desabilitado
    E a numeração da página deve exibir o testo "1 de 1"

Cenário: Deve ser possível avançar entre as páginas da lista de usuários
    Dado que acessei a lista de usuários
    E existe mais de 6 usuários cadastrados
    Quando o usuário navegar para a segunda página
    Então o botão de próxima página deve estar habilitado
    E o botão de página anterior deve estar desabilitado
    E a numeração da página deve exibir o testo "2 de 2"