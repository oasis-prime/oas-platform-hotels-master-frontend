FROM node:alpine AS build

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .

ENV NEXT_PUBLIC_API_GRAPHQL https://api.smartgo.life/graphql
ENV NEXT_PUBLIC_FIREBASE_API_KEY AIzaSyCZxy_LNGr7dn17eiXlaBRYT4TdrU_V2JI
ENV NEXT_PUBLIC_FIREBASE_APP_ID 1:261377799143:web:4319e57b8e5df301f20342
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID oas-platform
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN oas-platform.firebaseapp.com
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET oas-platform.appspot.com
ENV NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID G-5EG5H7WB2H
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID 261377799143
ENV I18NEXUS_API_KEY ROJ9P6fy2ajjzBJRhwBsvg

RUN yarn run build

FROM node:alpine AS runner
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["yarn", "run", "start"]