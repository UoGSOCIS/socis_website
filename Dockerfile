FROM node:14 as BUILD

WORKDIR /usr/src/app
COPY . .

RUN yarn install
RUN yarn build

FROM joseluisq/static-web-server:2

COPY --from=BUILD /usr/src/app/build /public

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80
