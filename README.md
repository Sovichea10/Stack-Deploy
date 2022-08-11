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
5. docker start "container_id" : start container
6. docker stop "container_id" : stop container
7. docker rm "container_id" : remove container
8. docker rmi "image_id or image_name:tag" : remove image
9. docker system prune : remove all unused containers & images
10. docker build -t "new image_name" . : build image from dockerfile
11. docker tag [OPTIONS] IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG] : tag image in order to push in registry
12. docker push [NAME]:TAG : push to registry

# Docker-compose command
1. docker-compose up -d : build image to create container
2. docker-compose up -d --build : rebuild on updated compose-file
3. docker-compose config : config testing the proper compose-file

# Swarm command
1. docker swarm init --advertise-addr "IP Server"(e.g 192.168.99.121) : create swarm
2. docker stack deploy --compose-file docker-stack-deploy.yml "project_name"(e.g pos) : build stack to create replicas
3. docker serivce create --name "name" -p port:mapport --replicas="count" "image_name" : create replicas service
4. docker service ls : list replicas service
5. docker service rm "service_name"(e.g pos-api) : remove service
