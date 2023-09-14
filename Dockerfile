FROM node:18
WORKDIR /app
COPY package*.json /app

RUN npm i --silent

COPY . ./

RUN npm run build