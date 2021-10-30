FROM node:16.13.0-alpine3.14
COPY ./dist /app
WORKDIR /app