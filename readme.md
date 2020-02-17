![Build](https://github.com/jsDrome/jsDrome/workflows/Build/badge.svg?branch=master)

# Configuration

1. Set environment secrets in CI

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
  - `GITHUB_TOKEN`

2. Set environment variables in `.github/workflows/build-master.yml`

# Npm scripts

## build scripts

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
build:docker
build:helm
```

## test scripts

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

## firebase scripts

```shell
firebase:serve
firebase:shell
firebase:start
firebase:deploy
```

## expo scripts

```shell
expo:start
expo:android
expo:ios
expo:web
expo:eject
```

## other scripts

```shell
start
dev
nodemon
lint
clean
```
