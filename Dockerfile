FROM node:14.15-alpine

# Crie um diretorio dentro do container onde vai ficar o codigo do node
WORKDIR /usr/src/app

# DE=package*.json  PARA= ./ === WORKDIR
COPY package*.json ./

RUN npm i

# DE= .  PARA= . === copiar tudo local para o container criador
COPY . .

# exportando uma porta
EXPOSE 3333

# array de string para 
CMD [ "npm", "start" ]

