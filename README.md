# Notice Board
NodeJS backend template

# Prerequisite

Belows should be installed on your system before running this code of server.
* Node.js version 18.14.x or more latest version
* npm version 9.5.x or more latest version
* PostgresQL 14.6 (It can be downloaded as a docker image from general)
* Docker latest version
* Docker-compose latest version (for development)

# Installing

### Package installing
```bash
npm install --save
```

# Engineering Guide

## Preparing Environment
**There are all default values in the env files already**

1. Backend environment
    - open `./env/backend.env` file and update your desired values.
2. DB environment
    - open `./env/backend.env` file and update your loca values.
<br />
<br />

## Preparing local DB
**It's for local developing. The Production DB will be running standalone, please do not connect while you are developing**
- Start DB
    ```bash
    docker-compose -f ./docker/DB-docker-compose.yml --env-file ./deploy/env/postgresql.env up -d
    ```

- Stop and clean up DB
    ```bash
    docker-compose -f ./docker/DB-docker-compose.yml --env-file ./deploy/env/postgresql.env down
    ```
<br />
- DB Migration
    - install migration tool
        ```bash
        npm install knex -g
        ```
    - Run migration
        ```bash
        knex migrate:latest
        ```
<br />

## Test Commands
### Unit test
- Full test
    ```bash
    npm run test
    ```
- Module test
    ```bash
    npm run test:{folder name}
    ```
    - ex> `npm run test:dao`, `npm run test:dao:repositories`, `npm run test:services`
<br />
<br />

## Running Service Commands
### run local environment
```bash
npm run start:local
```
### run dev environment
```bash
npm run start:dev
```
### run production environment
```bash
npm run start:prod
```

# Usefull Utilitis
### `pgcli` postgresql Command line Client
- Install (for Mac)
    ```bash
    brew install pgcli
    ```
- Usage
    - connect 
        ```bash
        pgcli -h {HOST} -p {PORT} -u {user}
        ex> $pgcli -h 127.0.0.1 -p 5432 -u book
        ```
### Postgresql GUI Client
- DBeaver
    - Ref : https://dbeaver.io/
