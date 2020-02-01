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


## minikube

 - minikube status
 - minikube start --vm-driver=virtualbox
 - minikube dashboard
 - minikube service jsdrome-service --url
 - minikube stop

## kubectl

### kubectl create

 - kubectl create -f kubernetes/deployment.yml
 - kubectl create -f kubernetes/services.yml
 - kubectl create -f kubernetes/ingress.yml
 - kubectl create deployment jsdrome-deployment --image=jsdrome/jsdrome.com

### kubectl expose

 - kubectl expose deployment jsdrome-deployment --type=LoadBalancer --port=5000

### kubectl get

 - kubectl get deployments
 - kubectl get pods
 - kubectl get services
 - kubectl get secrets
 - kubectl get ingress

### kubectl delete

 - kubectl delete services jsdrome-service
 - kubectl delete deployment jsdrome-deployment
 - kubectl delete pod jsdrome-pod
 - kubectl delete ingress jsdrome-ingress

 - kubectl delete --all deployments
 - kubectl delete --all pods
 - kubectl delete --all services
 - kubectl delete --all ingress

### kubectl scale

 - kubectl scale -n default deployment jsdrome-deployment --replicas=4

### kubectl secret

 - kubectl create secret generic jsdrome-secrets --from-literal=PAYTM_KEY=qWzN4AATjzd8pRPC

### kubectl describe

 - kubectl describe deployments
 - kubectl describe secrets/jsdrome-secrets

## Helm

 - helm ls
 - helm install jsdrome .
 - helm uninstall jsdrome
 - helm get manifest jsdrome
 - helm upgrade jsdrome . --set replicaCount=5
 - helm upgrade jsdrome . --set containerName=jsdrome/jsdrome.com
 - helm rollback jsdrome 1


## Terraform

 - terraform init
 - terraform plan -out jsdrome.com
 - terraform apply "jsdrome.com"
 - terraform destroy