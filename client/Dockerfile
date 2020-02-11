FROM node:12.2.0-alpine

RUN mkdir -p /app/lifeC-client
WORKDIR /app/lifeC-client

COPY package.json yarn.lock ./app/lifeC-client/

RUN yarn

COPY . /app/lifeC-client

ENV REACT_APP_API_ENDPOINT=http://localhost:9000
ENV REACT_APP_PREFIX=api

CMD ["yarn" "start"]