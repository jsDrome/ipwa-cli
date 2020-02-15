# Set env vars
source ./.env/env.sh

# clean up dist
rm -rf _dist

# basic checks
npm run lint
npm test
npm run build:client:dev
npm run build:client:prod
npm run build:server:dev
npm run build:server:prod

# deploy to docker hub
sh ./scripts/deploy-docker.sh

# deploy to heroku
sh ./scripts/deploy-heroku.sh

# deploy in local kubernetes
npm run build:helm
npm run uninstall:helm