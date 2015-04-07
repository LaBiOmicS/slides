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

Isso **não é** uma _crítica a Java_

<small>
Java&trade; é uma linguagem de programação
desenvolvida pela Sun Microsystems em 1991, a qual foi adquirida
pela Oracle&reg; Corporation em 2009-2010.
</small>

[Oracle Java](https://oracle.com/java) <!-- .element: class="with-url" -->

Note:
...mas é

----

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

====

```javascript
// Read and write files in Node.js
var fis = fs.createReadStream("/tmp/stockIn.txt");
var fos = fs.createWriteStream("/tmp/stockOut.txt");

fis.pipe(fos);
```

----

| Menos produtivo     | Mais produtivo                   |
| --                  | --                               |
| Dependência de IDEs | Boa documentação                 |
| Verbosidade         | Comunidade ativa                 |
|                     | Convenções                       |
|                     | Linguagem natural                |
|                     | Repositórios de módulos/packages |
|                     | Tarefas automatizadas            |
|                     | Simplicidade                     |

----

### Créditos das imagens

<small>Em ordem de apresentação</small>

* thedailywtf.com

====

### Créditos da apresentação

por [Paulo Diovani Gonçalves](mailto:paulo@diovani.com)

<small>[paulo@diovani.com]((mailto:paulo@diovani.com)</small>

_powered by: [reveal.js](http://lab.hakim.se/reveal-js/)_

<small>[http://lab.hakim.se/reveal-js/](http://lab.hakim.se/reveal-js/)</small>
