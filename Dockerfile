FROM node:8.15.1-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install --quiet

COPY . .





