![Pipeline](https://github.com/jsDrome/ipwa/workflows/Build/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/jsDrome/ipwa/branch/master/graph/badge.svg)](https://codecov.io/gh/jsDrome/ipwa)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/jsDrome/ipwa)
[![cypress](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/nuaag3/)

# iPWA

🚀 Spin up an isomorphic progressive web app or native app deployable in the cloud, publishable as an npm package or docker container with a fully automated supercharged pipeline, all in under an hour, so you can focus on creating stuff!

## How this works

This package was created with automated pipeline in mind. One codebase for web and native apps where when something gets merged to master, it gets to production. All you need to do is spin up a new project, set the tokens and secrets correctly and the rest is all magic. When you push code to master, it will just be deployed everywhere after a series of checks. What happens behind the scene is once you push code to Github, it triggers Github actions. If its the master branch, it runs a basic Sanity Check where it builds the client and server code base, runs lint and unittests and reports to Codecov. This sanity check is followed by staging in Heroku. The application is dockerized and deployed as a docker container on Heroku. Once done, regression tests are performed on this staging environment. Unit tests, Cypress tests, Puppeteer and Percy visual regression tests are performed on this environment. Once passed, the docker image is pushed to Dockerhub and Github Container Registry, deployed into Firebase and published to Expo as over-the-air update. To top it all, its published to npm as well.

## Install

Install ipwa globally

```shell
npm i -g @jsdrome/ipwa
```

Create a new ipwa app

```shell
ipwa my-app install
```
This will create a new project called my-app in the current directory and install npm dependencies.


## Set these runtime env vars in `./.env/env.sh`.

```shell
config_secrets__linkedin__clientId
config_secrets__linkedin__clientSecret
config_secrets__github__clientId
config_secrets__github__clientSecret
const config_secrets__sendInBlue__user
const config_secrets__sendInBlue__pass
config_secrets_jsdrome_encryptKey
config_props__gtmId
```

## Set these build time env vars in `./.env/env.sh` and in Github secrets

```
CODECOV_TOKEN
IMAGE_NAME
HEROKU_APP_NAME
HEROKU_API_KEY
CYPRESS_TOKEN
CYPRESS_PROJECT_ID
PERCY_TOKEN
FIREBASE_APP_NAME
FIREBASE_TOKEN
config_props__url
```

## Change defaults in `.configrc` as necessary.


# Development

## Run app locally

```shell
npm run dev
npm run nodemon
```

## Run app as docker container

Make appropriate changes to `./infra/docker/docker-compose.yml` and `./infra/docker/Dockerfile`.

```shell
npm run build:docker
```

## Run unit tests

```shell
npm run test
```

## Run cypress tests

```shell
npm run test:cypress
```

## Run puppeteer tests

```shell
npm run test:puppeteer
```


⭐️ Star us on GitHub — it helps!
