### PARADB: UMA BASE DE DADOS MANUALMENTE CURADA QUE CONTÉM ANOTAÇÃO GENÔMICA PARA OS FUNGOS PATOGÊNICOS HUMANOS *PARACOCCIDIOIDES SPP*.

Aciole Barbosa, D.¹; Menegidio, F.B.¹ *et al.*

PLOS Neglected Tropical Diseases, 13(7), e0007576

doi: https://doi.org/10.1371/journal.pntd.0007576

> <small> **OBJETIVO:** *Desenvolver um banco de dados virtual (Database-as-a-Service, ou DbaaS) como uma estratégia para garantir o armazenamento perene e reprodutível de dados genômicos à comunidade científica.* </small>

====

<img src="img/FIG32.png" style="background:none; border:none; box-shadow:none;">

====

## Plano de Fundo:

<p class="fragment" align="justify" data-fragment-index="1"> - *Paracoccidioides spp* - fungo patogênico humano. </p>
<p class="fragment" align="justify" data-fragment-index="2"> - Paracoccidioidomicose, doença tropical negligenciada. </p>
<p class="fragment" align="justify" data-fragment-index="3"> - Apresenta 5 isolados sequenciados atualmente. </p>
<p class="fragment" align="justify" data-fragment-index="5"> - Primeiras versões dos genomas de 3 isolados (Pb01, Pb03 e Pb18) foram anotados e disponibilizados no banco de dados JGI do Broad Institute.</p>
<p class="fragment" align="justify" data-fragment-index="6"> - Resequenciamento e Reanotação dos 3 isolados iniciais geraram inconsistências entre os bancos de dados. </p>

====

## Plano de Fundo (continuação):

<p class="fragment" align="justify" data-fragment-index="1"> - Em 2015, o banco de dados do Broad Institute foi descontinuado.</p>
<p class="fragment" align="justify" data-fragment-index="2"> - Sequenciamento dos genomas de 2 novos isolados (PbCNH e Pb300).</p>
<p class="fragment" align="justify" data-fragment-index="3"> - Dados funcionais foram distribuídos entre os bancos de dados genéricos Genbank/RefSeq e Ensembl, além dos bancos de dados especializados em fungos FungiDB e MycoCosm. </p>
<p class="fragment" align="justify" data-fragment-index="4"> - Bancos de Dados exibem versões diferentes dos genomas. </p>

====

## Plano de Fundo (continuação):

<p class="fragment" align="justify" data-fragment-index="1"> - Anotações exibem até ~88% de proteínas descritas como hipotéticas.</p>
<p class="fragment" align="justify" data-fragment-index="2"> - Esses dados inviabilizam a utilização das anotações para estudos funcionais.</p>

====

Típico exemplo de:

# Irreprodutibilidade

====

<img src="img/FIG49.png" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG50.jpg" style="background:none; border:3; box-shadow:none;">

====

<img src="img/FIG51.png" style="background:none; border:3; box-shadow:none;">

====

Contribuição:

# Database-as-a-Service

baseado em contêineres Docker

====

<img src="img/FIG52.jpg" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG53.png" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG54.png" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG55.png" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG56.png" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG57.png" style="background:none; border:none; box-shadow:none;">

====

<img src="img/FIG58.png" style="background:none; border:none; box-shadow:none;">

====

# Conclusão

<p class="fragment" align="justify" data-fragment-index="1"> - Esforço pioneiro e eficaz para garantir a manutenção de dados localizáveis, acessíveis, interoperáveis e reutilizáveis através de um DbaaS. </p>

<p class="fragment" align="justify" data-fragment-index="2"> - Infraestrutura de alta disponibilizada baseada em contêineres Docker. </p>

<p class="fragment" align="justify" data-fragment-index="3"> - Possibilidade de instalação de espelhos locais de forma agnóstica a aplicação online. </p>

<p class="fragment" align="justify" data-fragment-index="4"> - Prova de conceito funcional da utilização do Docker para manutenção de banco de dados biológicos.</p>
