# Billing

## Description
Billing Backend API

## Setup environment
### Framework

Powered by [Nest](https://github.com/nestjs/nest)

- Node: v16.13.2
- Yarn: v1.22.11
- Docker: v20.10.11
- Docker-compose: v1.29.2
### Run command below:
```bash
# Install node modules
$ yarn install

# Setup environment variables
$ cp .env.example .env 

# Start mongoDB docker
$ docker compose --env-file .env up -d

```

## Running the app
### Development
```bash
# Developemnt
$ yarn start

# Watch mode
$ yarn start:dev
```
### Production
```bash
# Build
$ yarn build

# Remeber to install pm2 by running "npm i -g pm2"
$ pm2 start dist/main.js

# Or if you don't want to use pm2
$ node dist/main.js
```
