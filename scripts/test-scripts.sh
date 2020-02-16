# Set env vars
source ./.env/env.sh

# clean up
npm run clean

# lint
npm run lint

# tests

npm test
npm run test:codecov
npm run test:cypress:run

# build
npm run build:client:dev
npm run build:client:prod
npm run build:server:dev
npm run build:server:prod

# deploy to docker hub
sh ./scripts/deploy-docker.sh

# deploy to heroku
sh ./scripts/deploy-heroku.sh

# deploy to firebase
sh ./scripts/deploy-firebase.sh

# deploy in local kubernetes
npm run build:helm
npm run uninstall:helm
