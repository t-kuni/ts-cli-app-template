FROM node:22.11.0 as builder
COPY ./ /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM node:22.11.0
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
WORKDIR /app/dist/src
CMD ["node", "main.js"]