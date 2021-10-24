# Platzily

## Development environment

This part of the documentation assumes that you have [docker-compose](https://docs.docker.com/compose) installed

On the root of the project run the following command

```bash
cat .env.example > .env
```

Fill all the environment variables on the `.env` file

```bash
yarn start:database
```

Wait for the databases to fill and run the following command

```bash
yarn dev
```

Now you should have

- A container running mongo on port 27017
- A container running the api-gw on port 3100
- A hot reloading api-gw process running on port 3000
