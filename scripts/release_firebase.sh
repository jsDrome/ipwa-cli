set -e
npm run build:client:prod
npm run build:server:firebase
node ./scripts/package-copier.js
npm i --prefix _dist
npx firebase use $FIREBASE_APP_NAME
npm run firebase:deploy
npm run clean
