GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Release Github${NC}\n"


docker-compose -f infra/docker/docker-compose.yml build
echo "${GITHUB_TOKEN}" | docker login docker.pkg.github.com -u ${{ github.actor }} --password-stdin
REPO=$(echo "${{ github.repository }}" | tr '[:upper:]' '[:lower:]')
IMAGE_ID=docker.pkg.github.com/$REPO/$GITHUB_DOCKER_IMAGE_NAME
VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')
[[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
[ "$VERSION" == "master" ] && VERSION=latest
docker tag $DOCKERHUB_DOCKER_IMAGE_NAME $IMAGE_ID:$VERSION
docker push $IMAGE_ID:$VERSION
