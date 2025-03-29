# Desafios docker

## 1. Desafio Go

Resultado:

```bash
natasevero/fullcycle      latest         f9a807cb70a9   31 seconds ago   1.43MB
```

- [Link para imagem no DockerHub](https://hub.docker.com/repository/docker/natasevero/fullcycle/general)

Rodando container a partir da imagem:
```
docker run --rm natasevero/fullcycle
```

## 2. Desafio Nginx Node MySQL

Entre na pasta do desafio:
```
cd nginx-node-mysql
```

Rode os containers com docker compose:
```
docker compose up -d
```

Acesse a aplicação em seu browser: [http://localhost:8080](http://localhost:8080)