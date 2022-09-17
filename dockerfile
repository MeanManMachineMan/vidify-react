FROM node:7.10 as build-env
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm
COPY . ./
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build-env /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
