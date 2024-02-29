FROM node:18.18-alpine3.18 as build

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

FROM nginx

EXPOSE 80
EXPOSE 443

COPY --from=build /app/dist/vbr-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf