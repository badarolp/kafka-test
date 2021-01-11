# Microservice with Node.js

- A test environment using Kafka and Node;

## Installing dependencies

Inside api path

```sh
yarn
```

Inside service-consumer path

```sh
yarn
```

## Running Kafka

Running Kafka with Docker Compose

```sh
docker-compose up
```

## Running API

Inside api path

```sh
yarn dev
```

## Running Service Consumer
****
Inside service-consumer path 

```sh
yarn dev
```

## Testing

Just post a endpoint "http://localhost:3333/test-kafka" inside some REST client as Insomnia or Postman