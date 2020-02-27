set -e
git config user.email "hi@jsdrome.com"
git config user.name "ipwa-bot"
npm i
npm run release -- --ci minor
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
npm publish --access public
