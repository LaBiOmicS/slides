## Alinhamento de sequências

====

### O que é mapeamento (alinhamento)?

====

### O que é o formato BAM?

====

### Como podemos visualizar sequências alinhadas?

====

![avatar][avatar]

[avatar]: ../shared/img/ngs.png

====

### O que é mapeamento?

- Leituras curtas devem ser combinadas em fragmentos mais longos
- Mapeamento: utiliza um genoma de referência como guia
- De-novo assembly: não utiliza um genoma de referência

====

### Alinhamento de sequência

- Determinar a posição da leitura curta no genoma de referência.

![avatar][avatar]

[avatar]: ../shared/img/mapeamento1.png

====

### Alinhamento de sequência

- A leitura pode se alinhar a vários lugares.

![avatar][avatar]

[avatar]: ../shared/img/map2.png

====

### Problemas

- Como lidar com leituras multi-mapeadas?
  - Depende da ferramenta:
    - Mapear para a melhor região (o que é melhor?)
    - Mapear para todas as regiões
    - Mapear para uma região aleatoriamente
    - Descartar leitura

====

### Problemas

- Como determinamos a melhor região?
  - Atribuir **pontuação de alinhamento** a cada mapeamento   

====

![avatar][avatar]

[avatar]: ../shared/img/match1.png

====

![avatar][avatar]

[avatar]: ../shared/img/match2.png

====

## Parece simples, mas...

====

![avatar][avatar]

[avatar]: ../shared/img/match3.png

====

![avatar][avatar]

[avatar]: ../shared/img/match4.png

====

![avatar][avatar]

[avatar]: ../shared/img/match5.png

====

## Qual ferramenta escolher?

![avatar][avatar]

[avatar]: ../shared/img/match6.png

====

![avatar][avatar]

[avatar]: ../shared/img/sam.png

====

![avatar][avatar]

[avatar]: ../shared/img/sam1.png

====

![avatar][avatar]

[avatar]: ../shared/img/sam3.png

====

![avatar][avatar]

[avatar]: ../shared/img/igv.gif

====

## MÃO-NA-MASSA:

### Alinhamento de Sequências

====

## Objetivo:

1. Realizar um alinhamento de sequências de DNASeq e RNASeq. 
2. Conhecer diferentes ferramentas de alinhamento.

====

## Alinhamento com Bowtie2

====

## ETAPA 1:

- Selecione a opção **View All Histories**
- Troque para o History com os dados de Staphylococcus
- Procure a ferramenta **BOWTIE2** através do menu
- Em **Is this single or paired library**, selecione a Paired-End
- Selecione as bibliotecas forwared (R1) e reverse (R1) do DNASeq.
- Habilite as opções: **Write unaligned reads (in fastq format) to separate file(s)** e **Write aligned reads (in fastq format) to separate file(s)**
- Em **Will you select a reference genome from your history or use a built-in index?**, selecione **Use a genome from the history and build index**.
- No campo **Select reference genome**, selecione o arquivo **Staphylococcus_aureus_REFSeq.fasta**
- Habilite a opção **Save the bowtie2 mapping statistics to the history**
- Mantenha as outras configurações padrões e clique em Execute.

====

## ETAPA 2:

- Repita os passos acima para Arabidopsis e Drosophila.
- Preste atenção nos arquivos Paired-End e Single-End.
- Como ambos são organismos modelo, eles possuem os genomas de referência no servidor.
- No campo **Will you select a reference genome from your history or use a built-in index?**, selecione **Use a built-in genome index**
- Para Arabidopsis selecione o genoma TAIR10
- Para Drosophila realize o alinhamento com os genomas DM3 e DM6

=====

## ETAPA 3:

- Procure a ferramenta **BOWTIE2** através do menu


