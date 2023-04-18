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