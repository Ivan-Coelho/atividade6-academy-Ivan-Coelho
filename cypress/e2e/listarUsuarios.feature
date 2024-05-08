#language: pt

Funcionalidade: Listar usuários

Cenario: Consulta a lista de usuários
    Dado que acessei a pagina de usuários listados
    Quando visualizar os usuários na lista
    Então será possível visualizar os dados do usuário

Cenário: Caso não existam usuários cadastrados deve existir uma opção para cadastrar um usuário
    Dado que acessei a pagina de usuários listados
    E a lista de usuários está vazia  
    Quando visualizar a pagina
    Então deve existir o texto "Ops! Não existe nenhum usuário para ser exibido."
    E existir o link para página de cadastro de usuário

@cadastro @deletar
Cenário: Devem existir opções para excluir e exibir detalhes do usuario
    Dado que acessei a pagina de usuários listados
    Quando visualizar a pagina
    Então deve existir opção para excluir usuario
    E deve exitir opção para exibir detalhes do usuario

Cenário: Não deve ser possível avançar para a próxima página se não existir mais usuários a serem listados
    Dado que acessei a pagina de usuários listados
    Quando analisar a pagina
    Então o botão de próxima página deve estar desabilitado
    E o botão de página anterior deve estar desabilitado
    E a numeração da página deve exibir o texto "1 de 1"

Cenário: Deve ser possível avançar entre as páginas da lista de usuários
    Dado que acessei a pagina de usuários listados
    E existe 10 usuários cadastrados
    Quando o usuário navegar para a segunda página
    Então o botão de próxima página deve estar desabilitado
    E o botão de página anterior deve estar habilitado
    E a numeração da página deve exibir o texto "2 de 2"

Cenário: Deve ser possível voltar para a página anterior da lista de usuários
    Dado que acessei a pagina de usuários listados
    E existe 15 usuários cadastrados
    Quando o usuário navegar para a terceira página
    E voltar para a página anterior
    Então o botão de próxima página deve estar habilitado
    E o botão de página anterior deve estar habilitado
    E a numeração da página deve exibir o texto "2 de 3"