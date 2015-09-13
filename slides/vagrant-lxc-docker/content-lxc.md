![logo-lxc](img/logos/lxc.png) <!-- .element: class="no-border no-background" -->

## Linux Containers

[linuxcontainers.org](https://linuxcontainers.org)

====

> Algo entre um _chroot_ e uma máquina virtual completa

====

- Utiliza características de contenção do kernel Linux
- Roda no sistema de arquivos
- Compartilha o _Kernel_ com o _Host_

====

![lxc-architecture](img/lxc-architecture.png) <!-- .element: class="no-border no-background bigger" -->

redhat.com <!-- .element: class="credits" -->

Note:
Arquitetura de containers

====

```console
lxc-create -t download -n my-container
lxc-start -n my-container -d
lxc-attach -n my-container
```

Note:
- Cria um container a partir de uma imagem base
    + Exibe lista de distribuições, versões e arquiteturas
- Inicializa o container em _background_
- Obtém acesso ao shell to container

====
<!-- .slide: class="list-descriptions" -->

- LXC

    Interface de _userspace_ para as capacidades de contenção
    do Kernel Linux.

- LXD

    _Container hypervisor_ e uma nova experiência de usuário
    para LXC.

- CG Manager

    Serviço centralizado para gerenciar _cgroups_.

- LXCFS

    Sistema de arquivos sobre _userspace_ desenvolvido para
    resolver algumas limitações do Kernel linux.

Note:
Conjunto de ferramentas do projeto Liunx Containers

====

### Que problemas resolve?

- Isolamento de _userspace_ e estrutura de diretórios
- Uso transparente, semelhante a uma VM, após inicialização

Note:
_Heroku_ é um exemplo de _hosting_ que utiliza LXC
em sua infraestrutura.

====

### Obstáculos

- Apenas GNU/Linux
- Muito verboso, difícil de gerenciar ou automatizar

Note:
_Heroku_ possui seu próprio sistema de _buildpacks_.
