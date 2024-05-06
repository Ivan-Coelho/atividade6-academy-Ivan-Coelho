#language: pt

Funcionalidade: Atualizar dados de usuário

@CadastrarUsers @delUsers
Cenário: Atualizar com sucesso o nome de um usuário já cadastrado
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar um novo nome2
    E salvar a atualização
    Então deve aparecer a mensagem "Informações atualizadas com sucesso!"
    E o nome do usuário deve ter sido atualizado       

@CadastrarUsers @delUsers
Cenário: Atualizar com sucesso o email de um usuário já cadastrado
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar um novo email2
    E salvar a atualização
    Então deve aparecer a mensagem "Informações atualizadas com sucesso!"
    E os dados do usuário devem ter sido atualizado    

@CadastrarUsers @delUsers
Cenário: Atualizar com sucesso os dados de um usuário já cadastrado
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar
    E informar um novo nome e um novo email   
    E salvar a atualização
    Então deve aparecer a mensagem "Informações atualizadas com sucesso!"
    E os dados do usuário devem ter sido atualizado

@CadastrarUsers @delUsers
Cenário: Não deve ser possível atualizar o nome de um usuário para um nome em branco
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o nome "       "
    E salvar a atualização
    Então deve aparecer a mensagem "As informações não foram atualizadas."

@CadastrarUsers @delUsers
Cenário: Não deve ser possível atualizar o email de um usuário para um email em branco
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o email "              "
    E salvar a atualização
    Então deve aparecer a mensagem "Formato de e-mail inválido"

@CadastrarUsers @delUsers
Cenário: Não deve ser possível atualizar o nome de um usuário para um nome com números
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o nome "Ian7"
    E salvar a atualização
    Então deve aparecer a mensagem "Formato do nome é inválido."

@CadastrarUsers @delUsers
Cenário: Não deve ser possível atualizar o nome de um usuário para um nome com menos de 4 caracteres
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o nome "Ian"
    E salvar a atualização
    Então deve aparecer a mensagem "Informe pelo menos 4 letras para o nome."

@CadastrarUsers @delUsers
Cenário: Não deve ser possível atualizar o nome de um usuário para um nome com caracteres especiais
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o nome "Ian'"
    E salvar a atualização
    Então deve aparecer a mensagem "Formato do nome é inválido."

@CadastrarUsers @delUsers
Cenário: Não deve ser possível atualizar o email de um usuário para um email com caracteres especiais
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o email "asdsa@jhgkmw.com'alert"
    E salvar a atualização
    Então deve aparecer a mensagem "Formato de e-mail inválido"

@CadastrarUsers @delUsers
Cenário: Não deve ser possível atualizar o nome de um usuário para um nome com mais de 100 caracteres
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o nome "Pedro De Alcântara João Carlos Leopoldo S. B. F. X. D Paula L. M. G. R. Gonzaga De Bragança E Bourbon"
    E salvar a atualização
    Então deve aparecer a mensagem "Informe no máximo 100 caracteres para o nome"    

@CadastrarUsers @delUsers
Cenário: Não deve ser possível atualizar o email de um usuário para um email com mais de 60 caracteres
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o email "precisodeumemailenormedegrandeparatestaressetrem1@raro.com.br"
    E salvar a atualização
    Então deve aparecer a mensagem "Informe no máximo 60 caracteres para o e-mail"   

@CadastrarUsers @delUsers @emailJaCadastrado @delUsersCadastrado
Cenário: Não deve ser possível atualizar o email de um usuário para um email já cadastrado
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar um e-mail já cadastrado
    E salvar a atualização
    Então deve aparecer a mensagem "Este e-mail já é utilizado por outro usuário."
   
@CadastrarUsers @delUsers
Esquema do Cenário: Não deve ser possível atualizar o email de um usuário para um email em formato invalido
    Dado que acessei em detalhes os dados do usuário
    Quando clica no botão editar 
    E informar o email "<email>"
    E salvar a atualização
    Então deve aparecer a mensagem "Formato de e-mail inválido" 
    Exemplos:
    |    email    |
    | ivan2qa.com |
    |   ivan@qa   |
    |  ivan@.com  |
    |  ivan@qa.b  |




