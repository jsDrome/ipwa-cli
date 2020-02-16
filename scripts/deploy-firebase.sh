npm run clean
npm run build:client:prod
npm run build:server:firebase
cd _dist
npm i --production --no-optional
cd ..
firebase deploy --token ${FIREBASE_TOKEN}
