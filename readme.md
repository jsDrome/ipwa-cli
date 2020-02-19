![Build](https://github.com/jsDrome/jsDrome/workflows/Build/badge.svg?branch=master)

# Setup Project

1. Install jsDrome

```shell
npm i -g jsdrome
```

2. Spawn a new jsdrome app.

```shell
jsdrome my-app
```

# Run locally

Make sure npm dependencies are installed.

`npm run dev` in one shell,

`npm run nodemon` in another.

### Other build scripts

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
```

# Run as docker container

- Set the following environment variables locally.
  - `DOCKER_IMAGE_NAME`

```shell
npm run build-docker
```

# Run as Helm app

Make sure minikube and helm are installed.

Run locally:

```shell
  build:helm
  build:helm:uninstall
```

# Setup Jest

```shell
npm run test
```

# Setup Github actions

Set up the secrets given in the sections below and you're good to go.

# Setup Codecov

- Sign up in Codecov and integrate it with your project.
- Set the following environment variables locally.
  - `CODECOV_TOKEN`

Run locally:

```shell
npm run test:codecov
```

Run in CI: See workflow file.

# Setup Cypress

- Sign up in Cypress and integrate it with your project.
- Set the following environment variables locally.
  - `CYPRESS_TOKEN`

Run locally:

```shell
npm run test:cypress:run
```
Run in CI: See workflow file.

# Setup Percy

- Sign up in Percy and integrate it with your project.
- Set the following environment variables locally.
  - `PERCY_TOKEN`

Run locally:

```shell
npm run test:percy
```
Run in CI: See workflow file.

# Setup Puppeteer

Run locally:

```shell
npm run test:puppeteer
```

Run in CI: See workflow file.


# Setup Heroku Deployment

- Sign up in Heroku and create a new app.
- Set the following environment variables locally as well as as a Github secret.

  - `DOCKER_IMAGE_NAME`
  - `HEROKU_APP_NAME`
  - `HEROKU_API_KEY`

Run locally:

```shell
npm run deploy:heroku
```
Run in CI: See workflow file.

# Setup Firebase deployment

- Sign up in Firebase and integrate it with your project.
- Set the following environment variables locally.
  - `FIREBASE_TOKEN`

Run locally:

```shell
npm run deploy:firebase
```
Run in CI: See workflow file.

# Setup Github Container Registry release

Run locally: -

Run in CI: See workflow file.

# Setup Dockerhub Container Registry release

Run locally: -

Run in CI: See workflow file.

# Setup npm publishing

- Sign up in npm and integrate it with your project.
- Set the following environment secret.
  - `NPM_TOKEN`

Run locally: -

Run in CI: See workflow file.

# Setup Expo

Run locally:

```shell
  expo:start
  expo:android
  expo:ios
  expo:web
  expo:eject
```
