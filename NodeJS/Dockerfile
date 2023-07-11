FROM node:alpine

WORKDIR /usr/app

COPY . /usr/app

RUN rm -f package-lock.json
RUN npm install express nodemon

EXPOSE 3010

CMD ["npm", "start", "--", "--port", "3010"]