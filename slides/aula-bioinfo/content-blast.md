<!-- .slide: data-background="img/motivation.jpg" -->

## Introdução ao NCBI BLAST
#### Parte 3

====

Pausa dramática...

## AFINAL, O QUE É NCBI BLAST?

====

> **Basic Local Alignment and Search (BLAST)** é uma abordagem muito poderosa para identificar sequências de banco de dados que compartilham similaridade local com uma sequência de consulta.

====

### O NCBI BLAST é a ferramenta de Bioinformática mais famosa e mais utilizada no Mundo!

====

## SITE DO NCBI BLAST

![avatar][avatar]

[avatar]: ../shared/img/13.png

====

## QUAL O OBJETIVO DO BLAST?

1. Comparar uma sequência com um banco de dados
2. Verificar a similaridade de uma sequência alvo com sequências disponíveis em um banco de dados.

====

## COMO ASSIM?

> **Imagine o seguinte cenário:** "Um paciente está infectado com uma bactéria e essa não é identificada através de PCR ou qualquer outro método disponível. O hospital decide sequenciar um gene característico de bactérias (gene 16S) para descobrir se essa bactéria já foi identificada no banco de dados do NCBI (...)

====

## COMO ASSIM?

> **Continuação:** (...) Após obter esse gene por métodos de bioinformática, os pesquisadores desse hospital podem realizar um BLAST para verificar qual bactéria do banco de dados do NCBI tem maior similaridade com a que infecta o paciente (...)

====

## COMO ASSIM?

> **Continuação:** Como resultado, eles descobrem que essa bactéria tem similiaridade do gene 16S de 99% com cepas de _Helicobacter pylori_, enquanto tem 95% de similaridade com cepas de _Escherichia coli_. Com isso os pesquisadores percebem que estão tratando de uma cepa de _Helicobacter pylori_." 


====

## QUE TIPO DE SEQUÊNCIA?

> O BLAST permite a pesquisa de sequências no formato FASTA de nucleotídeos e aminoácidos.

====

## QUATRO PASSOS PARA A PESQUISA:

1. Escolha a sequência ('query')
2. Selecione o tipo de BLAST
3. Escolha o banco de dados para pesquisar
4. Escolha os parâmetros opcionais

====

## PRINCIPAIS VERSÕES DO BLAST

- BLASTn - Pesquisa de sequência de nucleotídeos contra BD de nucleotídeos
- BLASTp - Pesquisa de sequência de proteínas contra BD de proteínas.

====

## FUNCIONAMENTO DO BLAST

> Informações básicas sobre o funcionamento do BLAST estão disponíveis no PDF do ESTUDO DIRIGIDO: MÉTODOS BIOINFORMÁTICOS II.

====

## OBSERVAÇÃO

> Como o BLAST é uma ferramenta complexa, a ideia dessa aula é que os alunos possam interagir com essa ferramenta e realizar análises básicas para conhecê-la.

====

Pausa dramática...

## PARA QUE APRENDER?

====

> O BLAST é a ferramenta mais utilizada na Bioinformática e com certeza qualquer um que venha trabalhar com biologia molecular, independente do local, necessitará utilizar esse ferramenta pelo menos uma vez.

====

Mão na massa...

## MÉTODOS BIOINFORMÁTICOS II

Estudo Dirigido - Laboratório 2

====

## OBJETIVOS:

- Acessar o site do NCBI BLAST
- Conhecer sua interface
- Conhecer o Blastn e Blastp
- Realizar uma busca de similaridade
- Conhecer os principais resultados e como interpretá-los

====

## OBSERVAÇÃO:

> É interessante que o aluno tenha o arquivo PDF do ESTUDO DIRIGIDO: MÉTODOS BIOINFORMÁTICOS II e o tenha lido.

====

1- Primeiro vamos obter nossa sequência de pesquisa. Acesse: https://www.ncbi.nlm.nih.gov/

![avatar][avatar]

[avatar]: ../shared/img/1.png

====

2- Na barra superior deixe em "ALL DATABASES" ou "Todos os bancos de dados":

![avatar][avatar]

[avatar]: ../shared/img/3.png

====

4- Digite no campo de busca "NP_001318308.1", mesma proteína que pesquisamos antes, e clique em Search:

![avatar][avatar]

[avatar]: ../shared/img/16.png

====

5- Clique na opção PROTEIN na sequência encontrada para o ID NP_001318308:

![avatar][avatar]

[avatar]: ../shared/img/9.png

====

15- Procure do lado direito o menu Related Information e clique na opção Nucleotide:

![avatar][avatar]

[avatar]: ../shared/img/12.png

====

1- Acesse: https://blast.ncbi.nlm.nih.gov/

![avatar][avatar]

[avatar]: ../shared/img/13.png

====

2- Nessa tela podemos ver o site do NCBI BLAST e suas principais versões:

![avatar][avatar]

[avatar]: ../shared/img/13.png
