GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Release Github${NC}\n"

REPO=$(echo $GITHUB_REPO | tr '[:upper:]' '[:lower:]')
IMAGE_ID=docker.pkg.github.com/$REPO/$GITHUB_DOCKER_IMAGE_NAME
docker tag $DOCKERHUB_DOCKER_IMAGE_NAME $IMAGE_ID:latest
echo $GITHUB_TOKEN | docker login docker.pkg.github.com -u $GITHUB_USER --password-stdin
docker push $IMAGE_ID:latest
