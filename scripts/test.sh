rm -rf _dist
npm run lint
npm run build:client:dev
npm run build:client:prod
npm run build:server:dev
npm run build:server:prod
npm run docker -- -d