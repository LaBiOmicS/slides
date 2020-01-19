> “[...] ocorrências particulares não suscetíveis de reprodução carecem de significado para a ciência.”
>
> <small>-- <cite>Karl Popper, A Lógica da Pesquisa Científica (1934)</cite> </small>

====

Bases Fundamentais da:

# Metodologia 
# Científica

====

Pilares Metodológicos das:

# Pesquisas 
# Experimentais

====

Diretamente associados as:

# Boas Práticas 
# Científicas

====

Problemas de 

# Terminologia

====

Definindo

# Terminologias

para esse trabalho

====

## Reprodutibilidade

> *“[...] a capacidade de um pesquisador duplicar os resultados de um estudo anterior **usando os mesmos dados utilizados pela equipe original**”*
>
> <small>-- <cite>Subcomitê para a Replicabilidade da Ciência da U.S. National Science Foundation (NSF)</cite> </small>

====

## Replicabilidade

> *“[...] a capacidade de um pesquisador de duplicar os resultados de um estudo anterior se **os mesmos procedimentos forem seguidos, mas novos dados forem coletados**”*
>
> <small>-- <cite>Subcomitê para a Replicabilidade da Ciência da U.S. National Science Foundation (NSF)</cite></small>

====

Um problema científico:

# Crise de 
# Reprodutibilidade

====

Em 2016...

> *"Mais de 70% dos pesquisadores tentaram e não conseguiram reproduzir os experimentos de outros cientistas, e mais da metade não conseguiu reproduzir seus próprios experimentos."*
>
> <cite><small>-- Baker, M. (2016). 1,500 Scientists Lift the Lid on Reproducibility. Nature 533 (7604):452–54. https://doi.org/10.1038/533452a</small></cite>

====
  
<img src="img/FIG4.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

<!-- .slide: data-background="img/FIG5.png" data-background-size="1043px 856px" -->

====

<!-- .slide: data-background="img/FIG6.png" data-background-size="936px 880px" -->

====

<!-- .slide: data-background="img/FIG7.png" data-background-size="940px 532px" -->

====

<!-- .slide: data-background="img/FIG8.png" data-background-size="1919px 1079px" -->

====

Crise de

# Reprodutibilidade Computacional

====

Contribuição para a Crise:

## Aumento das análises computacionais

====

> *"Irreprodutibilidade é a configuração padrão para toda a ciência, e a pesquisa irreprodutível é **particularmente comum nas ciências computacionais**."*
>
> <small><cite>Hong *et al.* (2015). Top Tips to Make Your Research Irreproducible. arXiv. https://arxiv.org/abs/1504.00062 </cite></small>

====

Quais seriam as
## Principais causas?

====

<img src="img/FIG35.png" width="70%" height="70%" style="background:none; border:none; box-shadow:none;">

> <small><cite>Adaptado de Kim *et al.* (2018). Experimenting with reproducibility in bioinformatics. GigaScience, V.7, Issue 7, 2018, giy077.</cite></small>

====

## Outras causas na Bioinformática
<br>
<p class="fragment" align="justify" data-fragment-index="1">- Tarefas intensivas e extremamente complexas.</p>
<p class="fragment" align="justify" data-fragment-index="2">- Crescente quantidade de dados biológicos e softwares.</p>
<p class="fragment" align="justify" data-fragment-index="3">- Sistemas de gerenciamento de pipelines complexos.</p>
<p class="fragment" align="justify" data-fragment-index="5">- Conjuntos de dados heterogêneos.</p>

====

Tentativa de solucionar o problema:

## Sistemas Operacionais Científicos

====

<img src="img/FIG9.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG10.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

## Problemas:
<br>
<p class="fragment" align="justify" data-fragment-index="1">- Difícil manutenção do Sistema Operacional (SO).</p>
<p class="fragment" align="justify" data-fragment-index="2">- Conhecimento avançado para o desenvolvimento.</p>
<p class="fragment" align="justify" data-fragment-index="3">- Necessidade de uma comunidade de apoio.</p>
<p class="fragment" align="justify" data-fragment-index="4">- Falta de compatibilidade com diferentes hardwares.</p>

====

Tentativa de solucionar o problema:

## Virtualização por Hardware

<small> ou </small><br>
<small> Virtualização por Hypervisor ou Clássica </small>

====

<img src="img/FIG9.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG10.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG12.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG13.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

## Problemas:
<br>
<p class="fragment" align="justify" data-fragment-index="1">- Elevados custos de infraestrutura computacional.</p>
<p class="fragment" align="justify" data-fragment-index="2">- Baixa escalabilidade.</p>
<p class="fragment" align="justify" data-fragment-index="3">- Dificuldades de implementação.</p>
<p class="fragment" align="justify" data-fragment-index="4">- Elevado consumo de recursos computacionais.</p>

====

Tentativa de solucionar o problema:

## Virtualização por Software

<small> ou </small><br>
<small> Virtualização por Contêineres ou Leve </small>

====

<img src="img/FIG15.png" width="70%" height="70%" style="background:none; border:none; box-shadow:none;">

====

## Docker

> *"Docker é uma plataforma open source usada para construir, executar e distribuir ambientes através da tecnologia de virtualização por software."*

====

<img src="img/FIG16.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

## Limitações das VMs
<br>
<p class="fragment" align="justify" data-fragment-index="1">
- Cada VM requer: <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(a) Alocação de CPU <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) Armazenamento <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(c) RAM <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(d) SO convidado <br>
</p> 
<p class="fragment" align="justify" data-fragment-index="2">
- Quanto mais VMs, mais recursos serão necessários.
</p>
<p class="fragment" align="justify" data-fragment-index="3">
- SO convidado significa recursos desperdiçados.
</p>
<p class="fragment" align="justify" data-fragment-index="4">
- Portabilidade do aplicativo não garantida.
</p>

====

## Benefício dos contêineres Docker
<br>
<p class="fragment" align="justify" data-fragment-index="1">- **Velocidade:** não necessita de boot de um SO convidado.</p>
<p class="fragment" align="justify" data-fragment-index="2">- **Portabilidade:** menos dependências entre as camadas.</p>
<p class="fragment" align="justify" data-fragment-index="3">- **Eficiência:** menos sobrecarga de SO e melhor densidade.</p>

====

<img src="img/FIG36.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

Nova estratégia:

# Computação em Nuvem

<small> ou </small><br>
<small> Cloud Computing </small>

====

## Computação em Nuvem

> “[...] um modelo para permitir acesso conveniente e sob demanda da rede a um conjunto compartilhado de recursos de computação configuráveis (por exemplo, redes, servidores, armazenamento, aplicativos e serviços) que podem ser rapidamente provisionados e liberados com o mínimo esforço de gerenciamento ou interação com o provedor de serviços”
>
> <small>-- <cite>Instituto Nacional de Tecnologias e Padrões dos EUA (NIST)</cite></small>

====

## Principais modelos de serviço

<img src="img/FIG48.png" width="100%" height="100%" style="background:none; border:none; box-shadow:none;">

====

## Outros modelos de serviço

<br>

- **Área de Trabalho como Serviço**
  - ou Desktop-as-a-Service (DaaS)
- **Banco de Dados como Serviço** 
  - ou Database-as-a-Service (DbaaS)
- **TUDO como um Serviço**
  - ou Anything-as-a-Service (XaaS)


====

Uma solução para Reprodutibilidade e Replicabilidade:

# Contêineres Docker
em conjunto com os modelos de Computação em Nuvem
