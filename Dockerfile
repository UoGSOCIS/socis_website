FROM node:14 as BUILD

WORKDIR /usr/src/app
COPY package.json  yarn.lock .

RUN yarn install

COPY . .
RUN yarn build

FROM node:14

LABEL org.opencontainers.version="v1.0.0"

LABEL org.opencontainers.image.authors="SOCIS"
LABEL org.opencontainers.image.url="https://github.com/UoGSOCIS/socis_website.git"
LABEL org.opencontainers.image.source="https://github.com/UoGSOCIS/socis_website.git"
LABEL org.opencontainers.image.vendor="University of Guelph Society of Computing and Information Sciences"
LABEL org.opencontainers.image.licenses="GPL-3.0-only"
LABEL org.opencontainers.image.title="SOCIS Club Website"
LABEL org.opencontainers.image.description="Society of Computing and Information Sciences website"



WORKDIR /usr/src/app

RUN npm install -g serve@13.0.2

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80

CMD [ "serve", "-p", "80", "-s", "." ]

COPY --from=BUILD /usr/src/app/build /usr/src/app

ARG VCS_REF
LABEL org.opencontainers.image.revision="${VCS_REF}"

ARG BUILD_DATE
LABEL org.opencontainers.image.created="${BUILD_DATE}"
