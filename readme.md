# Configurables

### ./.env/env.sh

  - `PROJECT_NAME` used in `npm run build:helm`, `npm run uninstall:helm` and `Chart.yaml`
  - `DOCKER_USER`, `DOCKER_PASS`, `DOCKER_IMAGE_NAME` for pushing to docker hub and in `values.yaml`
  - `HEROKU_APP_NAME` and `HEROKU_API_KEY` for deploying in heroku
  - `CODECOV_TOKEN` for uploading reports to Codecov.
  - `CYPRESS_TOKEN` for uploading reports to Cypress.
  - `PERCY_TOKEN` for uploading reports to Percy.

### .github/workflows/build.yml

  - Set environment variables

### CI Environment Variables

  - `HEROKU_API_KEY`
  - `CODECOV_TOKEN`
  - `CYPRESS_TOKEN`
  - `PERCY_TOKEN`

# Npm scripts

## build scripts

```shell
build:client:dev
build:client:dev:watch
build:client:devserver
build:client:prod
build:client:prod:watch
build:server:dev
build:server:dev:watch
build:server:prod
build:server:prod:watch
build:docker
build:helm
```

## test scripts

```shell
test
test:scripts
```

## other scripts

```shell
start
dev
lint
```

# Some common commands

## docker

```shell
docker login
docker ps -a
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi -f $(docker images -aq)
docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
docker images
docker pull jsdrome/jsdrome
docker build
docker run -p 9000:5000 jsdrome/jsdrome
docker push
```

## docker-compose

```shell
docker-compose -f infra/docker/docker-compose.yml up --build
docker-compose -f infra/docker/docker-compose.yml push
```

## heroku

```shell
heroku container:login
git remote add heroku git@heroku.com:jsdrome.git
heroku container:push web --app jsdrome
heroku container:release web --app jsdrome
heroku logs --tail --app jsdrome
```

## minikube

```shell
minikube status
minikube start --vm-driver=virtualbox
minikube dashboard
minikube service jsdrome-service --url
minikube stop
eval $(minikube docker-env)
```

## kubectl

### kubectl create

```shell
kubectl create -f kubernetes/deployment.yml
kubectl create -f kubernetes/services.yml
kubectl create -f kubernetes/ingress.yml
kubectl create deployment jsdrome-deployment --image=jsdrome/jsdrome
```

### kubectl expose

```shell
kubectl expose deployment jsdrome-deployment --type=LoadBalancer --port=5000
```

### kubectl get

```shell
kubectl get deployments
kubectl get pods
kubectl get services
kubectl get secrets
kubectl get ingress
```

### kubectl delete

```shell
kubectl delete services jsdrome-service
kubectl delete deployment jsdrome-deployment
kubectl delete pod jsdrome-pod
kubectl delete ingress jsdrome-ingress
kubectl delete --all deployments
kubectl delete --all pods
kubectl delete --all services
kubectl delete --all ingress
```

### kubectl scale

```shell
kubectl scale -n default deployment jsdrome-deployment --replicas=4
```

### kubectl secret

```shell
kubectl create secret generic jsdrome-secrets --from-literal=PAYTM_KEY=qWzN4AATjzd8pRPC
```

### kubectl describe

```shell
kubectl describe deployments
kubectl describe secrets/jsdrome-secrets
```

## helm

```shell
helm ls
helm install jsdrome .
helm uninstall jsdrome
helm get manifest jsdrome
helm upgrade jsdrome . --set replicaCount=5
helm upgrade jsdrome . --set containerName=jsdrome/jsdrome
helm rollback jsdrome 1
```

## terraform

```shell
terraform init
terraform plan -out myplan
terraform apply "myplan"
terraform destroy
 ```