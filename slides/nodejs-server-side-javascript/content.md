
### Um simples servidor web

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
```

#### Rodando o webserver

```
$ node example.js
Server running at http://127.0.0.1:1337/
```

Note:
Criando um webserver em 30 segundos

====

> Javascript (JS) é uma linguagem de programação usada primeiramente por _web browsers_ para permitir conteúdo dinâmico em páginas web. Ela pode também ser utilizada no servidor para qualquer tipo de ações.

Fonte: <!-- .element: class="reference" -->
[MDN](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)

Note:
Reparem que é escrito em Javascript.
"Mas javascript é para browsers?"

Definição de Javascript no glossáro da MDN (Mozilla Developer Network)

====

Node.js permite escrever aplicações _server side_ com Javascript, incluindo...

* Aplicações web _realtime_
* Webservice APIs
* Aplicações em linha de comando
* Interfaces (com widgets, CURSES, HTML, etc.)

Note:
Uma explicação livre de Node.js

====

### Javascript no servidor

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

* Ótimo em lidar com grande quantidade de conexões concorrentes usando poucos recursos
* Comunidade crescente e participativa
* Fácil de usar -- qualquer programador Javascript pode aprender rapidamente
* NPM (_Node Packaged Modules_) -- repositórios via _github_, _gitbucket_, etc.

====

![not invented here comic](img/node-not-invented-here.png)

Note:
Tirinha que achei interessante, por dar foco à comunidade:

> Ao invés de enviar presentes, favor, contribua com o repositório no github.

====

### Quem usa Node.js?

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

> Node.js é uma plataforma construída sobre o [_Motor Javascript do Chrome_](http://code.google.com/p/v8/) para criar aplicações em rede rápidas e escaláveis.
> 
> Node.js usa um modelo de _I/O_ não bloqueante, orientado a eventos, que o torna leve e eficiente, perfeito para aplicações em tempo real com grande tráfego de dados que rodam através de dispositivos distribuídos.

Note:
Definição do Node.js no site oficial.

====

### Node.js não é uma linguagem nova

* Escrito em Javascript
* Baixa curva de aprendizagem

Note:
Apesar de ser essencialmente Javascript, Node.js possui um ecosistema 
próprio e sua própria forma de programar.

====

### Node.js não é um framework

Note:
Ao contrário, existem diversos frameworks escritos
para Node.js

====

### _Single threaded_

Node.js foi desenvolvido para utilizar uma única _thread_.

Esta única _thread_ recebe e trata de todas as operações da aplicação.

Note:
Ou seja, um único processo.

Pergunta: Então essas operações ficam em fila?

====

#### _Non-blocking I/O_

Cada nova operação não precisa esperar que as anteriores 
sejam completadas. Todas são processadas de forma assíncrona.

====

#### Node event loop

<!-- TODO: adicionar imagem -->

----

### Node _callbacks_

Ao se realizar uma operação de IO, passamos uma função de _callback_
para a mesma.

O _callback_ é executado ao final da operação, enquanto outras operações
são executadas em paralelo.

Note:
Muito semelhante ao uso de AJAX em Javascript.

====

Um _node callback_ recebe um objeto de erro como primeiro argumento e um ou mais
a seguir, contendo o resultado da operação.

```javascript
function myNodeCallback(err, data) {
    if (err) {
        //something went wrong
        return;
    }

    //normal flow
}
```

====

```javascript
var fs = require('fs');

fs.readFile('./example.txt', function(err, content) {
    if (err) console.error("Ocorreu um erro ao ler o arquivo");

    console.log(content.toString());
});
```

Note:
Exemplo de uso de um callback node.js.

----

### _Event driven_

Muitos objetos em Node.js emitem eventos.

Um `net.Server` emite um evento a cada vez que um cliente conecta 
a ele, um `fs.readStream` quando o arquivo é aberto.

Note:
Este comportamento se assemelha muito a cliques e outras ações do usuário em _web browsers_.

====

Para adicionar `listeners` aos eventos de um objeto, utiliza-se o método `emitter.addListener` ou `emitter.on`.

```javascript
emitter.addListener(event, listener)
```

```javascript
emitter.on(event, listener)
```

====

```javascript
var http = require('http');

