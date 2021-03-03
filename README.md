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