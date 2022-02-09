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
COPY . /app/
CMD node -v && node ./util/loadslash.js && node index.js