http.get('http://example.com', function(response) {
    //dados recebidos, loga o conteúdo
    response.on('data', function(data) {
        console.log(data.toString());
    });

    //em caso de erro, loga a mensagem
    response.on('error', function(err) {
        console.error(err.stack || err);
    });
});
```

Note:
Um exemplo de evento.

Cada vez que dados são recebidos via http loga no console.
Em caso de erro, loga a mensagem.

----

### _Streams_

Uma _stream_ é uma interface abstrata implementada por vários objetos em Node.js.

_Streams_ podem ser _readable_, _writable_ ou ambos.

Todas streams são _emissores de eventos_.

====

```javascript
var fs = require("fs");
var filename = 'example.txt';

var stream = fs.createReadStream(filename);
stream.pipe(process.stdout);
```

note:
No exemplo, uma `stream` é criada com o módulo _filesystem_ ao ler o arquivo `example.txt`.

O método `pipe()` lê a _stream_ de origem e envia seu conteúdo diretamente para
uma `stream` que seja `writable` (no caso a saída padrão).

----

![NPM](img/npm.png) <!-- .element: class="no-border no-background" -->

Node Packaged Modules

[npmjs.org](http://npm)

====

**NPM** é para Node o que **PEAR/PECL** é para o PHP, ou 
o que **pip** é para Python, ou ainda o que o **gem** é para
Ruby.

    $ npm install [module name]

----

Módulos são instalados localmente, sob a pasta `node_modules/`, com 

    $ npm install

ou globalmente (como super-usuário) com 

    $ sudo npm install -g

====

Após um módulo ser instalado (seja local ou globalmene) ele pode ser utilizado
num script com uso do `require()`.

```javascript
var _ = require('underscore');

_.each([1, 2, 3], console.log);
```

====

Para listar os módulos instalados utilize

    $ npm list

Ou, paral listar os módulos instalados globalmente

    $ npm list -g

----

As dependências de uma aplicação são definidas em um arquivo chamado `package.json`, o qual pode ser inicializado com `npm init`.

```
$ mkdir node_test
$ cd node_test

$ npm init
```

Você pode editar o arquivo manualmente após a criação.

```
$ vim package.json
```

====

Para instalar dependências e salvá-las na no `package.json`, basta utilizar
a opção `--save`.

    $ npm install --save underscore

Para instalar todas as dependência salvas no `package.json`, basta utilizar.

    $ npm install

====

Verificando os módulos insalados e suas próprias dependências

```
$ npm list

/media/userdata/diovani/Node/node_test
└── underscore@1.6.0
```

----

### Utilitários de linha de comando

Módulos em Node.js podem definir um executável com o atibuto `bin/`
no `package.json`.

Ao instalar globalmente um módulo, seu executável é adicionado ao `PATH`,
assim fica fácil criar aplicativos de linha de comando com Node.

====

#### Instalando jshint via NPM

    $ npm install -g jshint

Verificando a instalação

    $ jshint --version
    jshint v2.5.0

Listando as dependências

```
$ npm list -g

/usr/local/lib
└─┬ jshint@2.5.0
  └─┬ cli@0.4.5
    └─┬ glob@3.2.9
      └── inherits@2.0.1
