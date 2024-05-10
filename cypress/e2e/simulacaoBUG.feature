#language: pt

Funcionalidade: Forçar um BUG

# Cenário: Não deve ser possível atualizar o email de um usuário para um email já cadastrado
#     Dado que acessei em detalhes os dados do usuário
#     Quando acessar a funcionalidade editar
#     E informar um e-mail já cadastrado
#     E salvar a atualização
#     Então deve aparecer a mensagem "Este e-mail já é utilizado por outro usuário."
#     E os dados do usuário não devem ter sido alterados


Cenário: Atualizar o e-mail de um usuário para o e-mail de um usuário já cadastrado
    Dado que existi dois usuários cadastrados
    Quando atualiza o email de um usuário para um email já utilizado pelo outro usuário
    Então o sistema não deve permitir
