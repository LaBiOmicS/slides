### Ao longo do tempo...

> [...] diversos projetos vem tentanto solucionar o problema da Reprodutibilidade Computacional, direcionando energia para diferentes fatores relacionados a software, hardware ou artefatos produzidos durante determinada análise.

====

Tentativas de solucionar o problema:

## PASSADO...

====

## Virtualização por Hardware

- Utilização de virtualizadores para criar ambientes computacionais reprodutíveis
- Permitia compartilhar toda a infraestrutura computacional e os artefatos de análise
- A máquina virtual (VM) poderia ser compartilhada livremente
- Ex: VirtualBox, Vmware, KVM, entre outros.

====

## Projetos em Bioinformática
focados em virtualização por hardware

====

### BioLinux (Descontinuado)

![avatar][avatar] <!-- .element: class="pull-center" -->

[avatar]: ../shared/img/biolinux.jpg

====

### CloudBioLinux (Descontinuado)

![avatar][avatar] <!-- .element: class="pull-center" -->

[avatar]: ../shared/img/cloudbiolinux.jpg

====

## Problemas:

- Alto consumo de recursos (CPU, memória e disco)
- VM grandes, inviabilizando o compartilhamento
- Necessidade de virtualizar o hardware e um SO completo

====

Tentativas de solucionar o problema:

## Presente...

====

### Virtualização por Contêineres

- Não precisa virtualizar o hardware
- Não necessita de uma nova instalação de SO
- Menor consumo de CPU, memória e disco
- Menor tamanho, não impactando compartilhamento
- Ex: Docker, Singularity, rkt, entre outros.

====

### Biocontainer

![avatar][avatar] <!-- .element: class="pull-center" -->

[avatar]: ../shared/img/biocontainer1.png

====

### Singularity

![avatar][avatar] <!-- .element: class="pull-center" -->

[avatar]: ../shared/img/singularity.png

====


Outros projetos importantes focados em

## Reprodutibilidade Computacional...

====
