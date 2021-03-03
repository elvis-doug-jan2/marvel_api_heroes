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

Para executar o projeto tenha o **docker** em sua máquina (caso estiver no Linux, tenha previlégios root no docker). Na primeira execução, é necessário criar o network do docker:
```docker network create marvel_heroes```

Para subir o projeto:
```yarn docker-up```

O projeto está em fase inicial, infelizmente não chegou a ser implementado os recursos que foram pedidos. As rotas disponíveis são:
```/v1/heroes/```
```/v1/users/```
```/v1/auth/```
```/v1/api/``` (para documentação Swagger)

**Obs:** Apenas o cadastro e consulta de usuário está funcionando.