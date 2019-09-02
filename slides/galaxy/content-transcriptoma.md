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

## Comparação entre Mapeamento por referência e montagem de novo

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma10.png

====

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma5.png

====

## Pipeline padrão do Tuxedo

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma8.png

====

## Conjunto de transcrição baseada em anotação de referência (RABT)

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma9.png

====

## Alinhamento TopHat com um genoma de referência

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma11.png

====

## Conjunto de transcrição baseada em anotação de referência (RABT)

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma12.png

====

## Cufflinks - Estimativa de abundância

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma13.png

====



![avatar][avatar]

[avatar]: ../shared/img/transcriptoma14.png

====

## Mesclando montagens do Cufflinks

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma15.png

====

## Métricas

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma16.png

====

## Usando outros softwares em conjunto

![avatar][avatar]

[avatar]: ../shared/img/transcriptoma17.png

====

## Novas extensões ...


![avatar][avatar]

[avatar]: ../shared/img/transcriptoma18.png

====