```

====

A partir de agora você pode utilizar o comando `jshint`, como qualquer usuário,
para validar scripts `*.js`.

    $ jshint myfile.js

----

### Aprendendo Node.js

* [nodejs.org](http://nodejs.org)

    <small>Site oficial</small>

* [nodeschool.io](http://nodeschool.io/)

    <small>Projeto com lições interativas de Node.js</small>

* [nodebr.com](http://nodebr.com/)
    
    <small>Site da comunidade brasileira de Node.js</small>

* [Aplicações web real-time com Node.js](http://www.casadocodigo.com.br/products/livro-nodejs)
    
    <small>Livro escrito por Caio Ribeiro sobre Node.js. <br>
    ISBN: 978-85-66250-14-5</small>

* [Node.js Brasil @ Google Groups](https://groups.google.com/forum/?hl=en#!forum/nodebr)

    <small>Grupo brasileiro de discussão sobre Node.js</small>

* [jsbooks.revolunet.com](http://jsbooks.revolunet.com/)

    <small>Livros gratuítos de Javascript, Node.js, e desenvolvimento web em geral.</small>

----

![node school](img/nodeschool-straight.png) <!-- .element: class="no-border no-background" -->

[nodeschool.io](http://nodeschool.io/)

Note:
Node School é um projeto que ensina Node.js através de lições interativas
em linha de comando.

A proposta é escrever um código para resolver um problema, testá-lo e, por fim,
compará-lo com uma solução proposta.

====

Vamos fazer algumas lições do [Node School](http://nodeschool.io/).

Primeiro, precisamos preparar um ambiente para tal e instalar o globalmente
o módulo `learyounode`, o primeiro conjunto de lições, via NPM.

```
$ # Primeiro instale Node.js e NPM, caso ainda não os tenha
$ sudo apt-get install nodejs nodejs-legacy npm
$
$ # Então crie um diretório para trabalho
$ mkdir nodeschool
$ cd nodeschool
$
$ # E, por fim, instale globalmente o módulo `learnyounode` (pode levar alguns minutos)
$ sudo npm install -g learnyounode
$
$ learnyounode
```

Note:
Para abrir um terminal (rxvt) com uma fonte maior, use:

    rxvt -font "xft:Ubuntu Mono:pixelsize=26"

----

### _Hello World_

Escreva um programa que imprima "HELLO WORLD" no console (stdout).

#### Dicas

<small>
Para escrever um programa Node.js, crie um arquivo com a extensão `.js` e 
comece a escrever Javascript. Você pode executar seu programa rodando o
comando `node`. Ex.:
</small>

    $ node myprogram.js

<small>
Você pode escrever no console da mesma forma que no navegador:
</small>

    console.log("text");

<small>
Quando terminar, você deve executar:
</small>

    $ learnyounode verify myprogram.js

====

```javascript
// Escreve "olá mundo" no console
console.log("HELLO WORLD");
```

Note:
Solução para "Hello World"

----

### _Baby Steps_

Escreve um programa que aceite um ou mais números como argumentos de
linha de comando e imprima a soma desses números no console (stdout).

#### Dicas

<small>
Você pode acessar argumentos de linha de comando através do objeto
global `process`. O objeto `process` contém uma propriedade `argv`
que é um array contendo a linha de comando completa. Ex.: `process.argv`
</small>

<small>
O primeiro elemento de `process.argv` é sempre `node`,  e o segundo é 
sempre o caminho para seu programa, então você deverá começar a partir 
do 3º elemento (índice `2`), somando cada item ao total até o final do
array.
</small>

====

```javascript
var result = 0

for (var i = 2; i < process.argv.length; i++)
result += Number(process.argv[i])

console.log(result)
```

Note:
Soluçao para "Baby steps"

----

### _My first I/O!_

Escreva um programa que use uma única operação de arquivo **síncrona**
para ler um arquivo e imprimir a quantidade de linhas ele contém no
console (stdout), semelhante a executar `cat file | wc -l`.

O caminho completo para o arquivo a ler será fornecido como o primeiro
argumento de linha de comando.

#### Dicas

<small>
    Para executar uma operação de arquivo você irá precisar do módulo `fs`
    da biblioteca central do Node. Para carregar este tipo de módulo, ou
    outro módulo "global", use o seguinte encantamento:
</small>

    var fs = require('fs');

<small>
    Agora você tem o módulo `fs` completo disponível na variável `fs`.
</small>

<small>
    Todas os métodos síncronos (_blocking_) no módulo `fs` terminal com
    '`Sync`'. Para ler um arquivo, você irá precisar usar `fs.readFileSync('/caminho/para/arquivo')`.
    Este método retornará um objeto `Buffer` contendo o conteúdo completo do arquivo.
</small>

====

```javascript
var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
```

Note:
Solução para _My first I/O!_

----

### _My first async I/O!_

Escreva um programa que utilize uma única operação **assíncrona**
para ler um arquivo e imprimir a quantidade de linhas ele contém no
console (stdout), semelhante a executar `cat file | wc -l`.

O caminho completo para o arquivo a ler será fornecido como o primeiro

#### Dicas

<small>
    A solução para este problema é quase a mesma do anterior, exceto que
    você deve fazê-lo **ao modo Node.js**: assíncrono.
</small>

<small>
    Ao invés de `fs.readFileSync()`, você irá usar `fs.readFile()` e ao invés
    de usar um valor de retorno deste método você deverá coletar o valor através
    de uma função de _callback_ fornecida como segundo argumento.
</small>

<small>
    Lembre-se que as chamadas de _callbacks_ idiomáticas do Node.js normalmente
    possuem a seguinte asinatura:
</small>

    function callback (err, data) { /* ... */ }

====

```javascript
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
})
```

Note:
Solução para _My first async I/O!_

----

### Fim

Completamos as quatro primeiras lições do [Node School](http://nodeschool.io).
Não tardem em realizar as demais.

O `learnyounode` é apenas o início, acessem [nodeschool.io](http://nodeschool.io)
para outros conjuntos de lições sobre temas diversos (em inglês).

====

<link href='http://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>

? <!-- .element: style="font-family:'Architects Daughter'; font-size:8em" -->

Perguntas

Comentários
