![java-ee](img/java-ee.png) <!-- .element: class="pull-right" -->

## Por que diabos vou usar Java?

Uma apresentação sobre linguagens de programação modernas,
com foco em escrita rápida e código legível.

<small>Versão 0.1</small>

====
<!-- .slide: class="author" -->

#### Paulo Diovani Gonçalves

* ![avatar](img/avatar-pb.jpg) <!-- .element: class="pull-right" -->
* Desenvolvedor na Codeminer 42
* Acadêmico de graduação em Tecnologia em Sistemas 
    para Internet pela Universidade Feevale
* Usuário GNU/Linux desde 2005
* PHP, Javascript, Java, Node.js, Ruby, Python, Arduino

![codeminer42][code-logo] <!-- .element: class="no-border no-background" -->

<small>
[codeminer42.com][code-site]
<br>[become@codeminer42.com][code-become]
</small>

[code-site]: http://codeminer42.com/
[code-logo]: img/codeminer42.png
[code-become]: mailto:become@codeminer42.com

====

#### Importante!

Isso **não é** uma _crítica a Java_

<small>
Java&trade; é uma linguagem de programação
desenvolvida pela Sun Microsystems em 1991, a qual foi adquirida
pela Oracle&reg; Corporation em 2009-2010.
</small>

Note:
...mas é.

Na verdade estou usando Java como exemplo de linguagem _verbosa_,
poderia ser C++, C#, Delphi, etc.

====

#### Importante!

Cada linguagem de programação é apropriada ou, pelo menos,
indicada, para um ou mais tipos de problemas específicos.

Note:
...mesmo Java.

Os exemplos usados aqui podem facilmente ser refutados
se consideradas condições diversas.

PHP, por exemplo, é amplamente conhecida como uma linguagem
apropriada para desenvolvimento web.
Java, por sua vez, é indispensável para desenvolvimento
Android.

====

#### ~~Não tão~~ importante!

Os argumentos apresentados aqui são baseados em experiências
próprias e opinioes pessoais.

<small>Evitem _flame wars_</small>

Note:
...concordem se quiserem.

----

![java-logo](img/java-logo.jpg)

[Oracle Java](https://oracle.com/java) <!-- .element: class="with-url" -->

Note:
O logo (conhecidíssimo) da linguagem Java é uma xícara de café.

====

![java-island](img/java-island.gif)
![java-coffee](img/java-coffee.jpg)

Note:
O nome e logo da linguagem vem da ilhas de Java, na indonésia,
onde se produz um café forte, escuro e doce.

====

![java-coder](img/java-coder.jpg) <!-- .element: style="transform: scale(1.6)" -->

Note:
...Eu, particularmente, acho que o logo está muito mais
ligado à quantidade de tempo que o programador java vai
precisar ficar acordado. E na quantidade de café que
precisa tomar para isso.

Eis um _típico programador Java_

====

![ruby-coder](img/ruby-coder.jpg)

Note:
Minha intenção, com esta apresentação, é mostrar que existem
linguagens que permitem um trabalho mais produtivo e menos
cansativo.

Eis um _típico programador Ruby_.

----

### Alguns exemplos

====

```java
// Hello World in Java
class HelloWorld {
    static public void main( String args[] ) {
        System.out.println( "Hello World!" );
    }
}
```

<small>Fonte: http://www.roesler-ac.de/wolfram/hello.htm</small>

====

```ruby
# Hello World in Ruby
puts "Hello World!"
```

<small>Fonte: http://www.roesler-ac.de/wolfram/hello.htm</small>

====

```java
// Read and write files in Java
class FileStreamsReadnWrite {
    public static void main(String[] args) {
        try {
            File stockInputFile  = new File("/tmp/stockIn.txt");
            File stockOutputFile = new File("/tmp/StockOut.txt");
            FileInputStream fis  = new FileInputStream(stockInputFile);
            FileOutputStream fos = new FileOutputStream(stockOutputFile);
            int count;

            while ((count = fis.read()) != -1) {
                fos.write(count);
            }
            fis.close();
            fos.close();
        } catch (FileNotFoundException e) {
            System.err.println("FileStreamsReadnWrite: " + e);
        } catch (IOException e) {
            System.err.println("FileStreamsReadnWrite: " + e);
        }
    }
}
```

<small>Fonte: http://javarevisited.blogspot.in/2011/12/read-and-write-text-file-java.html</small>

Note:
Abrir dois arquivos como Streams e gravar as informações
do primeiro no segundo.

====

```javascript
// Read and write files in Node.js
var fis = fs.createReadStream("/tmp/stockIn.txt");
var fos = fs.createWriteStream("/tmp/stockOut.txt");

fis.pipe(fos);
```

<small>Fonte: `this`</small>

Note:
A mesma coisa, mas muito mais fácil. :D

----

| Menos produtivo     | Mais produtivo         |
| --                  | --                     |
| Dependência de IDEs | Boa documentação       |
| Inconsistências     | Comunidade ativa       |
| Regras radicais     | Convenções             |
| Verbosidade         | Linguagem natural      |
|                     | Gerenciador de pacotes |
|                     | Simplicidade           |

<small>Menos trabalho == Mais produtividade</small>

----

### Menor produtividade

====

#### Dependência de IDEs

![vs](img/ide-vs.jpg) <!-- .element: class="pull-right" -->
![eclipse](img/ide-eclipse.jpg) <!-- .element: class="pull-right clear" -->

Problemas:

* Consumo de memória
* Exigência de _GUI_
* Ofuscação de dependências
* Programador não sabe/consegue
    - Desenvolver sem IDE?
    - Compilar via linha de comando?
    - Fazer deploy?

Note:
Screenshots de Visual Studio e Eclipse para ilustrar.

====

#### Inconsistências

Falta de padronização nas bibliotecas tornam a linguagem
difícil de aprender/memorizar.

```php
// PHP naming (does not have) conventions

strlen(); str_pad();

urlencode(); utf8_encode();

gethostname(); php_uname();

trim(); substr(); chr();
```

====

#### Regras radicais

Muitas regras podem deixar a linguagem confusa e
incentivar _bikeshedding_.

* Nomes de arquivos
* Tipagem forte
* Conversões explícitas / _casting_

====

#### Verbosidade

Muitas linhas de código para resolver tarefas simples.

<small>Já falamos sobre Java?</small>

----

### Maior produtividade

----

### Créditos das imagens

<small>Em ordem de apresentação</small>

* thedailywtf.com
* clearsoftinc.com
* martinjeeblog.files.wordpress.com
* images.bwbx.io
* svs.github.io
* msdn.com
* eclipse.org

====

### Créditos da apresentação

por [Paulo Diovani Gonçalves](mailto:paulo@diovani.com)

<small>[paulo@diovani.com]((mailto:paulo@diovani.com)</small>

_powered by: [reveal.js](http://lab.hakim.se/reveal-js/)_

<small>[http://lab.hakim.se/reveal-js/](http://lab.hakim.se/reveal-js/)</small>
