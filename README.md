## Description

Service to return Mock Profiles pulled from Firebase

## Installation

```bash
$ npm install
```

## Running the app

Clone or pull down this git repositor

```bash
# development
$ npm build

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Build the Docker image

```bash
$ DOCKER_BUILDKIT=1 docker build -t mock-profiles-from-firebase-using-nestjs
```

Spin up a contianer with the freshly created Docker image -p argument maps 8080 (port on host machine) to 7000 (listening port mapped in the container)
```bash
$ docker run -p 8080:3000 mock-profiles-from-firebase-using-nestjs
```