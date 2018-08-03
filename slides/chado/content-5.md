<!-- .slide: data-background="img/motivation.jpg" -->

Uma tentativa de solução:

## Chado

> "Um schema de banco de dados relacional, desenvolvido para diferentes plataformas (com maior aceitação e desenvolvimento em ambientes Postgres), que é amplamente utilizado para o gerenciamento do conhecimento biológico para uma grande variedade de organismos."

====
<!-- .slide: data-background="img/motivation.jpg" -->

### O que é exatamente o Chado

- Primeiro, um schema de banco de dados desenvolvido inicialmente para o FlyBase
- Um schema de banco de dados para curadoria profunda
- Um schema de banco de dados integrado
- Um schema de banco de dados que é genérico o suficiente para ser usado por qualquer organismo

====

<!-- .slide: data-background="img/motivation.jpg" -->

<img src="img/logos/data5.png" style="background:none; border:none; box-shadow:none;">
<small><b>Fig 3.</b> FlyBase: banco de dados genômico para <b><i>Drosophila</i></b> (mosca-da-fruta) <br></small>

====

<!-- .slide: data-background="img/motivation.jpg" -->


### Características do Chado

- Esquema de banco de dados relacional que serve de base para muitos projetos de Bioinformática.
- Capaz de representar inúmeras classes gerais de dados frequentemente encontradas na biologia moderna.
- Projetado para lidar com representações complexas do conhecimento biológico.
- Pode ser considerado um dos esquemas relacionais mais sofisticado e disponível atualmente na biologia molecular.

====

### Um schema modular

| Module                     | Description                            |
|----------------------------|----------------------------------------|
| Audit                      | auditorias de banco de dados           |
| Companalysis               | dados de análise computacional         |
| Contact                    | pessoas e grupos                       |
| Controlled Vocabulary (cv) | controle de vocabulários e ontologias  |
| Expression                 | Sumário de expressão de RNA e proteína |
| General                    | identificadores                        |
| Genetic                    | dados genéticos e genótipos            |

====

| Module                     | Description                            |
|----------------------------|----------------------------------------|
| Library                    | descriptions of molecular libraries    |
| Mage                       | microarray data                        |
| Map                        | maps without sequence                  |
| Organism                   | species                                |
| Phenotype                  | phenotypic data                        |
| Phylogeny                  | phylogenetic trees                     |
| Publication (pub)          | publications and references            |
| Sequence                   | sequences and sequence features        |
| Stock                      | specimens and biological collections   |
| WWW                        | generic classes for web interfaces     |
