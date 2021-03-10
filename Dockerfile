FROM node:14.16.0-alpine3.12
COPY ./dist /app
WORKDIR /app