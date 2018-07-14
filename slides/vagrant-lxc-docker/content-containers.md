<!-- .slide: data-background="img/containers.jpg" -->

Tentativas de solucionar o problema:

## Passado...

====

### Virtualização por hardware

====


====
<!-- .slide: data-background="img/yes-baby.jpg" -->

## CONSUMO DE RECURSOS MÍNIMO OU NULO

techebizz.com <!-- .element: class="credits" -->

Note:
Vou repetir

====

![vserver](img/logos/vserver-small.png) <!-- .element: class="no-border no-background" -->
![openvz](img/logos/openvz-small.png) <!-- .element: class="no-border no-background" -->
![lxc](img/logos/lxc-small.png) <!-- .element: class="no-border no-background" -->
![docker](img/logos/docker-small.png) <!-- .element: class="no-border no-background" -->
![rocket](img/logos/rocket-small.png) <!-- .element: class="no-border no-background" -->

- chroot (1982)
- FreeBSD Jails (2000)
- Linux VServer (2001)
- OpenVZ (2005)
- LXC (2008)
- SystemD nspawn (~2010)
- Docker (2013)
- rkt (2014)

Note:
- _chroot_ não é um container, mas apenas um _userspace_
e sistema de arquivos (não muito) isolado.

- SystemD tem release inicial em 2010, mas não encontrei
quando o nspawn foi criado.
