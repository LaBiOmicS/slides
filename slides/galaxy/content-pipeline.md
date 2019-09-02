Facilitando a vida do IC e do pós-graduando

## Construindo fluxos de trabalho

====

## Editor de fluxo de trabalho

![avatar][avatar]

[avatar]: ../shared/img/workflow.png

====

## Características:

- Extraído de um histórico
- Construído manualmente adicionando e configurando ferramentas usando a tela
- Importado usando um fluxo de trabalho compartilhado existente

====

## Benefícios fluxos de trabalho

- Execute novamente a mesma análise em diferentes conjuntos de dados de entrada
- Alterar parâmetros antes de executar novamente uma análise semelhante
- Fazer uso do agendamento de trabalhos de fluxo de trabalho
  - Os trabalhos são enviados assim que suas entradas estão prontas
  
====
  
## Benefícios fluxos de trabalho
  
- Criar sub-workflows: um fluxo de trabalho dentro de outro fluxo de trabalho
- Compartilhar fluxos de trabalho para publicação e com a comunidade

====

## MÃO-NA-MASSA:

### Construindo Fluxos de Trabalho

====

## DESAFIO

- Construa um fluxo de trabalho para a análise de RNA-Seq utilizando as ferramentas: FASTQC, MultiQC, Fastp (Q20), QualityScoreDistribution, TopHat, Cufflinks, Cuffmerge, Cuffdiff.
- Faça que a entrada de dados para o fluxo de trabalho seja baseada em Coleções.
- Copie esse fluxo de trabalho com outro nome e substitua as ferramentas Tophat pelo HISAT2, Cufflinks pelo StringTie e Cuffmerge pelo StringTie Merge.
- Insira esses fluxos de trabalho no menu de ferramentas.
- Execute ambos os fluxos de trabalho com o Histórico Mouse.
- Peça para que o fluxo de trabalho salve suas saídas em um novo Histórico.
