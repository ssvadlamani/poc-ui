FROM node:9.4.0-alpine
COPY . .
COPY package.json .
RUN npm install &&\
    apk update &&\
    apk upgrade
EXPOSE  3000
CMD node start
