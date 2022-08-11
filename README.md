# Docker-Swarm
Docker Swarm is a group of either physical or virtual machines that are running the Docker application and that have been configured to join together in a cluster.

# Docker command
1. docker images : list images in docker
2. docker ps -a : list all containers
3. docker ps : list all running containers
4. docker start "container_id" : start container
5. docker stop "container_id" : stop container
6. docker rm "container_id" : remove container
7. docker rmi "image_id or image_name:tag" : remove image
8. docker system prune : remove all unused containers & images

# Docker-compose command
1 docker-compose up -d : build image to create container
2 docker-compose up -d --build : rebuild on updated compose-file

# Swarm command
1. docker swarm init --advertise-addr "IP Server"(e.g 192.168.99.121) : create swarm
2. docker stack deploy --compose-file docker-stack-deploy.yml "project_name"(e.g pos) : build stack to create replicas
3. docker serivce create --name "name" -p port:mapport --replicas="count" "image_name": create service replicas

