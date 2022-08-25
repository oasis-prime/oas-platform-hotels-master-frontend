FROM node:alpine AS build

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn run build

FROM node:alpine AS runner
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["yarn", "run", "start"]