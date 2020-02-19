GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Regression tests${NC}\n"

npm run test:codecov
npm run test:cypress:run
npm run test:puppeteer
npm run test:percy
