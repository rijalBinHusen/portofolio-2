---
title:  "This is the way I learn Docker"
description: "Learn docker by building php environment"
date: 2022-12-11
img: 'https://www.proficom.de/blog//app/uploads/2018/09/Docker.png'
tags: [Docker]
---

I'm having trouble to develop app with different php version, I think it's time to start development using docker, so the application is isolated from my operating system and i don't need to install too many php version in my machine

This is the way I setup a docker container inside my ubuntu machine

## Setting Up Dockerfile

Although both our MySQL and Nginx services will be based on default images obtained from the Docker Hub, we still need to build a custom image for the application container. We’ll create a new Dockerfile for that.

build all image in **Dokerfile**
```bash
docker build -t docker-php-dev .
```

The command **docker build -t docker-php-dev .** is a Docker command used to build a Docker image with a specified name **docker-php-dev** and a specified build context **.**, which refers to the current directory where the command is being executed.

Here's a breakdown of the command:
- **docker**: This is the command-line interface (CLI) for interacting with Docker, a platform that allows developers to automate the deployment, scaling, and management of applications using containerization.

- **build**: This is a Docker sub-command used to build a Docker image from a Dockerfile. A Dockerfile is a script that contains instructions for building a Docker image, which is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software, including the code, runtime, system tools, and libraries.

- **-t docker-php-dev:** This option specifies the name and optionally a tag (in this case, **docker-php-dev**) for the Docker image that will be built. The name and tag are used to identify and reference the Docker image later when running Docker containers based on that image.

- **.**: This is the build context for the Docker image, which specifies the directory where the Dockerfile and any other files required for building the Docker image are located. In this case, **.** refers to the current directory where the command is being executed.

So, the overall command docker **build -t docker-php-dev .** is telling Docker to build a Docker image with the name **docker-php-dev** using the Dockerfile and other files located in the **current directory**. Once the image is built, it can be used to create and run Docker containers, which are isolated and portable environments for running applications.

Show all docker image that exists in local docker
```
docker image ls
```

Starting docker service
```bash
docker-compose up -d
```
The command **docker-compose up -d** is used to start Docker services defined in a Docker Compose file in detached mode. Docker Compose is a tool that allows you to define and manage multi-container Docker applications using a ___YAML file___ called a Docker Compose file.

Here's a breakdown of the command:

- **docker-compose**: This is the command-line interface (CLI) for interacting with Docker Compose, a tool for defining and running multi-container Docker applications.

- **up**: This is a Docker Compose sub-command used to start and create Docker containers for the services defined in the Docker Compose file. It also builds the Docker images if they are not already built.

- **-d**: This option stands for ___"detached"___ mode, which means that Docker Compose will start the services in the background and not display logs on the console. This allows you to continue using the terminal for other tasks while the services are running in the background.

So, the overall command docker-compose up -d is telling Docker Compose to start the services defined in the Docker Compose file in ___detached___ mode, allowing the containers to run in the background without displaying logs on the console. Once the services are started, you can use other Docker Compose commands to manage the containers and the overall application, such as docker-compose ps to list the running containers, docker-compose down to stop and remove the containers, or docker-compose logs to view logs of the running containers, among others.

stop container by name
```bash
docker stop my_container_name
```
