FROM node:22 AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:22 AS dev
WORKDIR /app

ENV CHOKIDAR_USEPOLLING=true
EXPOSE 24678
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM node:22
WORKDIR /app

# Copy drizzle migrations
COPY drizzle/ ./drizzle
# Copy build output
COPY --from=build /app/.output/ ./

EXPOSE 80
CMD ["node", "/app/server/index.mjs"]
