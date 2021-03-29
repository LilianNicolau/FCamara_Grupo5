***Seguem os comandos que devem ser dados no terminal para que o node rode.

Texto original de Lucas Duarte.

🏁 Start - Criando as pastas do projeto e o index.ts
Comando: mkdir build src
    • Já criar um arquivo TypeScript chamado index.ts dentro da pasta /src
1. Criando o tsconfig.json
Comando 1 tsc --init (é preciso ter o Typescript (tsc) instalado globalmente)
// dentro do tsconfig.json, descomentar e atribuir valores às propriedades:
 
"target": "es6", 
{...}
"sourceMap": true,
{...}
"outDir": "./build", 
"rootDir" : "./src", 
{...}
"removeComments": true,
 
// ***target*** vem por padrão como es5
// ***outDir*** especifica a pasta em que serão salvos os arquivos transpilados
// ***rootDir*** especifica a pasta raíz do projeto
// ***removeComments*** remove comentários dos arquivos transpilados 
    • O que é o tsconfig.json?
2. Criando o package.json
Comando 2 npm init -y (o -y cria um package.json com configurações padrão)
// dentro do package.json podemos *criar scripts*. Já pode adicionar o start: 

"scripts": {
		**"start": "tsc && node ./build/index.js"**,
    "test": "echo \\"Error: no test specified\\" && exit 1"
},

// o script **start** combina dois comandos**:
//** 1. ***tsc*** -> transpila os arquivos Typescript
// 2. ***node** + [path] ->* executa o arquivo passado (*index.js*, criado na transpilação)
Agora, o comando npm start já transpila o index.ts e executa o index.js.
    • O que é transpilar?
    • O que é o package.json?
3. Instalando o ts-node-dev e o typescript como dev dependencies
Comando 3 npm i ts-node-dev -D
Comando 4 npm i typescript -D
// dentro do package.json, adicionar um script para rodarmos o ts-node-dev:

"scripts": {
		**"dev": "ts-node-dev ./src/index.ts",**
		"start": "tsc && node ./build/index.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
},
Agora, o comando npm run dev já deixa o programa rodando sem interrupção.
    • O que o ts-node-dev faz?
    • Por que instalar o typescript como dev dependency?
4. Instalando os módulos Express e Cors
Comando 5 npm i express cors (adicionando os dois ao mesmo tempo)
Comando 6 npm i @types/express @types/cors -D (+ tipos)
// dentro do **index.ts**, fazer importações e ativar o Express e Cors.

import express, {Express} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

// a função **express()** inicia a aplicação web com express
// os **.use()** ativam os módulos de Bodyparser e Cors
    • Documentação do Express
    • Documentação do Cors
5. Criando o servidor:
// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o **último trecho de código** do documento

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in <http://localhost>: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
    • O que o .listen() faz?
6. Instalando o Knex e MySql
Comando 7 npm i knex mysql @types/knex
// importando o knex no projeto:

import knex from "knex";
    • Documentação do Knex
7. Instalando o Dotenv e criando um arquivo .env
Comando 8 npm i dotenv
// importar e configurar o dotenv no **index.ts**

import dotenv from "dotenv";

dotenv.config();
Crie um arquivo .env ( touch .env )
// no arquivo .env:

DB_HOST = 
DB_USER = 
DB_PASS = 
DB_NAME =

// **DB_HOST:** adicionar o endereço do localhost
// **DB_USER:** adicionar o user
// **DB_PASS**: adicionar a senha
// **DB_NAME**: adicionar o schema
// estabelecer a conexão com o banco no **index.ts**:

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});
    • Documentação do Dotenv
8. Montando o .gitignore
Crie um arquivo .gitignore ( touch .gitignore ****)
// adicione ao arquivo **.gitignore**:

node_modules
package-lock.json
build
.env


👁 Cheatcode (pronto pra ctrl+c/ctrl+v)
// no terminal:

tsc --init

npm init -y

npm i express cors 

npm i  @types/express @types/cors @types/node -D

touch .gitignore 
// no package.json:

"scripts": {
		"start": "tsc && node ./build/index.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
},
// no index.ts:

import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in <http://localhost>: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});



