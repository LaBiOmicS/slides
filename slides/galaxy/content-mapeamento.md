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
