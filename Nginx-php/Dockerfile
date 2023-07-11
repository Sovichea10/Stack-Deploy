# **** RUN PHP and Nginx in one shared container **** 
FROM php:8.3-rc-fpm-alpine

COPY entrypoint.sh /etc/entrypoint.sh

# update package
RUN apk update && apk upgrade
RUN apk add bash

# Install Nginx
RUN apk add nginx

ENTRYPOINT [ "/etc/entrypoint.sh" ]


