### Comandos - Aula 16/01/25:
...

### Comandos - Aula 17/01/25:

Instalar a biblioteca do JWT no NestJS:
```sh
npm install --save @nestjs/jwt
```

Criar os arquivos correspondente ao module, controller e service da classe autenticação:
```sh
nest g module auth
nest g controller auth
nest g service auth
```
OBS.: esses comandos irão criar os arquivos numa pasta chamada "auth" (ou o nome fornecido após o tipo de arquivo)

Criar os arquivos correspondente ao module, controller e service da classe staff:
```sh
nest g module staff
nest g service staff
```
OBS.: esses comandos irão criar os arquivos numa pasta chamada "staff" 