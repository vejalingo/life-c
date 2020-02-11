FROM node:12.2.0-alpine 

RUN mkdir -p /app/lifeC-server
WORKDIR /app/lifeC-server

COPY package.json yarn.lock ./app/lifeC-server/

RUN yarn

COPY . /app/lifeC-server

CMD ["yarn" "dev"]