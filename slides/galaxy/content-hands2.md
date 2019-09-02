## MÃO-NA-MASSA:

### Obtendo dados brutos

====

## Objetivo:

1. Realizar upload de dados brutos para o Galaxy. 
2. Obter dados através de diferentes fontes. 
3. Renomear e editar detalhes sobre os dados.

====

## Obtendo dados pelo NCBI SRA

====

## ETAPA 1:

- Abra uma nova aba no seu navegador (Chrome ou Firefox)
- Acesse o endereço do banco de dados do NCBI:

<small> https://www.ncbi.nlm.nih.gov </small>

====

## ETAPA 2:

- No site do NCBI:
  - No campo **All Databases**, altere para a opção **SRA**
  - Digite o ID **SRR074286** e clique em Search
  
====

## ETAPA 3:

- Volte para um dos servidores do Galaxy:
  - No campo de busca de ferramentas:
    - Digite **SRA**
    - Selecione a opção **Download and Extract Reads in FASTA/Q format from NCBI SRA**
    - Na opção **Accession**, digite o ID **SRR074286**
    - Na opção **Select output format** selecione **Uncompressed fastq**
    - Clique em **Execute**

====

## Obtendo dados pelo EBI ENA:

====

## ETAPA 1:

- Abra uma nova aba no seu navegador (Chrome ou Firefox)
- Acesse o endereço do banco de dados do EBI ENA:

<small> https://www.ebi.ac.uk/ena </small>

====

## ETAPA 2:

- No site do EBI ENA:
  - No campo de busca do lado esquerdo, digite o ID **SRR074286**
  - Clique em Search e depois na opção **Run (1 results found) - SRR074286**
  - As opções **FASTQ files (Galaxy)** e **NCBI SRA file (Galaxy)** encaminham a biblioteca direto para o Galaxy Oficial
  - As opções **FASTQ files (FTP)** e **NCBI SRA file (FTP)** permitem o download direto das bibliotecas
    - Clique com o botão direito do mouse em **File 1** da opção **FASTQ files (FTP)** e depois em **Copy link address**
    - Cole o link em um bloco de notas
  
====

## ETAPA 3:

- Volte para um dos servidores do Galaxy:
  - Selecione a opção **Download from web or upload from disk** no menu de ferramentas:
    - Selecione o botão **Paste/Fetch Data**
    - Cole na caixa de texto o link que você copiou anteriormente
    - Em **Name**, forneça um nome representativo para a biblioteca (Ex: SRR074286 - Arabidopsis thaliana - hrcC-2)
    - Clique em Start
    
====

## Parabéns:

Agora você fez o upload das primeiras bibliotecas que serão utilizadas ao longo dos exercícios desse curso. Hora de realizar novos uploads.

====

## DESAFIO:

Faça o upload das bibliotecas de Staphylococcus aureus abaixo para a sua instância do Galaxy:

====

<small> - https://zenodo.org/record/582600/files/mutant_R1.fastq?download=1 </small>
<small>   - Nomear como Staphylococcus_aureus_mutant_dnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/582600/files/mutant_R2.fastq?download=1 </small>
<small>   - Nomear como Staphylococcus_aureus_mutant_dnaseq_R2.fastq </small>

<small> - https://zenodo.org/record/582600/files/wildtype.fna?download=1 </small>
<small>   - Nomear como Staphylococcus_aureus_REFSeq.fasta </small>

<small> - https://zenodo.org/record/582600/files/wildtype.gbk?download=1 </small>
<small>   - Nomear como Staphylococcus_aureus_REFSeq.gbk </small>

<small> - https://zenodo.org/record/582600/files/wildtype.gff?download=1 </small>
<small>   - Nomear como Staphylococcus_aureus_REFSeq.gff </small>

====

## DESAFIO:

- Crie um novo History
- Nomeie como Mouse
- Faça o download das bibliotecas a seguir

====

<small> - https://zenodo.org/record/254485/files/G1E_R1_forward_downsampled_SRR549355.fastqsanger.gz?download=1 </small>
<small>   - Nomear como Mouse_C1_rnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/254485/files/G1E_R1_reverse_downsampled_SRR549355.fastqsanger.gz?download=1 </small>
<small>   - Nomear como Mouse_C1_rnaseq_R2.fastq </small>

<small> - https://zenodo.org/record/254485/files/G1E_R2_forward_downsampled_SRR549356.fastqsanger.gz?download=1 </small>
<small>   - Nomear como Mouse_C2_rnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/254485/files/G1E_R2_reverse_downsampled_SRR549356.fastqsanger.gz?download=1 </small>
<small>   - Nomear como Mouse_C2_rnaseq_R2.fastq </small>

====

<small> - https://zenodo.org/record/254485/files/Megakaryocyte_R1_forward_downsampled_SRR549357.fastqsanger.gz?download=1 </small>
<small>   - Nomear como Mouse_M1_rnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/254485/files/Megakaryocyte_R1_reverse_downsampled_SRR549357.fastqsanger.gz?download=1 </small>
<small>   - Nomear como Mouse_M1_rnaseq_R2.fastq </small>

<small> - https://zenodo.org/record/254485/files/Megakaryocyte_R2_forward_downsampled_SRR549358.fastqsanger.gz?download=1 </small>
<small>   - Nomear como Mouse_M2_rnaseq_R1.fastq </small>

<small> - https://zenodo.org/record/254485/files/Megakaryocyte_R2_reverse_downsampled_SRR549358.fastqsanger.gz?download=1 </small>
<small>   - Nomear como Mouse_M2_rnaseq_R2.fastq </small>

====

- Como esse está "zipado", faça o download para a sua máquina e suba manualmente para o Galaxy:

<small> - https://zenodo.org/record/254485/files/RefSeq_gene_annotations_mm10.bed.gtf.gz?download=1 </small>
<small>   - Nomear como Mouse_REFSEQ_mm10.gtf </small>
