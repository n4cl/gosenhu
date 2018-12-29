FROM nginx:stable-alpine

RUN apk add nodejs npm git
ADD ./ /usr/share/nginx/html/
