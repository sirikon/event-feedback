FROM mhart/alpine-node:8.9.4

ENV NODE_ENV=production

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD index.js .
ADD src ./src

CMD node index.js
