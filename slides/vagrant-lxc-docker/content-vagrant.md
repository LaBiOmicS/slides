![logo-vagrant](img/logos/vagrant.png) <!-- .element: class="no-border no-background" -->

## Vagrant

[vagrantup.com](https://www.vagrantup.com)

====

> Ambientes de desenvolvimento facilitados

====

- Gerenciado via linha de comando
- _Box_ prontas para diversos fins
- Fácil de configurar
- Roda sobre Virtual Box ou VM Ware

Note:
_Box_ é como são chamadas as imagens do _Vagrant_

====

Configuração feita através de um único arquivo.

`Vagrantfile`

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "hashicorp/precise32"

# ...
```

====

```console
vagrant init hashicorp/hashicorp/precise32
vagrant up
```

Note:
- Inicializa um ambiente com base no Ubuntu hashicorp/precise32
- Sobe o ambiente

  O comando `up` baixa a _box_ e configura todo o necessário

====

### Que problemas resolve?

- Reproduzir ambientes facilmente
- Empacotar e distribuir
- Automatizar a instalação de dependências (provisioning)
  + via _bash_, _Chef_, _Puppet_, etc.

====

### Obstáculos

- Exige instalação de um _Hypervisor_
  + _Virtual Box_, _VMWare_
- Ainda reserva de recursos do _Host_ como qualquer _VM_

Note:
Docker pode rodar sobre um provider de containers,
tal como Docker (oficial), o que inclusive facilita
a reprodução em ambiente não Linux.
