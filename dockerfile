FROM node:latest as build-env
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
RUN npm run build

FROM nginx:latest
COPY --from=build-env /usr/src/app/.next /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
