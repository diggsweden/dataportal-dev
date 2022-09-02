# Sveriges dataportal - utvecklarportalen

![node-current](https://img.shields.io/badge/node-16.13.2-green)
![npm-current](https://img.shields.io/badge/npm-8.1.2-green)
![nextjs-current](https://img.shields.io/badge/nextjs-12.1.6-green)

Här finns källkoden för utvecklarportalens webbklient
[https://dev.dataportal.se](https://dev.dataportal.se)

## Content backend

Utvecklarportalen hämtar innehåll via en Apollo Gateway. Sätts via env

## Environment

Skapa en .env.local

```sh
LOGSTASH_MODE=tcp
LOGSTASH_HOST=localhost
LOGSTASH_PORT=5000
LOGGING_LEVELS=warn,error,info
LOGFILE_PATH=/app/devportal.log
PORT=3000
HOST=http://localhost:$PORT
APOLLO_URL=http://localhost:1301
IMAGE_DOMAIN=localhost
REACT_APP_MEDIA_BASE_URL=http://localhost:1337
REACT_APP_RUNTIME_ENV=dev
HEALTHCHECK_SECRET=123
```

## Utveckling

```sh
yarn
yarn dev
```

Gå till [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Lokal server

För att testa applikationen kör följande:

```sh
yarn
yarn build
yarn start
```

Besök [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Produktionsbygge

Bygg för produktion genom att köra följande:

```sh
yarn build
```

Detta kommer generera applikationen som statiska filer under .next/.

## Health check

NextJs svarar på [http://localhost:1300/api/healthcheck?secret=[HEALTHCHECK_SECRET från env]](http://localhost:1300/api/healthcheck?secret=)
Cacheas inte, gör en request till contentbackend med startsidans fråga.

```sh
{"status":"fail"}
```

```sh
{"status":"pass"}
```

## Docker

```sh
#bygg image
docker build . -t nextjs-devportal

#skapa container
docker run -p 3000:3000 -e PORT=3000 -e HOST=http://localhost:3000 -e APOLLO_URL=http://host.docker.internal:1301 -e REACT_APP_RUNTIME_ENV=dev -e IMAGE_DOMAIN=localhost -e REACT_APP_MEDIA_BASE_URL="http://host.docker.internal:1337" -e HEALTHCHECK_SECRET=123 --add-host=host.docker.internal:host-gateway nextjs-devportal
```

## Stack

- [Nextjs](https://nextjs.org/) JS framework
- [TypeScript](https://www.typescriptlang.org/) typad JS
- [React](https://reactjs.org/) för UI
- [Emotion](https://emotion.sh) för styling
- [Apollo Client](https://www.apollographql.com/docs/react/) för datahämtning

## Noteringar

Projektet har ett beroende till Diggs designsystemspaket `@digg/design-system`.
I skrivande stund är källkoden till detta paket inte publicerad på Github eller NPM.
