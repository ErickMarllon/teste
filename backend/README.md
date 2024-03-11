# Teste de Programação Desenvolvedor Facilita Jurídico

## Descrição

Este projeto inclui a lógica de servidor e manipulação de dados para a aplicação sem ORM.

## Instalação

Certifique-se de ter o Node.js instalado em seu sistema.
caso ainda não tenha o node instalado:
https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi

Em seguida, você pode instalar as dependências do projeto executando:

npm install

## Configuração

Antes de executar o servidor, você precisará configurar algumas variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de acordo com o seu ambiente.

## Execução

Para iniciar o servidor, você pode usar o seguinte comando:

npm start

## Dependências

Este projeto faz uso das seguintes dependências:

- bcryptjs: Para a criptografia de senhas.
- cors: Para habilitar o Cross-Origin Resource Sharing (CORS).
- dotenv: Para carregar variáveis de ambiente a partir de um arquivo `.env`.
- express: Framework web para Node.js.
- express-validator: Middleware para validação de dados em solicitações HTTP.
- jsonwebtoken: Para a geração e verificação de tokens de autenticação JWT.
- pg: Driver PostgreSQL para Node.js.
