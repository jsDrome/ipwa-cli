![Pipeline](https://github.com/jsDrome/ipwa/workflows/Build/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/jsDrome/ipwa/branch/master/graph/badge.svg)](https://codecov.io/gh/jsDrome/ipwa)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/jsDrome/ipwa)
[![cypress](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/nuaag3/)

⭐️ Star us on GitHub — it helps!

# ipwa

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
14. Deployable in npm and Github Package Register as npm package.
15. Integrated with Google Analytics
16. Integrated with Sentry

## How this works

All you need to do is spin up a new project, sign up to a few providers, set the tokens and secrets correctly and the rest is all magic. When you push code to master, it will just be deployed everywhere in 10 minutes after a series of checks.

## Setup Project

1. Install ipwa

```shell
npm i -g ipwa
```

2. Spawn a new ipwa app.

```shell
ipwa my-app
```

3. You need to sign up for: Codecov, Cypress, Percy, Dockerhub, Heroku, Firebase and npm and get the respective tokens.

4. Set the environment secrets in Github.

5. Push

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
