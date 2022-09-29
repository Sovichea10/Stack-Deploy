# Docker-Swarm

Docker Swarm is a group of either physical or virtual machines that are running the Docker application and that have been configured to join together in a cluster.

## Docker command

List images in docker:
```sh
docker images
``` 
List all containers:
```sh 
docker ps -a
```
List all running containers:
```sh 
docker ps 
```
Start container:
```sh
docker start "container_id"
``` 
Stop container:
```sh
docker stop "container_id" 
```
### Remove container:
```sh
docker rm "container_id"
``` 
Remove image:
```sh
docker rmi "image_id or image_name:tag"
```
Remove all unused containers & images:
```sh
docker system prune
``` 
Remove all images:
```sh
docker image prune --all
```
Build image from dockerfile:
```sh
docker build -t "new image_name" .
```
Create container from image:
```sh
docker run --name "container_name" -d -p 8080:80 [image]
```
Build image from another image:
```sh
docker tag [exist_image]:[TAG] [new_image]:[TAG]
```
Tag image 
```sh 
docker tag [OPTIONS] IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]  
```
Push to registry:
```sh
docker push [NAME]:TAG 
``` 

## Docker-compose command

Build image to create container:
```sh
docker-compose up -d
```
Rebuild on updated compose-file:
```sh
docker-compose up -d --build
```
Config testing:
```sh
docker-compose config
``` 

## Swarm command

Create swarm:
```sh
docker swarm init --advertise-addr "IP Server"(e.g 192.168.99.121)
```
Build stack to create replicas:
```sh
docker stack deploy --compose-file docker-stack-deploy.yml "project_name"(e.g pos)
```
Create replicas service:
```sh
docker serivce create --name "name" -p port:mapport --replicas="count" [image_name]:[tag] 
```
List service:
```sh
docker service ls
```
Scale single service:
```sh
docker service scale [service-name]="count"
```
Scale multiple service:
```sh
docker service scale [service1]="count" [service2]="count"
```
Remove service
```sh
docker service rm "service_name"(e.g pos-api)
``` 
