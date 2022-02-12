FROM node:16-bullseye
RUN apt-get update && apt-get install -y apt-transport-https apt-utils
RUN apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
WORKDIR /app
COPY package.json /app
COPY ./fonts/Dongle-Regular.ttf ./
RUN mkdir -p /usr/share/fonts/truetype/
RUN install -m644 Dongle-Regular.ttf /usr/share/fonts/truetype/
RUN rm ./Dongle-Regular.ttf
RUN apt-get update
RUN npm up -g
RUN npm install --build-from-source --sqlite=/usr/local
RUN npm up -g
COPY . /app/
CMD node -v && node ./util/loadslash.js && node index.js