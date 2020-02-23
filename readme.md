![Pipeline](https://github.com/jsDrome/ipwa/workflows/Build/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/jsDrome/ipwa/branch/master/graph/badge.svg)](https://codecov.io/gh/jsDrome/ipwa)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/jsDrome/ipwa)
[![cypress](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/nuaag3/)

⭐️ Star us on GitHub — it helps!

# iPWA

🚀 Spin up an isomorphic progressive web app or native app deployable in the cloud, publishable as AN npm package or docker container with a fully automated supercharged pipeline, all in under an hour!

## Salient Features

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
13. Deployable in Google Container Registry using Terraform (WIP)
14. Deployable in npm and Github Package Register as npm package.
15. Integrated with Google Analytics
16. Integrated with Sentry

## How this works

All you need to do is spin up a new project, sign up to a few providers, set the tokens and secrets correctly and the rest is all magic. When you push code to master, it will just be deployed everywhere in 10 minutes after a series of checks.

## Setup Project

- Create a new project in Github. Do not push anything yet.
- Create new Codecov app and set `CODECOV_TOKEN` secret in Github. This is where our unit test reports are stored.
- Create new Heroku app and set `HEROKU_APP_NAME` and `HEROKU_API_KEY` secrets in Github. This is where our app will be staged.
- Set your stage url in .configrc
- Run `npm run test:cypress:open`, create a new project in Cypress and set `CYPRESS_PROJECT_ID` and `CYPRESS_TOKEN` secrets in Github.
- Create new Percy app and set `PERCY_TOKEN` secrets in Github. This is where our visual regression test reports are stored.
- Sign up to Docker and set `DOCKER_USER` and `DOCKER_PASS` secrets in Github. This is where our docker image is pushed.
- Set `GITHUB_DOCKER_IMAGE_NAME` & `DOCKERHUB_DOCKER_IMAGE_NAME` in `./.github/workflows/build-master.yml`. The docker image above will be pushed to Github package registry as well.
- Sign up to npm and set `NPM_TOKEN` secret in Github.
- Sign up to expo and set `EXPO_USER` and `EXPO_PASS` secrets in Github. This is where our expo app will be published.
- Create new firebase app and set `FIREBASE_APP_NAME` and `FIREBASE_TOKEN` secrets in Github. This will be our production environment.
- Install ipwa globally - `npm i -g ipwa`
- Spawn a new ipwa app - `ipwa my-app`
- Push the new project you just created to Github.

# Detailed Instructions

## Setup Project

1. Install ipwa

```shell
npm i -g ipwa
```

2. Spawn a new ipwa app.

```shell
ipwa my-app
```

## Run locally normally

Make sure npm dependencies are installed.

`npm run dev` in one shell,

`npm run nodemon` in another.

## Run locally as a docker container

- Set the following environment variables locally.
  - `DOCKER_IMAGE_NAME`

```shell
npm run build-docker
```

## Run locally as a helm app

Make sure minikube and helm are installed.

Set `HELM_APP_NAME` environment variable.

Run locally:

```shell
npm run build:helm
npm run build:helm:uninstall
```

## Run unit tests locally

```shell
npm run test
```

## Setup Github actions

Set up the secrets given in the sections below.

## Setup Codecov

- Sign up in Codecov and integrate it with your project.
- Set the following environment secrets.
  - `CODECOV_TOKEN`

Run locally:

```shell
npm run test:codecov
```

Run in CI: See workflow file.

## Setup Cypress

- Sign up in Cypress and integrate it with your project.
- Set the following environment secrets.
  - `CYPRESS_PROJECT_ID`
  - `CYPRESS_TOKEN`

Run locally:

```shell
npm run test:cypress:run
```
Run in CI: See workflow file.

## Setup Percy

- Sign up in Percy and integrate it with your project.
- Set the following environment secrets.
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
- Set the following environment secrets.

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

Run in CI:

Set `GITHUB_DOCKER_IMAGE_NAME` in `./.github/workflows/build-master.yml`.

## Setup Dockerhub Container Registry release

Run locally: -

Run in CI:

Set `DOCKERHUB_DOCKER_IMAGE_NAME` in `./.github/workflows/build-master.yml`.

## Setup npm publishing

- Sign up in npm and integrate it with your project.
- Set the following environment secret.
  - `NPM_TOKEN`

Run locally: -

Run in CI: See workflow file.

## Setup Expo publishing

Run locally:

```shell
npm run release:expo
```

Run in CI: See workflow file.
