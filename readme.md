![Pipeline](https://github.com/jsDrome/ipwa/workflows/Build/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/jsDrome/ipwa/branch/master/graph/badge.svg)](https://codecov.io/gh/jsDrome/ipwa)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/jsDrome/ipwa)
[![cypress](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/nuaag3/)

⭐️ Star us on GitHub — it helps!

# iPWA

🚀 Spin up an isomorphic progressive web app or native app deployable in the cloud, publishable as AN npm package or docker container with a fully automated supercharged pipeline, all in under an hour!

## Salient Features

1. Frontend in React, Redux
2. Backend in Node
3. Native in React Native (Expo)
4. Isomorphic/Progressive Web Apps
6. Unit testing using Jest
7. Code coverage reports using Codecov
8. Regression testing using Cypress, Puppeteer & Percy
9. Fully automated pipeline using Github actions
10. Deployable in Dockerhub, Github Container Registry as Docker image
11. Publishable in npm, Github package registry as npm package
12. Publishable in Expo as OTA updates.
13. Deployable in Google Container Registry using Terraform (WIP)
14. Helm charts deployable in a Kubernetes Cluster (WIP)

## How this works

This package was created with automated pipeline in mind. All you need to do is spin up a new project, sign up to a few providers, set the tokens and secrets correctly and the rest is all magic. When you push code to master, it will just be deployed everywhere after a series of checks.

## Setup Project

Install ipwa globally

```shell
`npm i -g ipwa`
```

Spawn a new ipwa app

```shell
`ipwa my-app install`
```
This will create a new project called my-app in the current directory and install npm dependencies.

Create a new project in Github. Do not push anything yet.

Create new Codecov app and set `CODECOV_TOKEN` secret in Github. This is where our unit test reports are stored.

Create new Heroku app and set `HEROKU_APP_NAME` in `./.github/workflows/build-master.yml` and `HEROKU_API_KEY` secret in Github. This is where our app will be staged.

Set your stage url in .configrc

Run `npm run test:cypress:open`, create a new project in Cypress and set `CYPRESS_PROJECT_ID` and `CYPRESS_TOKEN` secrets in Github.

Create new Percy app and set `PERCY_TOKEN` secrets in Github. This is where our visual regression test reports are stored.

Sign up to Docker and set `DOCKER_USER` and `DOCKER_PASS` secrets in Github. This is where our docker image is pushed.

Set `GITHUB_DOCKER_IMAGE_NAME` & `DOCKERHUB_DOCKER_IMAGE_NAME` in `./.github/workflows/build-master.yml`. The docker image above will be pushed to Github package registry as well.

Sign up to npm and set `NPM_TOKEN` secret in Github.

Sign up to expo and set `EXPO_USER` and `EXPO_PASS` secrets in Github. This is where our expo app will be published.

Create new firebase app and set `FIREBASE_APP_NAME` in `./.github/workflows/build-master.yml` and `FIREBASE_TOKEN` secrets in Github. This will be our production environment.

Push the new project you just created to Github.

# Local setup

## Install ipwa

```shell
npm i -g ipwa
```

## Spawn a new ipwa app.

```shell
ipwa my-app install
```

## Run app locally

Make sure npm dependencies are installed.

`npm run dev` in one shell,

`npm run nodemon` in another.

## Run app as docker container

- Set the following environment variables.
  - `DOCKERHUB_DOCKER_IMAGE_NAME`

```shell
npm run build:docker
```

## Run as a helm app

Make sure minikube and helm are installed.

Set `HELM_APP_NAME` environment variable.

```shell
npm run build:helm
```

## Unit tests

```shell
npm run test
```

## Run Codecov

- Set the following environment variables.
  - `CODECOV_TOKEN`

```shell
npm run test:codecov
```

## Run Cypress tests

- Set the following environment variables.
  - `CYPRESS_PROJECT_ID`
  - `CYPRESS_TOKEN`

```shell
npm run test:cypress:open
```

## Run Percy

- Set the following environment variables.
  - `PERCY_TOKEN`

```shell
npm run test:percy
```

## Run Puppeteer

```shell
npm run test:puppeteer
```

## Deploy on Heroku

- Set the following environment variables.

  - `HEROKU_APP_NAME`
  - `HEROKU_API_KEY`

```shell
npm run release:heroku
```

## Deploy on Firebase

- Set the following environment variables.
  - `FIREBASE_TOKEN`

```shell
npm run release:firebase
```

## Release image on Dockerhub Container Registry

Set the following environment variables:
 - `DOCKER_USER`
 - `DOCKER_PASS`
 - `DOCKERHUB_DOCKER_IMAGE_NAME`

```shell
npm run release:dockerhub
```

## Release image on Github Container Registry

Set the following environment variables:
 - `GITHUB_REPO`
 - `GITHUB_DOCKER_IMAGE_NAME`
 - `GITHUB_USER`
 - `GITHUB_TOKEN`

```shell
npm run release:github
```

## Release npm package to npm registry

- Set the following environment variables:
  - `NPM_TOKEN`

```shell
npm run release:npm
```

## Publish app on Expo

- Set the following environment variables.
  - `EXPO_USER`
  - `EXPO_PASS`

```shell
npm run release:expo
```
