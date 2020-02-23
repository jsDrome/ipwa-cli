npm run build:client:prod
npm run build:server:firebase
node ./scripts/package-copier.js
cd _dist
npm i
cd ..
node ./scripts/firebase_config.js
npx firebase use $FIREBASE_APP_NAME
npm run firebase:deploy
npm run clean
