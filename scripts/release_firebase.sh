GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Release Firebase${NC}\n"

npm run clean
npm run build:client:prod
npm run build:server:firebase
node ./scripts/package-copier.js
cd _dist
npm i
cd ..
npm run firebase:deploy
npm run clean
