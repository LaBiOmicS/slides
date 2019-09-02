## Análise de transcriptoma

====

## RNA?

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma1.png

====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma2.png

====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma3.png

====

## Desafios RNA-Seq

- Origem diferente para o RNA da amostra e o genoma de referência
- Presença de RNAs incompletamente processados ​​ou ruído de fundo transcricional
- Viés de seqüenciamento ( por exemplo, preparação da biblioteca de PCR)

====

## Aplicações do RNA-Seq

1. Descoberta de transcrição
  - Quais moléculas de RNA estão na minha amostra?
  - Novas isoformas e splicing alternativo, RNAs não codificantes, variações de nucleotídeo único, genes de fusão
  
2. Quantificação de RNA
  - Qual é a concentração de RNAs?
  - Expressão genética absoluta (dentro da amostra), Expressão diferencial (entre amostras biológicas)

====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma19.png

## Como analisar os dados de RNA-seq para quantificação de RNA?

====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma4.png

====

## Pré-processamento dos Dados

1. Remoção dos adaptadores de seqüenciamento
2. Corte de qualidade para remover bases de baixa qualidade e chamadas incorretamente

====

## Montagem do Transcriptoma

- 3 principais estratégias para montagem:
  - Mapeamento contra um transcriptoma de referência
  - Mapeamento contra um genoma de referência
  - Montagem de novo com posterior anotação
  
====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma6.png

====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma7.png

====

## Mapeamento X Montagem De Novo

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma10.png

====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma5.png

====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma8.png

====

### Pipeline padrão do Tuxedo

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma9.png

====

### Conjunto de transcrição baseada em anotação de referência (RABT)

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma11.png

====

### Alinhamento TopHat com um genoma de referência


![avatar][avatar]

[avatar]: ../shared/img/transcriptoma12.png

====

### Conjunto de transcrição baseada em anotação de referência (RABT)

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma13.png

====

### Cufflinks - Estimativa de abundância

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma14.png

====

### Mesclando montagens do Cufflinks

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma15.png

====

### Usando outros softwares em conjunto

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma17.png

====

### Novas extensões ...


![avatar][avatar]

[avatar]: ../shared/img/transcriptoma18.png

====

### Métricas

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma16.png

====

## MÃO-NA-MASSA:

### Análise de RNA-Seq

====

## Objetivo:

1. Analisar dados de RNA-Seq utilizando o pacote Tuxedo
2. Conhecer as diferentes ferramentas que fazem parte do pacote.

====

## ETAPA 1:

- Selecione a opção **View All Histories**
- Troque para o History com os dados de Drosophila
- Procure a ferramenta **Tophat** através do menu
- Em **Is this single or paired library**, selecione **Paired-End Dataset Collection**
- Selecione a coleção **tratado**.

====

## ETAPA 1 (continuação):

- No campo **Will you select a reference genome from your history or use a built-in index?**, selecione **Use a built-in genome index**.
- No campo **Select reference genome**, selecione o genoma DM6 da Drosophila
- Mantenha as outras configurações padrões e clique em Execute.
- Ao final, verifique a quantidade de sequências mapeadas através do arquivo **align summary**

====

## ETAPA 2:

- Repita os mesmos passos para a coleção **nao-tratado**

====

## DESAFIO:

- Escolha uma das bibliotecas.
- Utilize a ferramenta **QualityScoreDistribution** para gerar estatísticas de qualidade do arquivo BAM para as coleções geradas pelo TopHat
- Compare os resultados

====

## ETAPA 3:

- Procure a ferramenta **Cufflinks** através do menu
- Em **SAM or BAM file of aligned RNA-Seq reads**, selecione **Dataset collection**
- Selecione o arquivo de saída anterior do Tophat para a coleção **tratado**
- No campo **Use Reference Annotation**, selecione **No**
- Mantenha as outras configurações padrões e clique em Execute.
- Observe os arquivos gerados.

====

## ETAPA 4:

- Repita os mesmos passos para a coleção **nao-tratado**

====

## ETAPA 5:

- Procure a ferramenta **Cuffmerge** através do menu
- Em **GTF file(s) produced by Cufflinks**, selecione **Dataset collection**
- Selecione as coleções tratado e nao-tratado
- Em **Use Reference Annotation**, matenha a opção **No**
- Mantenha as outras configurações padrões e clique em Execute.
- Observe o arquivo gerado

====

## ETAPA 6:

- Procure a ferramenta **Cuffdiff** através do menu
- Em **Transcripts**, selecione o arquivo GTF de saída do Cuffmerge
- Habilite a opção **Generate SQLite**

====

## ETAPA 6 (Continuação):

- Em **Input data type**, matenha a opção **SAM/BAM**
- Em **1: Condition - Condition name**, escreva "Nao-Tratado"
- Em **replicates**, selecione **Dataset collection** e a coleção **nao-tratado**
- Em **2: Condition - Condition name**, escreva "Tratado"
- Em **replicates**, selecione **Dataset collection** e a coleção **tratado**
- Mantenha as outras configurações padrões e clique em Execute.
- Observe os arquivos gerados

====

Pausa:

## Vamos conversar sobre o que fizemos até aqui!

====

## DESAFIO:

- Repita todos as etapas de 1 a 6, com algumas mudanças:
  - Na primeira execução: 
      - Troque a opção **Use Reference Annotation** das etapas 3, 4 e 5
      - Selecione **Use reference annotation**
      - Selecione o arquivo Drosophila_melanogaster.BDGP5.78.REFSEQ.gtf
      - Execute todos os passos e compare os resultados
      
====
      
## DESAFIO:

- Repita todos as etapas de 1 a 6, com algumas mudanças:
  - Na segunda execução:
    - Troque a opção **Use Reference Annotation** das etapas 3, 4 e 5
    - Selecione **Use reference annotation as guide**
    - Selecione o arquivo Drosophila_melanogaster.BDGP5.78.REFSEQ.gtf
    - Execute todos os passos e compare os resultados
    
====

## DESAFIO:

- Refaça o **Cuffmerge** utilizando todos os arquivos GTF criados nas etapas anteriores
- Na opção **Use Reference Annotation**, selecione **yes**
- Selecione o arquivo Drosophila_melanogaster.BDGP5.78.REFSEQ.gtf

====

## MÃO-NA-MASSA:

### Utilizando o Cuffcompare
