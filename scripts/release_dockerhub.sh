GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${GREEN}Release Dockerhub${NC}\n"

echo ${DOCKER_PASS} | docker login --username=${DOCKER_USER} --password-stdin docker.io
docker-compose -f infra/docker/docker-compose.yml build
docker-compose -f infra/docker/docker-compose.yml push
