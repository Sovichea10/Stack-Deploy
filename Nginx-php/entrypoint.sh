#!/bin/bash

# run php service
php-fpm -D

# run nginx service
nginx -g 'daemon off;'