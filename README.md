## Api Marvel Heroes

Api com integração à API da Marvel.

### Tecnologias utilizadas:
* **NodeJs**
* **NestJs**
* **Typescript**
* **MongoDB**
* **Docker**
* **Yarn**

### Execução:

Para executar o projeto tenha o **docker** em sua máquina (caso estiver no Linux, tenha previlégios root no docker). Na primeira execução, é necessário criar o network do docker:<br />
```docker network create marvel_heroes```

Para subir o projeto:<br />
```yarn docker-up```

O projeto está em fase inicial, infelizmente não chegou a ser implementado os recursos que foram pedidos. As rotas disponíveis são:<br />
```/v1/heroes/```<br />
```/v1/users/```<br />
```/v1/auth/```<br />
```/v1/api/``` (para documentação Swagger)<br />

**Obs:** Apenas o cadastro e consulta de usuário está funcionando.

Rota: ```/v1/users/```<br />
 * POST:<br />
```json
{
	"name": "User",
	"surName": "User sobrenome",
	"password": "123456",
	"email": "user@email.com",
	"phone": "44999001456"
}
```
 * GET:<br />
 Response:<br />
```json
[
  {
    "_id": "603da2810d97f3011f162839",
    "phone": "44999001456",
    "name": "User",
    "surName": "User sobrenome",
    "email": "user@email.com",
    "createdAt": "2021-03-02T02:27:13.298Z",
    "updatedAt": "2021-03-02T02:27:13.298Z",
    "__v": 0
  }
]
```