FROM node:18-alpine

WORKDIR /home/microservice-app/gateway

COPY package.json package-lock.json /home/microservice-app/gateway/

RUN npm install

COPY . /home/microservice-app/gateway/

CMD [ "npm", "start" ]