### PARADB: UMA BASE DE DADOS MANUALMENTE CURADA QUE CONTÉM ANOTAÇÃO GENÔMICA PARA OS FUNGOS PATOGÊNICOS HUMANOS *PARACOCCIDIOIDES SPP*.

Aciole Barbosa, D.¹; Menegidio, F.B.¹ *et al.*

PLOS Neglected Tropical Diseases, 13(7), e0007576

doi: https://doi.org/10.1371/journal.pntd.0007576

---

**OBJETIVO:** *Desenvolver um banco de dados virtual como uma estratégia para garantir o armazenamento perene e reprodutível de dados genômicos à comunidade científica.*

====

## Histórico

<p class="fragment" align="justify" data-fragment-index="1">- Gênero: Paracoccidioides</p>
<p class="fragment" align="justify" data-fragment-index="2">- Fungos dimórficos patogênicos</p>
<p class="fragment" align="justify" data-fragment-index="3">- Doença tropical negligenciada</p>
<p class="fragment" align="justify" data-fragment-index="4">- Paracoccidioidomicose (PCM) </p>
<p class="fragment" align="justify" data-fragment-index="5">- Responsável por +- 2 milhões de óbitos / ano</p>
<p class="fragment" align="justify" data-fragment-index="6">- Cinco grupos filogenéticos distintos:</p>
<p class="fragment" align="justify" data-fragment-index="7">- Pb01, Pb03, Pb18, Pb300 e PbCNH</p>

====

## Sequenciamento dos isolados:

<img src="img/FIG61.png" style="background:none; border:none; box-shadow:none;">


====

## BD Broad Institute

<img src="img/FIG62.png" width="80%" height="80%" style="background:none; border:none; box-shadow:none;">

### Iniciativa de Genomas Fúngicos

====

Em 2015 o BD foi

# Descontinuado
tornando indisponível as anotações para a comunidade

====

Tentativa de solução:

# Dados Migrados

Sem qualquer curadoria manual e real validação

<small>RefSeq/Genbank, Ensembl, MycoCosm e FungiDB</small>

====

Problema:

# Versões e Dados
# Conflitantes

====

Mais de 80% dos genes:

# Proteínas Hipotéticas

Sem valor funcional para análises biológicas

====

Decisão:

# Reanotação Funcional

dos cinco isolados disponíveis

====

### Dissertação David Aciole

<img src="img/FIG49.png" style="background:none; border:none; box-shadow:none;">


====

Processo de:

# Curadoria Manual

Mais de 3 meses e diversos envolvidos

====

<img src="img/FIG51.png" style="background:none; border:none; box-shadow:none;">


====

<img src="img/FIG32.png" style="background:none; border:none; box-shadow:none;">

====

<!-- .slide: data-background="img/FIG51.png"  data-background-size="1058px 794px"  -->

====

Contribuição:

# Database-as-a-Service

baseado em contêineres Docker

====

<!-- .slide: data-background="img/FIG52.png"  data-background-size="1058px 794px"  -->

====

<!-- .slide: data-background="img/paradb1.gif" data-background-size="65%" data-background-position="right" -->

<div style="width:100%; text-align: center;">
    <div style="width: 30%;">
        <blockquote style="padding-right: 1em">
            <p><b><center>Instalação Local</center></b></p>
            <p><b><center>ParaDB</center></b></p>
        </blockquote>
    </div>
</div>

====

<!-- .slide: data-background="img/paradb2.gif" data-background-size="65%" data-background-position="right" -->

<div style="width:100%; text-align: center;">
    <div style="width: 30%;">
        <blockquote style="padding-right: 1em">
            <p><b><center>Acesso Local</center></b></p>
            <p><b><center>ParaDB</center></b></p>
        </blockquote>
    </div>
</div>

====

# Conclusão

<p class="fragment" align="justify" data-fragment-index="1"> - Primeiro DbaaS focado em Bioinformática. </p>

<p class="fragment" align="justify" data-fragment-index="2"> - Infraestrutura de alta disponibilidade. </p>

<p class="fragment" align="justify" data-fragment-index="3"> - Instalação de espelhos locais. </p>

<p class="fragment" align="justify" data-fragment-index="4"> - Prova de conceito funcional da utilização do Docker para manutenção de banco de dados biológicos.</p>
