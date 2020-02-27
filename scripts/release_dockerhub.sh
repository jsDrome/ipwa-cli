set -e
docker-compose -f infra/docker/docker-compose.yml build
echo ${DOCKER_PASS} | docker login --username=${DOCKER_USER} --password-stdin docker.io
docker-compose -f infra/docker/docker-compose.yml push
