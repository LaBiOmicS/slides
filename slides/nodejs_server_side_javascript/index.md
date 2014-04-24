
Javascript no servidor com 


![Node.js](img/node-logo.svg) <!-- .element: style="background:none; border:0;" -->

<small>Versão 0.1</small>

Note:
Uma palestra iniciante sobre Node.js, 
com uma visão geral e alguns exercícios práticos baseados no nodeschool.io 
e espaço para discussões e perguntas e respostas.

====

#### Conteúdo

* Conhecendo o Node.js
* Criando um webserver em 30 segundos
* Como instalar módulos via npm
* Aplicativos Node.js em linha de comando
* Mão na massa — lições do nodeschool.io

----

#### Paulo Diovani Gonçalves

Programador Web desde 2005 e usuário GNU/Linux a quase o mesmo tempo, domina as linguagens de programação PHP e Javascript e atualmente se dedica ao aprendizado de Node.js. 
<!-- .element: style="font-size:0.6em;" -->

Cursa Sistemas para Internet na Universidade Feevale.
<!-- .element: style="font-size:0.6em;" -->

[paulo@diovani.com](mailto:paulo@diovani.com)

[@paulodiovani](paulo@diovani.com)

[github.com/paulodiovani](http://github.com/paulodiovani)

----

#### Um simples servidor web

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
```

Note:
Criando um webserver em 30 segundos

====

#### Rodando o webserver

```
$ node example.js
Server running at http://127.0.0.1:1337/

$ google-chrome http://127.0.0.1:1337/
```

Note:
Testando um webserver

----

> JavaScript (JS) is a programming language primary used by web browsers to allow dynamic scripting of web pages. It can also be used server side to perform any sort of action.

Fonte: <!-- .element: class="reference" -->
[MDN](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)

Note:
Definição de Javascript no glossáro da MDN (Mozilla Developer Network)

====

> Javascript (JS) é uma linguagem de programação usada primeiramente por _web browsers_ para permitir conteúdo dinâmico em páginas web. Ela pode também ser utilizada no servidor para qualquer tipo de ações.

Fonte: <!-- .element: class="reference" -->
[MDN](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)

Note:
Tradução livre

----

Node.js permite escrever aplicações _server side_ com Javascript, incluindo...

* Aplicações web
* Aplicações em linha de comando
* Interfaces (com widgets, CURSES, HTML, etc.)

Note:
Uma definição livre de Node.js

====

#### Algumas alternativas para Javascript no servidor

* 4D Wakanda
* APE project
* [Aptana Jaxer](https://github.com/aptana/Jaxer)
* Narwhal
* [Node.js](http://nodejs.org)
    * Joyent NodeJS
* [Rhino Javascript engine](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino)
    * Sitepoint Persevere
    * RingoJS

Fonte: <!-- .element: class="reference" -->
[stackoverflow](http://stackoverflow.com/questions/1992367/best-server-side-javascript-servers)

Note:
Node.js não é a primeira, tampouco a única, solução para utilizar Javascript no servidor.

====

#### Com tantas opções, porque Node.js?

* Comunidade crescente
* Fácil de usar
* NPM (_Node Package Manager_)

----

#### Quem usa Node.js?

![](img/industry/dow_jones.png) <!-- .element: class="industry" -->
![](img/industry/ebay.png) <!-- .element: class="industry" -->
![](img/industry/linked_in.png) <!-- .element: class="industry" -->
![](img/industry/pay_pal.png) <!-- .element: class="industry" -->
![](img/industry/microsoft.png) <!-- .element: class="industry" -->
![](img/industry/new_york_times.png) <!-- .element: class="industry" -->
![](img/industry/yahoo.png) <!-- .element: class="industry" -->

Fonte: <!-- .element: class="reference" -->
[nodejs.org](http://nodejs.org/industry/)

Note:
Algumas pequenas empresas que usam node.js

----

>Node.js is a platform built on [Chrome's Javascript runtime](http://code.google.com/p/v8/) for easily building fast, scalable network applications. 
>
>Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Note:
Definição do Node.js no site oficial.

==== 

> Node.js é uma plataforma construída sobre o [_Motor Javascript do Chrome's_](http://code.google.com/p/v8/) para criar aplicações em rede rápidas e escaláveis. 
> 
> Node.js usa um modelo de _I/O_ _non-blocking_, orientado a eventos, que o torna leve e eficiente, perfeito para aplicações em tempo real com grande tráfego de dados que rodam através de dispositivos distribuídos.

Note:
Tradução livre da descrição acima.

----

#### Node.js não é uma linguagem nova

* Escrito em Javascript
* Baixa curva de aprendizagem

====

#### Node.js `!=` Javascript

* _Event driven_
* _Node callbacks_
* _Streams_

----

#### Créditos da apresentação

por [Paulo Diovani Gonçalves](mailto:paulo@diovani.com)

<small>[paulo@diovani.com](mailto:paulo@diovani.com)</small>
<small>[@paulodiovani](paulo@diovani.com)</small>
<small>[github.com/paulodiovani](http://github.com/paulodiovani)</small>

_powered by: [reveal.js](http://lab.hakim.se/reveal-js/)_

<small>[http://lab.hakim.se/reveal-js/](http://lab.hakim.se/reveal-js/)</small>
