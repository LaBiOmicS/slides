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

Agora você tem acesso aos 3 principais servidores públicos do Galaxy que permitirão a realização dos exercícios desse curso, além de análises reais de Bioinformática.
