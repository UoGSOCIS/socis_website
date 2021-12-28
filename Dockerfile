FROM node:14 as BUILD

WORKDIR /usr/src/app
COPY package.json  yarn.lock .

RUN yarn install

COPY . .
RUN yarn build

FROM node:14

WORKDIR /usr/src/app

RUN npm install -g serve@13.0.2

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80

CMD [ "serve", "-p", "80", "-s", "." ]

COPY --from=BUILD /usr/src/app/build /usr/src/app
