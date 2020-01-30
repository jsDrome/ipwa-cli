# Some important commands

## docker

- docker login
- docker ps -a
- docker stop $(docker ps -aq)
- docker rm $(docker ps -aq)
- docker images
- docker pull jsdrome/jsdrome.com
- docker build
- docker run -p 9000:5000 jsdrome/jsdrome.com
- docker push

## docker-compose

- docker-compose up --build
- docker-compose -f docker-compose.yml up --build
- docker-compose push

## heroku

- heroku container:login
- git remote add heroku git@heroku.com:jsdrome.git
- heroku container:push web --app jsdrom
- heroku container:release web --app jsdrome
- heroku logs --tail --app jsdrome