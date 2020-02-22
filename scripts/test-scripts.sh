log()
{
  GREEN='\033[0;32m'
  BOLD='\033[1m'
  NC='\033[0m' # No Color
  WORD=`echo $1 | tr 'a-z' 'A-Z'`
  printf "${GREEN}${BOLD}${WORD}${NC}\n"
}

log "Setting environment variables"
source ./.env/env.sh

log "Sanity Checks"
sh ./scripts/sanity_check.sh

log "Releasing to Heroku"
sh ./scripts/release_heroku.sh

log "Regression tests"
sh ./scripts/regression_tests.sh

log "Releasing to Dockerhub"
sh ./scripts/release_dockerhub.sh

log "Relasing to Github"
sh ./scripts/release_github.sh

log "Releasing to Firebase"
sh ./scripts/release_firebase.sh

log "Releasing to npm"
sh ./scripts/release_npm.sh

log "Releasing to Helm"
sh ./scripts/release_helm.sh

log "Cleaning up"
npm run clean
