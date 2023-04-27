---
title:  "Learn Docker"
description: "Building php environment with docker"
date: 2022-12-11
img: 'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png'
tags: [Docker]
---

I'm having trouble to develop app with different php version, I think it's time to start development using docker, so the application is isolated from my operating system and i don't need to install too many php version in my machine

This is the way I setup a docker container inside my ubuntu machine.

## Setting Up Dockerfile

A Dockerfile is a text file that contains instructions for building a Docker image. Although both our MySQL and Nginx services will be based on default images obtained from the Docker Hub, we still need to build a custom image for the application container. We’ll create a new Dockerfile for that.

```bash
FROM ubuntu:18.04
ENV DEBIAN_FRONTEND=noninteractive

# Install Ruby
RUN apt-get -y update && apt-get install -y ruby-full
RUN ruby -v
RUN gem -v

# Install Utilities
RUN apt-get install -y curl unzip build-essential nano wget mcrypt
RUN apt-get -qq update && apt-get -qq -y install bzip2
RUN apt-get install -y chrpath libssl-dev libxft-dev
RUN apt-get install -y libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev

# Install ppa:ondrej/php PPA
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:ondrej/php
RUN apt-get update

# Install PHP 8
RUN apt-get update && apt-get install -y apache2
RUN apt-get install -y php-pear libapache2-mod-php8.0
RUN apt-get install -y php8.0-common php8.0-cli
RUN apt-get install -y php8.0-bz2 php8.0-zip php8.0-curl php8.0-gd php8.0-mysql php8.0-xml php8.0-dev php8.0-sqlite php8.0-mbstring php8.0-bcmath
RUN php -v
RUN php -m

# PHP Config
# Show PHP errors on development server.
RUN sed -i -e 's/^error_reporting\s*=.*/error_reporting = E_ALL/' /etc/php/8.0/apache2/php.ini
RUN sed -i -e 's/^display_errors\s*=.*/display_errors = On/' /etc/php/8.0/apache2/php.ini
RUN sed -i -e 's/^zlib.output_compression\s*=.*/zlib.output_compression = Off/' /etc/php/8.0/apache2/php.ini
RUN sed -i -e 's/^zpost_max_size\s*=.*/post_max_size = 32M/' /etc/php/8.0/apache2/php.ini
RUN sed -i -e 's/^upload_max_filesize\s*=.*/upload_max_filesize = 32M/' /etc/php/8.0/apache2/php.ini

# Apache Config
# Allow .htaccess with RewriteEngine.
RUN a2enmod rewrite

# Without the following line we get "AH00558: apache2: Could not reliably determine the server's fully qualified domain name".
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Authorise .htaccess files.
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Ports
EXPOSE 80 5000

# Start Apache2 on image start.
CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]

# Purge old PHP
RUN apt-get update
RUN apt-get -y purge '^php7.4.*'
RUN php -v

# Install Git
RUN apt-get install -y git
RUN git --version

# Install SASS & Compass
RUN gem install sass
RUN gem install compass
RUN gem install css_parser

# Install Composer
RUN apt-get install -y php-cli
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN HASH="$(wget -q -O - https://composer.github.io/installer.sig)" && php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

# Install NodeJS & NPM
RUN apt-get purge nodejs
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt -y update
RUN apt install -y nodejs
RUN nodejs -v
RUN npm -v

# Install Task Automation
RUN apt-get install -y yarn
RUN npm install -g grunt-cli
RUN npm install gulp-cli -g
```

### build all image in **Dokerfile**
```bash
docker build -t docker-php-dev .
```

The command **docker build -t docker-php-dev .** is a Docker command used to build a Docker image with a specified name **docker-php-dev** and a specified build context **.**, which refers to the current directory where the command is being executed.

Here's a breakdown of the command:
- **docker**: This is the command-line interface (CLI) for interacting with Docker, a platform that allows developers to automate the deployment, scaling, and management of applications using containerization.

- **build**: This is a Docker sub-command used to build a Docker image from a Dockerfile. A Dockerfile is a script that contains instructions for building a Docker image, which is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software, including the code, runtime, system tools, and libraries.

- **-t docker-php-dev:** This option specifies the name and optionally a tag (in this case, **docker-php-dev**) for the Docker image that will be built. The name and tag are used to identify and reference the Docker image later when running Docker containers based on that image.

- **.** : This is the build context for the Docker image, which specifies the directory where the Dockerfile and any other files required for building the Docker image are located. In this case, **.** refers to the current directory where the command is being executed.

So, the overall command docker **build -t docker-php-dev .** is telling Docker to build a Docker image with the name **docker-php-dev** using the Dockerfile and other files located in the **current directory**. Once the image is built, it can be used to create and run Docker containers, which are isolated and portable environments for running applications.

### Show all docker image that exists in local docker
```
docker image ls
```

### Starting docker service
```bash
docker-compose up -d
```
The command **docker-compose up -d** is used to start Docker services defined in a Docker Compose file in detached mode. Docker Compose is a tool that allows you to define and manage multi-container Docker applications using a ___YAML file___ called a Docker Compose file.

Here's a breakdown of the command:

- **docker-compose**: This is the command-line interface (CLI) for interacting with Docker Compose, a tool for defining and running multi-container Docker applications.

- **up**: This is a Docker Compose sub-command used to start and create Docker containers for the services defined in the Docker Compose file. It also builds the Docker images if they are not already built.

- **-d**: This option stands for ___"detached"___ mode, which means that Docker Compose will start the services in the background and not display logs on the console. This allows you to continue using the terminal for other tasks while the services are running in the background.

So, the overall command docker-compose up -d is telling Docker Compose to start the services defined in the Docker Compose file in ___detached___ mode, allowing the containers to run in the background without displaying logs on the console. Once the services are started, you can use other Docker Compose commands to manage the containers and the overall application, such as docker-compose ps to list the running containers, docker-compose down to stop and remove the containers, or docker-compose logs to view logs of the running containers, among others.

### stop container by name
```bash
docker stop my_container_name
```
