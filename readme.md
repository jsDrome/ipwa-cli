![Build](https://github.com/jsDrome/jsDrome/workflows/Build/badge.svg?branch=master)

# Configuration

Set the following secrets in Github and you are good to go.

  - `PROJECT_NAME`
  - `DOCKER_USER`
  - `DOCKER_PASS`
  - `DOCKER_IMAGE_NAME`
  - `HEROKU_APP_NAME`
  - `HEROKU_API_KEY`
  - `CODECOV_TOKEN`
  - `CYPRESS_TOKEN`
  - `PERCY_TOKEN`
  - `FIREBASE_TOKEN`

# Npm scripts

## Build scripts

```shell
  build:client:dev
  build:client:dev:watch
  build:client:devserver
  build:client:prod
  build:client:prod:watch
  build:server:dev
  build:server:dev:watch
  build:server:prod
  build:server:prod:watch
  build:server:firebase
  build:docker
  build:helm
  build:helm:uninstall
```

## Test scripts

```shell
  test
  test:watch
  test:codecov
  test:cypress:open
  test:cypress:run
  test:puppeteer
  test:percy
  test:scripts
```

## Firebase scripts

```shell
  firebase:serve
  firebase:shell
  firebase:start
  firebase:logs
  firebase:deploy
```

## Expo scripts

```shell
  expo:start
  expo:android
  expo:ios
  expo:web
  expo:eject
```

## Other scripts

```shell
  start
  dev
  nodemon
  lint
  clean
  release
```
