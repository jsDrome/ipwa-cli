GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Setting environment variables${NC}\n"
source ./.env/env.sh

sh ./scripts/sanity_check.sh
sh ./scripts/release_heroku.sh
sh ./scripts/regression_tests.sh
sh ./scripts/release_dockerhub.sh
sh ./scripts/release_firebase.sh
sh ./scripts/release_helm.sh
