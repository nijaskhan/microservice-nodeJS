FROM node:18-alpine

WORKDIR /home/microservice-app/customerService

COPY package.json package-lock.json /home/microservice-app/customerService/

RUN npm install

COPY . /home/microservice-app/customerService/

CMD [ "npm", "start" ]