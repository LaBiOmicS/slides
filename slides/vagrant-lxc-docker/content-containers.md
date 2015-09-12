<!-- .slide: data-background="img/containers.jpg" -->

Agora vamos falar sobre

## Containers

cphcontainers.dk <!-- .element: class="credits" -->

====

_Operating-system-level Virtualization_

Note:
É uma forma de virtualização, mas a nível de sistema operacional,
ou melhor, a nível de _kernel_.

====

- Permitem várias instâncias isoladas de _user space_
- Sem emulação de _hardware_
- Consumo de recursos mínimo ou nulo

====
<!-- .slide: data-background="img/yes-baby.jpg" -->

## CONSUMO DE RECURSOS MÍNIMO OU NULO

techebizz.com <!-- .element: class="credits" -->

Note:
Vou repetir

====

### Principais Implementações

- chroot (1982)
- FreeBSD Jail (2000)
- Linux VServer (2001)
- LXC (2008)
- SystemD nspawn (~2010)
- Docker (2013)
- Rocket (2014 - CoreOS)

Note:
- _chroot_ não é um container, mas apenas um userspace
e sistema de arquivos (não muito) isolado.

- SystemD tem release inicial em 2010, mas não encontrei
quando o nspawn foi criado.
