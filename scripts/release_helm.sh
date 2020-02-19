GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Release Helm${NC}\n"

npm run build:helm
npm run build:helm:uninstall
