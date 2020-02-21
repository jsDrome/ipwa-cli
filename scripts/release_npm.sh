GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Publish npm${NC}\n"

git config user.email "hi@jsdrome.com"
git config user.name "ipwa-bot"
npm i
npm run release -- --ci minor

echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
npm publish --access public
