npm run clean
npm run build:client:prod
npm run build:server:firebase
cd _dist
npm i --production --no-optional
cd ..
npm run firebase:deploy
