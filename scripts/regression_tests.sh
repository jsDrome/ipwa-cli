set -e
npm run test:codecov
npm run test:cypress:run
npm run test:puppeteer
npm run test:percy
