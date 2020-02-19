GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Publish npm${NC}\n"

git config user.email "hi@jsdrome.com"
git config user.name "jsDromeBot"
npm i
npm run release -- --ci minor
curl https://codeload.github.com/jsDrome/jsDrome/tar.gz/master --output jsdrome.tar.gz
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
npm publish --access public
