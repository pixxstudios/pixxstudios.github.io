---
title: "Docker - useful commands"
date: "2020-10-04"
categories: 
  - "docker"
tags: 
  - "docker"
  - "docker commands"
---

#### **To run a container using an image**

```javascript
docker run <image name>
```

example: docker run hello-world

* * *

#### **Override the default command for a container**

```javascript
docker run <image name> command
```

example: docker run busybox ls

![docker run busybox ls](images/Screen-Shot-2020-10-03-at-10.59.26-PM.png)

* * *

#### **Show running containers**

```javascript
docker ps
```

![docker ps](images/Screen-Shot-2020-10-03-at-11.05.19-PM-1024x66.png)

```javascript
docker ps --all
```

This will list all the containers that were ever created on your machine.

![docker ps -all](images/Screen-Shot-2020-10-03-at-11.09.15-PM-1024x124.png)

* * *

#### **Restart stopped containers**

```javascript
docker start <container id>
```

example:

run docker ps --all to get the list of containers

![run docker ps --all](images/Screen-Shot-2020-10-03-at-11.09.15-PM-1024x124.png)

copy the container id of the stopped container (It will have a status as exited) that you want to restart.

![run docker ps --all](images/Screen-Shot-2020-10-03-at-11.21.45-PM.png)

It will start the container and use the optional **\-a** flag to log the default output of that container (In the above case it's ping pixxstudios.com)

* * *

#### **Remove stopped containers**

```javascript
docker system prune
```

![docker system prune](images/Screen-Shot-2020-10-03-at-11.26.53-PM-1024x398.png)

* * *

#### **Get logs from a container**

```javascript
docker logs <container id>
```

* * *

#### **Stopping a container**

```javascript
docker stop <container id>
```

Give container 10 seconds to wrap up whatever its doing and then stop the container.

```javascript
docker kill <container id>
```

Just stop whatever process is running in the container immediately and then stop the container itself.
