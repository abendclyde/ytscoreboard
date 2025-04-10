FROM node:22-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:22-slim AS dev
WORKDIR /app

ENV CHOKIDAR_USEPOLLING=true
ENV HOST=0.0.0.0
ENV NODE_ENV=development
EXPOSE 24678
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM node:22-slim
WORKDIR /app

# Copy drizzle migrations
COPY drizzle/ ./drizzle
# Copy build output
COPY --from=build /app/.output/ ./

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "/app/server/index.mjs"]
