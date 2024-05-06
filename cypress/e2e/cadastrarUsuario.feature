#language: pt

Funcionalidade: Cadastro de Usuários

@delUser
Cenario: Cadastro de usuários com sucesso fornecendo 4 caracteres para o campo nome
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um nome "Ivan"
    E informar um novo e-mail
    E salvar a operação
    Então retornará a mensagem "Usuário salvo com sucesso"

@delUser
Cenário: Cadastro de usuário com sucesso fornecendo 100 caracteres para o campo nome
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um nome "DPedro De Alcântara João Carlos Leopoldo S. B. F. X. Paula L. M. G. R. Gonzaga De Bragança E Bourbon"
    E informar um novo e-mail
    E salvar a operação
    Então retornará a mensagem "Usuário salvo com sucesso"

@delUser
Cenário: Cadastro de usuário com sucesso fornecendo 60 caracteres para o campo email
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um novo nome 
    E informar um e-mail "precisodeumemailenormedegrandeparatestaressetrem@raro.com.br"
    E salvar a operação
    Então retornará a mensagem "Usuário salvo com sucesso"

# Funcionalidade: Falha no cadastro de usuários ao fornecer dados inválidos

Cenário: Não deve ser possível cadastrar usuário sem preencher o campo nome
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um novo e-mail   
    E salvar a operação
    Então retornará a mensagem "O campo nome é obrigatório"


Cenário: Não deve ser possível cadastrar usuário sem preencher o campo email
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um novo nome   
    E salvar a operação
    Então retornará a mensagem "O campo e-mail é obrigatório"

Cenário: Não deve ser possível cadastrar usuário informando menos de 4 caracteres para o campo nome
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um nome "ian"
    E informar um novo e-mail
    E salvar a operação
    Então retornará a mensagem "Informe pelo menos 4 letras para o nome."

Cenário: Não deve ser possível cadastrar usuário informando um nome em branco
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um nome "       "
    E informar um novo e-mail    
    E salvar a operação
    Então retornará a mensagem "Não foi possível cadastrar o usuário!"

Cenário: Não deve ser possível cadastrar usuário com campo email em branco
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um novo nome
    E informar um e-mail "              "  
    E salvar a operação
    Então retornará a mensagem "O campo e-mail é obrigatório"

Cenário: Não deve ser possível cadastrar usuário informando mais de 100 caracteres para o campo nome
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um nome "Pedro De Alcântara João Carlos Leopoldo S. B. F. X. D Paula L. M. G. R. Gonzaga De Bragança E Bourbon"
    E informar um novo e-mail
    E salvar a operação
    Então retornará a mensagem "Informe no máximo 100 caracteres para o nome"

Cenário: Não deve ser possível cadastrar usuário informando mais de 60 caracteres para o campo email
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um novo nome
    E informar um e-mail "precisodeumemailenormedegrandeparatestaressetrem1@raro.com.br"
    E salvar a operação
    Então retornará a mensagem "Informe no máximo 60 caracteres para o e-mail"

Cenário: Não deve ser possível cadastrar usuário ao preencher o campo nome com caracteres numéricos
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um nome "Ian7"
    E informar um novo e-mail
    E salvar a operação
    Então retornará a mensagem "Formato do nome é inválido"

Cenário: Não deve ser possível cadastrar usuário ao preencher o campo nome com caracteres especiais
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um nome "Ian'" 
    E informar um novo e-mail
    E salvar a operação
   Então retornará a mensagem "Formato do nome é inválido"

Cenário: Não deve ser possível cadastrar usuário ao preencher o campo email com caracteres especiais
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um novo nome 
    E informar um e-mail "asdsa@jhgkmw.com'alert"
    E salvar a operação
    Então retornará a mensagem "Formato de e-mail inválido"

Esquema do Cenário: Não deve ser possível cadastrar usuário ao preencher o campo email com formato invalido
    Dado que acessei a pagina de cadastro de usuários
    Quando informar um novo nome 
    E informar um e-mail "<email>"
    E salvar a operação
    Então retornará a mensagem "Formato de e-mail inválido"
    Exemplos:
    |    email    |
    | ivan2qa.com |
    |   ivan@qa   |
    |  ivan@.com  |
    |  ivan@qa.b  |
 
@CadastrarUser @delUser
Cenário: Não deve ser possível cadastrar usuário ao utilizar um email já cadastrado
    #Dado que acessei a pagina de cadastro de usuários
    Quando informar um email já cadastrado
    E informar um novo nome    
    E salvar a operação
    Então retornará a mensagem "Este e-mail já é utilizado por outro usuário."



