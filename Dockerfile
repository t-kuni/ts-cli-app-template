FROM node:13.5.0-alpine3.10
COPY ./dist /app
WORKDIR /app