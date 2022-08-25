FROM node:alpine AS build

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN --mount=type=secret,id=NEXT_PUBLIC_API_GRAPHQL \
  --mount=type=secret,id=NEXT_PUBLIC_FIREBASE_API_KEY \
  --mount=type=secret,id=NEXT_PUBLIC_FIREBASE_APP_ID \
  --mount=type=secret,id=NEXT_PUBLIC_FIREBASE_PROJECT_ID \
  --mount=type=secret,id=NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN \
  --mount=type=secret,id=NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET \
  --mount=type=secret,id=NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID \
  --mount=type=secret,id=NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID \
  --mount=type=secret,id=I18NEXUS_API_KEY \
  export NEXT_PUBLIC_API_GRAPHQL=$(cat /run/secrets/NEXT_PUBLIC_API_GRAPHQL) && \
  export NEXT_PUBLIC_FIREBASE_API_KEY=$(cat /run/secrets/NEXT_PUBLIC_FIREBASE_API_KEY) && \
  export NEXT_PUBLIC_FIREBASE_APP_ID=$(cat /run/secrets/NEXT_PUBLIC_FIREBASE_APP_ID) && \
  export NEXT_PUBLIC_FIREBASE_PROJECT_ID=$(cat /run/secrets/NEXT_PUBLIC_FIREBASE_PROJECT_ID) && \
  export NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=$(cat /run/secrets/NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN) && \
  export NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=$(cat /run/secrets/NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) && \
  export NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=$(cat /run/secrets/NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) && \
  export NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=$(cat /run/secrets/NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID) && \
  export I18NEXUS_API_KEY=$(cat /run/secrets/I18NEXUS_API_KEY)
RUN yarn run build

FROM node:alpine AS runner
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["yarn", "run", "start"]