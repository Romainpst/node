FROM node:12
WORKDIR /usr/app
COPY package.json /usr/app
RUN npm install
COPY . /usr/app
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]