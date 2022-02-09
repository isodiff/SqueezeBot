FROM node:16-bullseye
WORKDIR /app
COPY package.json /app

RUN apt-get update
RUN apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
RUN npm install --build-from-source --sqlite=/usr/local
RUN npm up -g

COPY . /app/
CMD node -v && node ./util/loadslash.js && node index.js