# Api Rest com Mongo
## Uma simples Api Rest que se utiliza do Mongo como banco de dados e Nodejs para funcionar
### Ele consegue fazer todos os métodos propostos no CRUD
### No momento está na versão 0.0.1, Porém pretendo atualiza-lo para por novas melhorias

## Pré-requisitos
- Um gerenciador de pacotes como o NPM ou o YARN
- Nodejs
- Mongodb
- Javascript
- Ideal ter uma IDE como Visual Studio Code ou Eclipse para melhor visualização do código
- Postman ou Insomnia para fazer suas requests na sua db
---
## Como rodar está Api
Abra o seu terminal e clone o projeto:
```
git clone https://github.com/ItaloDavidb/api_rest_mongo.git
```
Entre na pasta do projeto e instale as dependências:
```
cd api_rest_mongo/
npm install
```
Após todas as dependências tiverem sido instaladas você irá precisar criar uma Database no Mongo
```
use exemplodb
```
Criada sua database você irá precisar ir na pasta config, no arquivo default.json e colocar o caminho dessa sua db,
o padrão é criada no caminho abaixo:
```
"path":"mongodb://127.0.0.1:27017/exemplodb"
```
Basta substituir o caminho pelo o caminho da sua db

Caso queira mudar a porta aonde a Api vai trabalhar, no mesmo arquivo aonde você colocou o caminho da sua db você irá encontrar  a configuração da porta que por padrão está
```
"port":3000
```

Após todas essas etapas é so rodar este comando,dentro da raiz da api:
```
node .\index.js
```
---
## Feito isso o terminal irá lhe retornar 
```
CONNECTED TO DB
API ON
number of items:'0'
```
## E com isso sua Api estará On apenas esperando Requests que esses são:
- POST para inserir algo na db
- GET  no qual irá precisar colocar o ID na Url para visualização de 1 ou sem ID no qual irá retornar todos os items
- PUT para atualização de itens na db no qual irá precisar colocar o ID na Url
- DELETE para excluir um item da db no qual irá precisar colocar o ID na Url
## Para fazer estas requests terá que passar um URL na plataforma que estiver utilizando como o postman ou insomnia ou outra.
## Por padrão a URL vai ser:
- POST localhost:3000/api/project no qual o contéudo da requisição deverá ir no body como JSON, nesse exemplo:
```
{
"title": "Conteúdo",
"description":"Conteúdo",
"task": [
{

"title": "Conteúdo",

"taskRelevance": "Conteúdo INT",

"completed":"Conteúdo BOOLEAN",
},{

"title": "Conteúdo",

"taskRelevance": "Conteúdo INT",

"completed": "Conteúdo BOOLEAN", 
}
]
}
```
### No qual a "task" pode ter 1 objeto ou mais, sendo que "taskRelevance" só permite um conteúdo sendo ele um número e o campo "completed" só permite true ou false, e todos os campos tem necessidade de estarem preenchidos para se fazer um POST com sucesso caso falte um campo ele irá retornar um erro.

- GET localhost:3000/api/project irá retornar todos os items
- GET localhost:3000/api/project/:id substitua :id por um id valido e ele irá retornar o item correspondente a o id colocado
- PUT localhost:3000/api/project/:id substitua :id por um id valido e preencha o body, assim como no post e altere os campos desejados
- DELETE localhost:3000/api/project/:id substitua :id por um id valido, e ele irá deletar o item com o id correspondente
### Caso tenha alterado a porta no default terá que levar em conta de substituir o localhost:3000... pela sua porta ficando algo como localhost:portaescolhida.
---
