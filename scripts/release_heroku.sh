echo ${HEROKU_API_KEY} | docker login --username=_ --password-stdin registry.heroku.com
docker-compose -f infra/docker/docker-compose.yml build
docker tag ${DOCKERHUB_DOCKER_IMAGE_NAME} registry.heroku.com/${HEROKU_APP_NAME}/web
docker push registry.heroku.com/${HEROKU_APP_NAME}/web
curl -n -X PATCH https://api.heroku.com/apps/${HEROKU_APP_NAME}/formation \
  -d "{ \"updates\": [{ \"type\": \"web\", \"docker_image\": \"$(docker inspect registry.heroku.com/${HEROKU_APP_NAME}/web --format={{.Id}})\" }]}" \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.heroku+json; version=3.docker-releases" \
  -H "Authorization: Bearer ${HEROKU_API_KEY}"
