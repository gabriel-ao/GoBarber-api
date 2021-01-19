### download docker ambiente windows

https://hub.docker.com/editions/community/docker-ce-desktop-windows/

# docker commands general

docker ps - listar imagens rodando

docker start (nome da img) - iniciar a imagem

docker stop - parar de rodar todas imagens

docker help - ajuda

docker ps -a - mostra todas imagens instaladas independente se
estiver rodando ou não

docker logs (nome do container) para verificar a situação

<h1> BANCO RELACIONAL - POSTGRESQL </h1>
### imagem docker- username: postgres -- password: docker

https://hub.docker.com/_/postgres
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

### postbird - utilizado para ver as informações lançadas ao banco

https://www.electronjs.org/apps/postbird

### Migrations

CREATE MIGRATIONS
( yarn / npm ) sequelize migration:create --name=create-users
( yarn / npm ) sequelize migration:create --name=create-files
( yarn / npm ) sequelize migration:create --name=add-avatar-field-to-users
( yarn / npm ) sequelize migration:create --name=create-appointments

ENVIA A MIGRATION CRIADA PARA O BANCO
( yarn / npm ) sequelize db:migrate

DESFAZ A MIGRATION
( yarn / npm ) sequelize db:migrate:undo

DESFAZ TODAS AS MIGRATIONS
( yarn / npm ) sequelize db:migrate:undo:all

<h1> BANCO NÃO RELACIONAL - MONGODB </h1>

### imagem docker

docker run --name mongobarber -p 27017:27017 -d -t mongo

OBS:
-t == nome da img que vai utilizar
-p == porta que vai utilizar
