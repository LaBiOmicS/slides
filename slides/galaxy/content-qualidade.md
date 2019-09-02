## Controle de Qualidade dos dados

====

### Como controlar a qualidade dos dados NGS?

====

### Quais são os parâmetros de qualidade a serem verificados para cada conjunto de dados?

====

### Como melhorar a qualidade de um conjunto de dados de sequências?

====

### Por que controlar a qualidade das sequências?

====

![avatar][avatar]

[avatar]: ../shared/img/experimentos.png

Primeira etapa das análises de bioinformática

====

## Formato FASTA

![avatar][avatar]

[avatar]: ../shared/img/FASTA.png

====

## Formato FASTQ

![avatar][avatar]

[avatar]: ../shared/img/FASTQ.png

====

## MÃO-NA-MASSA:

### Verificando os formatos FASTA e FASTQ

====

## Objetivo:

1. Observar as diferenças entre FASTA e FASTQ. 
2. Identificar os valores de qualidade.

====

## Indice de Qualidade (Phread)

![avatar][avatar]

[avatar]: ../shared/img/phread.png

====

## MÃO-NA-MASSA:

### Verificando a qualidade de bibliotecas FASTQ

====

## Objetivo:

1. Observar a qualidade de bibliotecas FASTQ. 
2. Utilizar o software FASTQC para análise de qualidade.

====

## ETAPA 1

- Procure a ferramenta **FASTQC** através do menu
- Selecione a biblioteca **SRR074286 - Arabidopsis thaliana - hrcC-2** na opção **Short read data from your current history**
- Mantenha todas as opções padrões
- Clique em Execute
- Ao término, clique em **View Data** no arquivo HTML gerado

====

## ETAPA 2

- Selecione a opção **View All Histories**
- Troque para o History com os dados de Staphylococcus
- Faça uma análise de qualidade com o FASTQC para cada um dos FASTQ
- Ao término, clique em **View Data** no arquivo HTML gerado

====

## DESAFIO:

- Crie um novo History
- Nomeie como Drosophila melanogaster
- Faça o download das bibliotecas a seguir
- Faça uma análise de qualidade com o FASTQC para cada um dos FASTQ

====

<small> - https://zenodo.org/record/61771/files/GSM461177_untreat_paired_subset_1.fastq?download=1 </small>
<small>   - Nomear como Drosophila melanogaster_untreat1_rnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/61771/files/GSM461177_untreat_paired_subset_2.fastq?download=1 </small>
<small>   - Nomear como Drosophila melanogaster_untreat1_rnaseq_R2.fastq </small>

<small> - https://zenodo.org/record/61771/files/GSM461178_untreat_paired_subset_1.fastq?download=1 </small>
<small>   - Nomear como Drosophila melanogaster_untreat2_rnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/61771/files/GSM461178_untreat_paired_subset_2.fastq?download=1 </small>
<small>   - Nomear como Drosophila melanogaster_untreat2_rnaseq_R2.fastq </small>

====

<small> - https://zenodo.org/record/61771/files/GSM461180_treat_paired_subset_1.fastq?download=1 </small>
<small>   - Nomear como Drosophila melanogaster_treat1_rnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/61771/files/GSM461180_treat_paired_subset_2.fastq?download=1 </small>
<small>   - Nomear como Drosophila melanogaster_treat1_rnaseq_R2.fastq </small>

<small> - https://zenodo.org/record/61771/files/GSM461181_treat_paired_subset_1.fastq?download=1 </small>
<small>   - Nomear como Drosophila melanogaster_treat2_rnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/61771/files/GSM461181_treat_paired_subset_2.fastq?download=1 </small>
<small>   - Nomear como Drosophila melanogaster_treat2_rnaseq_R2.fastq </small>

====

## MÃO-NA-MASSA:

### Criando Coleções de Bibliotecas

====

## MÃO-NA-MASSA:

### Entrelaçando Bibliotecas Paired-End

====

## Objetivo:

1. Unificar bibliotecas forward e reverse em uma biblioteca entrelaçada

====

## ETAPA 1

- Troque para o History com os dados de Staphylococcus
- Procure a ferramenta **FASTQ interlacer** através do menu
- Selecione as bibiliotecas Left (R1) e Right (R2)
- Execute o processo
- Refaça a análise de FASTQC

====

## ETAPA 2

- Procure a ferramenta **FASTQ de-interlacer** através do menu.
- Faça o processo inverso selecionando a biblioteca entrelaçada gerada no passo anterior.

====

## ETAPA 3

- Repita os passos para as bibliotecas de Drosophila e Arabidopsis.
- Refaça a análise de FASTQC e compare os resultados.

====

## MÃO-NA-MASSA:

### Limpando Bibliotecas FASTQ

====

## Objetivo:

1. Limpar bibliotecas FASTQ baseado nos indices de qualidade Phread

====

## ETAPA 1

- Troque para o History com os dados de Staphylococcus
- Procure a ferramenta **fastp** através do menu
- Selecione a opção Paired e as bibiliotecas Left (R1) e Right (R2)
- Execute o processo com as configurações padrões.
- Visualize o arquivo HTML gerado.

====

## ETAPA 2

- Clique na opção **Run this job again** do arquivo HTML gerado
- Clique na opção **Filter Options** -> **Quality filtering options**
- No campo **Qualified quality phred**, altere o valor padrão (Q15) para 20. 
- Execute o processo.
- Ao término, refaça o procedimento com o valor de **Qualified quality phred**: 30
- Compare os resultados

====

## ETAPA 3

- Repita os passos para as bibliotecas de Drosophila e Arabidopsis.

====
