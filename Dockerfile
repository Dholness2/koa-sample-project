FROM mhart/alpine-node:latest

RUN mkdir /app
WORKDIR /app

COPY package.json /app


RUN node -v
RUN npm install





