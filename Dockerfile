FROM node:16-alpine
WORKDIR /app
COPY package.json /app
RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev
RUN node -v
RUN npm install
RUN npm install -g npm@8.4.1
COPY . /app/
CMD node -v && node ./util/loadslash.js && node index.js