echo ${DOCKER_PASS} | docker login --username=${DOCKER_USER} --password-stdin docker.io
docker-compose -f infra/docker/docker-compose.yml build
docker-compose -f infra/docker/docker-compose.yml push