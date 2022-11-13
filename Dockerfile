FROM node:18.12.1-alpine3.16
COPY ./dist /app
WORKDIR /app