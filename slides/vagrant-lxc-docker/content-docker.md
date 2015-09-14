![logo-docker](img/logos/docker.png) <!-- .element: class="no-border no-background" -->

## Docker

[docker.com](https://www.docker.com)

====

> ### Build, Ship, Run
>
> Uma plataforma aberta de aplicações distribuídas
> para desenvolvedores e _sysadmins_

====

- docker
- docker-compose
- docker-machine
- boot2docker

Note:
Ferramentas da suíte Docker

====

![docker-structure](img/docker-structure.png) <!-- .element: class="no-border no-background bigger" -->

redhat.com <!-- .element: class="credits" -->

====

- Sistema de arquivos em camadas
- Ampla variedade de imagens base
- A imagem nunca é alterada, apenas o container sobre ela
- Containers rodam como serviços

Note:
- Sistema de arquivos em camadas.
- Principais características

====

```console
docker pull hello-world
docker run hello-world
```

Note:
- Obtém a imagem Hello World
- Roda um container com a imagem

====

```console
vim Dockerfile
```

```docker
FROM docker/whalesay:latest


RUN apt-get -y update && apt-get install -y fortunes


CMD /usr/games/fortune -a | cowsay
```

```console
docker build -t docker-whale .
```

Note:
- Cria uma imagem a partir de um `Dockerfile`
- Roda um container a partir da imagem

====

```console
vim docker-compose.yml
```

```yml
web:
  build: .
  ports:
   - "5000:5000"
  volumes:
   - .:/code
  links:
   - redis
redis:
  image: redis
```

```console
docker-compose up -d
```

Note:
- Cria serviços `web` e `redis` com `docker-compose`
- Inicia os serviços
