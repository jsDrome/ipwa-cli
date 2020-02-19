![Pipeline](https://github.com/jsDrome/jsDrome/workflows/Build/badge.svg?branch=master)

⭐️ Star us on GitHub — it helps!

# jsDrome

Create Web/Native Apps with:

1. Frontend in React
2. Backend in Node
3. Native in Expo
4. Isomorphic Web Apps
5. Progressive Web Apps
6. Unit testing using Jest
7. Code coverage reports using Codecov
8. Regression testing using Cypress, Puppeteer & Percy
9. Docker containers
10. Helm charts deployable in a Kubernetes Cluster
11. Fully automated pipeline using Github actions
12. Deployable in Dockerhub and Github Container Registry
13. Deployable in Google Container Registry using Terraform(WIP)
14. Publishable as an npm package
15. Integrated with Google Analytics
16. Integrated with Sentry

## How this works

All you need to do is spin up a new project, sign up to a few providers, set the tokens and secrets correctly and the rest is magic.

## Setup Project

1. Install jsDrome

```shell
npm i -g jsdrome
```

2. Spawn a new jsdrome app.

```shell
jsdrome my-app
```

## Run locally

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

## Run as docker container

- Set the following environment variables locally.
  - `DOCKER_IMAGE_NAME`

```shell
npm run build-docker
```

## Run as Helm app

Make sure minikube and helm are installed.

Run locally:

```shell
  build:helm
  build:helm:uninstall
```

## Setup Jest

```shell
npm run test
```

## Setup Github actions

Set up the secrets given in the sections below and you're good to go.

## Setup Codecov

- Sign up in Codecov and integrate it with your project.
- Set the following environment variables locally.
  - `CODECOV_TOKEN`

Run locally:

```shell
npm run test:codecov
```

Run in CI: See workflow file.

## Setup Cypress

- Sign up in Cypress and integrate it with your project.
- Set the following environment variables locally.
  - `CYPRESS_TOKEN`

Run locally:

```shell
npm run test:cypress:run
```
Run in CI: See workflow file.

## Setup Percy

- Sign up in Percy and integrate it with your project.
- Set the following environment variables locally.
  - `PERCY_TOKEN`

Run locally:

```shell
npm run test:percy
```
Run in CI: See workflow file.

## Setup Puppeteer

Run locally:

```shell
npm run test:puppeteer
```

Run in CI: See workflow file.


## Setup Heroku Deployment

- Sign up in Heroku and create a new app.
- Set the following environment variables locally as well as as a Github secret.

  - `DOCKER_IMAGE_NAME`
  - `HEROKU_APP_NAME`
  - `HEROKU_API_KEY`

Run locally:

```shell
npm run release:heroku
```
Run in CI: See workflow file.

## Setup Firebase deployment

- Sign up in Firebase and integrate it with your project.
- Set the following environment variables locally.
  - `FIREBASE_TOKEN`

Run locally:

```shell
npm run release:firebase
```
Run in CI: See workflow file.

## Setup Github Container Registry release

Run locally: -

Run in CI: See workflow file.

## Setup Dockerhub Container Registry release

Run locally: -

Run in CI: See workflow file.

## Setup npm publishing

- Sign up in npm and integrate it with your project.
- Set the following environment secret.
  - `NPM_TOKEN`

Run locally: -

Run in CI: See workflow file.

## Setup Expo

Run locally:

```shell
  expo:start
  expo:android
  expo:ios
  expo:web
  expo:eject
```
