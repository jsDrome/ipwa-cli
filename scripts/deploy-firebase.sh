npm run clean
npm run build:client:prod
npm run build:server:firebase
node ./scripts/package-copier.js
cd _dist
npm i --production --no-optional
cd ..
npm run firebase:deploy
npm run clean
