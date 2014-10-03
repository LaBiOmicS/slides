![vagrant-logo](img/vagrant-logo.png) <!-- .element: class="no-border" -->

#### Descomplicando o uso de VMs para desenvolvimento de software

<small>Versão 0.1</small>

Note:
Anotação para apresentador vai aqui.

----
<!-- .slide: data-background="img/coder-trans.png" -->

## Um caso comum

1. Sou desenvolvedor Java, PHP, Python, Go, Ruby, WTF...
2. Uso bases MySQL, Oracle, PostgreSQL, M$ SQL Server...
3. Programo para Windows, Linux, Mac OSX, BSD...

====
<!-- .slide: data-background="img/computer-setups-trans.png" -->

Preciso de várias máquinas?

<!-- .element: class="fragment" data-fragment="1" -->
ou <br>
Vários serviços rodando na minha?

====
<!-- .slide: data-background="img/overheat-trans.png" -->

### Problemas:

* Consumo de recursos
  
  _webserver_ + _database_ + compiladores

  <small>sem contar energia elétrica</small>

* Gerenciamento manual
  
  _init_ dos serviços

* Serviços disputando portas
  
  > Quem está usando a porta http 80?

====
<!-- .slide: data-background="img/lightcycle-trans.png" -->

### Solução mais "prática"

Máquinas virtuais (VMs)

<big>Mas será prática mesmo?</big> <!-- .element: class="fragment" data-fragment="1" -->

----

# Vagrant

Note: Vamos falar sobre o Vagrant

====
<!-- .slide: data-background="img/homeless-trans.png" -->

### O que é Vagrant?

<small>
_Vagrant:_ vagante, errante, vagabundo, mendigo <br>
Fonte: _google_
</small>

<!-- .element: class="fragment" data-fragment="1" -->
Não este tipo de _"vagrant"_

Note: "Vagrant" pode ser traduzido como "vagabundo"
ou "mendigo"

====
<!-- .slide: data-background="img/vagrant-bg-trans.png" -->

### O que é Vagrant?

http://vagrantup.com

http://vagrantcloud.com

http://github.com/mitchellh/vagrant

Note: Agora sim. O que é Vagrant?

====
<!-- .slide: data-background="img/vagrant-bg-trans.png" -->

### O que é Vagrant?

> Vagrant é uma ferramenta para construir e 
> distribuir ambientes de desenvolvimento.


Note: Descrição no github

====
<!-- .slide: data-background="img/vagrant-bg-trans.png" -->

Ambientes de desenvolvimento gerenciados pelo Vagrant podem
rodar em plataformas virtuais locais como **VirtualBox**
ou **VMware**, na _nuvem_ via **AWS** ou **OpenStack**,
ou ainda em _recipientes_ como **Docker** ou **LXC**.

Note: Ainda do github

====
<!-- .slide: data-background="img/vagrant-bg-trans.png" -->

Vagrant fornece o _framework_ e configurações para criar e
gerenciar ambientes de desenvolvimento completos e portáveis.

Disponível para Windows, Mac OSX e GNU/Linux.

Note: Mais ainda do github

----

### Começando...

ou inicializando um ambiente Vagrant "do zero"

```
vagrant init hashicorp/precise32
vagrant up
```

====
<!-- .slide: data-background="img/free-time-trans.png" -->

### O que ganho com isso?

====

<div><canvas id="vagrant_anim_target" class="vagrant_anim_target" width="718" height="354">
<div id="vagrant_anim_fallback" class="vagrant_anim_target" style="width: 718px; height: 354px; position: relative;"></div>
<p></canvas></div>

<small><a href="javascript:set_animation('img/vagrant_packed.png', vagrant_timeline, 'vagrant_anim_target', 'vagrant_anim_fallback');">play</a></small>

Note: Gravação com exemplo de uso do vagrant

----
<!-- .slide: data-background="img/armymen-trans.png" -->

### Comandos <small>usados com mais frequência</small>

* `vagrant init [box name] [box url]`

    <small>Inicializa o diretorio atual para ser um ambiente Vagrant, criando um `Vagrantfile` se ainda não existir.</small>

* `vagrant up`

    <small>Cria e configura uma VM de acordo com o `Vagrantfile`</small>

* `vagrant halt`

    <small>Desliga a VM que o Vagrant controle no diretório atual</small>

* `vagrant reload`
    
    <small>Equivalente a executar `vagrant halt` seguido de `vagrant up`. Usado para recarregar mudanças no `Vagrantfile`</small>

====
<!-- .slide: data-background="img/armymen-trans.png" -->

* `vagrant suspend`

    <small>Suspende a VM, ao invés de desligá-la completamente</small>

* `vagrant resume`
    
    <small>Retoma a execução de uma VM previamente parada com `vagrant suspend`</small>

* `vagrant ssh`

    <small>Acessa o _shell_ da VM atual via _ssh_ (VM Linux ou BSD, principalmente)</small>

* `vagrant rdp`

    <small>Inicia um cliente _RDP_ para acesso ao _desktop_ da VM (VM Windows, principalmente)</small>

====
<!-- .slide: data-background="img/armymen-trans.png" -->

#### Todos os comandos

    Below is a listing of all available Vagrant commands and a brief description of what they do.
    
    box             manages boxes: installation, removal, etc.
    connect         connect to a remotely shared Vagrant environment
    destroy         stops and deletes all traces of the vagrant machine
    docker-logs     outputs the logs from the Docker container
    docker-run      run a one-off command in the context of a container
    global-status   outputs status Vagrant environments for this user
    halt            stops the vagrant machine
    help            shows the help for a subcommand
    init            initializes a new Vagrant environment by creating a Vagrantfile
    list-commands   outputs all available Vagrant subcommands, even non-primary ones
    login           log in to Vagrant Cloud
    package         packages a running vagrant environment into a box
    plugin          manages plugins: install, uninstall, update, etc.
    provision       provisions the vagrant machine
    rdp             connects to machine via RDP
    reload          restarts vagrant machine, loads new Vagrantfile configuration
    resume          resume a suspended vagrant machine
    rsync           syncs rsync synced folders to remote machine
    rsync-auto      syncs rsync synced folders automatically when files change
    share           share your Vagrant environment with anyone in the world
    ssh             connects to machine via SSH
    ssh-config      outputs OpenSSH valid configuration to connect to the machine
    status          outputs status of the vagrant machine
    suspend         suspends the machine
    up              starts and provisions the vagrant environment
    version         prints current and latest Vagrant version

----

<big>`Vagrantfile`</big>

====

### Redirecionamento de portas

====

### Sincronizando diretórios

----
<!-- .slide: data-background="img/goku-trans.png" -->

### Vagrant cloud

http://vagrantcloud.com/

----

### Créditos da apresentação

por [Paulo Diovani Gonçalves](mailto:paulo@diovani.com)

<small>[paulo@diovani.com]((mailto:paulo@diovani.com)</small>

_powered by: [reveal.js](http://lab.hakim.se/reveal-js/)_

<small>[http://lab.hakim.se/reveal-js/](http://lab.hakim.se/reveal-js/)</small>

====
<!-- .slide: class="image-credits" -->

#### Créditos das imagens

* vagrant-logo, vagrant-bg http://vagrantup.com
* coder http://blog.locaweb.com.br
* computer-setups http://mosslounge.com
* overheat http://sevacall.com
* lightcycle http://simplywallpaper.net
* mendigo http://hubimg.com
* free-time http://kristinareken.wordpress.com
* animação criada com https://github.com/sublimehq/anim_encoder
* army men http://danbecker.info
* goku http://mdnsolutions.com