GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Set env vars
printf "${GREEN} Setting environment variables${NC}\n"
source ./.env/env.sh

# clean up
printf "${GREEN} Cleaning folders${NC}\n"
npm run clean


# lint
printf "${GREEN} Performing Lint checks${NC}\n"
npm run lint


# tests
printf "${GREEN} Running tests${NC}\n"
npm test
npm run test:codecov
npm run test:cypress:run
npm run test:puppeteer
npm run test:percy

# build
printf "${GREEN} Building Source code${NC}\n"
npm run build:client:dev
npm run build:client:prod
npm run build:server:dev
npm run build:server:prod

# deploy to docker hub
printf "${GREEN} Deploying on dockerhub${NC}\n"
sh ./scripts/deploy-docker.sh

# deploy to heroku
printf "${GREEN} Deploying on heroku${NC}\n"
sh ./scripts/deploy-heroku.sh

# deploy to firebase
printf "${GREEN} Deploying on firebase${NC}\n"
sh ./scripts/deploy-firebase.sh

# deploy in local kubernetes
printf "${GREEN} Deploying to minikube${NC}\n"
npm run build:helm
npm run uninstall:helm

printf "${GREEN} Success!${NC}\n"
