FROM node:18-alpine

WORKDIR /home/microservice-app/adminService

COPY package.json package-lock.json /home/microservice-app/adminService/

RUN npm install

COPY . /home/microservice-app/adminService/

CMD [ "npm", "start" ]