![Build](https://github.com/jsDrome/jsDrome/workflows/Build/badge.svg?branch=master)

# Setup Project

1. Install jsDrome

```shell
npm i -g jsdrome
```

2. Create a new jsdrome app.

```shell
jsdrome my-app
cd my-app
npm i
```

# Run locally

`npm run dev` in one shell,

`npm run nodemon` in another.

### Build scripts

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
`npm run build-docker`
```

# Setup Jest

```shell
npm run test
```

# Setup Codecov

- Sign up in Codecov and integrate it with your project.
- Set the following environment variables locally.
  - `CODECOV_TOKEN`

```shell
npm run test:codecov
```

# Setup Cypress

- Sign up in Cypress and integrate it with your project.
- Set the following environment variables locally.
  - `CYPRESS_TOKEN`

```shell
npm run test:cypress:run
```

# Setup Percy

- Sign up in Percy and integrate it with your project.
- Set the following environment variables locally.
  - `PERCY_TOKEN`

```shell
npm run test:percy
```

# Setup Puppeteer

```shell
npm run test:puppeteer
```

# Setup Expo

```shell
  expo:start
  expo:android
  expo:ios
  expo:web
  expo:eject
```

# Setup Helm

Make sure minikube and helm are installed.

```shell
  build:helm
  build:helm:uninstall
```

# Setup Github actions

Set up the secrets given in the sections below and you're good to go.

# Setup Heroku Deployment

- Sign up in Heroku and create a new app.
- Set the following environment variables locally as well as as a Github secret.

  - `DOCKER_IMAGE_NAME`
  - `HEROKU_APP_NAME`
  - `HEROKU_API_KEY`

Deploy locally:

```shell
npm run deploy:heroku
```

Deploy in CI: See workflow file.

# Setup Firebase deployment

- Sign up in Firebase and integrate it with your project.
- Set the following environment variables locally.
  - `FIREBASE_TOKEN`

Deploy locally:

```shell
npm run deploy:firebase
```

Deploy in CI: See workflow file.

### Firebase scripts

```shell
  firebase:serve
  firebase:shell
  firebase:start
  firebase:logs
  firebase:deploy
```

# Setup Github Container Registry release

Deploy in CI: See workflow file.

# Setup Dockerhub Container Registry release

Deploy in CI: See workflow file.

# Setup Npm publishing

- Sign up in npm and integrate it with your project.
- Set the following environment secret.
  - `NPM_TOKEN`

Deploy in CI: See workflow file.

