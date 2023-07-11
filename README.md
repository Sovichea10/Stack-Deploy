<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>
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
Remove container:
```sh
docker rm "container_id"
``` 
Remove image:
```sh
docker rmi "image_id or image_name:tag"
```
Remove all unused containers, networks and clear cache memory:
```sh
docker system prune
```
Remove all unused images, containers and networks:
```sh
docker system prune -a
```
Remove all images:
```sh
docker image prune --all
```
Remove none images:
```sh
docker image prune
```
Build image from dockerfile:
```sh
docker build -t "new image_name" .
```
Build image from custom dockerfile name:
```sh
docker build -f <dockerfile_name> -t .
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
Stop and Remove Containers:
```sh
docker-compose down
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
docker serivce create --name "name" -p published_port:default_port --replicas="count" [image_name]:[tag] 
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
