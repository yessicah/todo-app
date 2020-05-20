FROM node:10 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
ADD ./ /app
RUN npm run build

FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
