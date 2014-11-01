# Software Design Patterns

<small>Versão 0.1</small>

Note:

====

* Adapter
* Dependency Injection
* Observer

----
<!-- .slide: data-background="img/adapter-trans.png" -->

# Adapter

----
<!-- .slide: data-background="img/injection-trans.png" -->

# Dependency Injection 

====

### Explicando _Dependency Injection_ para uma criança de 5 anos

Quando você pega coisas do refrigerador por conta própria você pode 
causar problemas. Você pode deixar a porta aberta, pode pegar alguma
coisa que mamãe e papai não querem que você pegue. Você pode até mesmo
estar procurandopor algo que não tenhamos ou que tenha acabado.

O que você deveria fazer é dizendo o que quer, "Eu quero alguma coisa para
beber durante o almoço," então iremos garantir que você receba algo quando
sentar para comer.

====

![di](img/cd-dependency-injection.png) <!-- .element: class="no-border" -->

====

#### Observações sobre a implementação

_Dependency Injection_ e _Strategy_ funcionam da mesma maneira, mas
_Strategy_ é usado para dependências mais minimalistas e de vida curta.

<small>Fonte: http://stackoverflow.com/a/4176811/1712589</small>

----

### Implementação em Java

Utilizando _Interface injection_

```java
// Interface para o setter, a ser usada por clients
public interface ServiceSetter {
    public void setService(Service service);
}
```
 
```java
// Classe cliente
public class Client implements ServiceSetter {
    // Referência interna ao serviço, a ser usada pelo client
    private Service service;
 
    // Define o serviço que este cliente usará
    @Override
    public void setService(Service service) {
        this.service = service;
    }
}
```

====

Exemplo de _DI_ em Java

```java
public interface LogServiceSetter {
    public void setLogger(Logger logger);
}
```

```java
public interface Logger {
    public void writeLog(String text);
}
```

```java
public class UserText implements LoggerServiceSetter {
    // referência interna
    private Logger logger;

    // setter
    public void setLogger(Logger logger) {
        this.logger = logger;
    }

    // método utilizando o serviço
    public void askUser() {
        Scanner scan = new Scanner(System.in);
        String userInput = scan.nextLine();
        this.logger.writeLog(userInput);
    }
}
```

====

Exemplo de _DI_ em Java (cont.)

Implementando o serviço

```java
// classe responsável pelos logs
public class FileSystemLogger implements Logger {
    //grava o log num arquivo
    public void writeLog(String text) {
        PrintWriter writer = new PrintWriter("my-log-file.txt", "UTF-8");
        writer.println(text);
        writer.close();    
    }
}
```

```java
// classe com método main exemplificando o uso
public class javaIsBoring {
    // executa o programa
    public static void main(String[]) {
        UserText ut = new UserText();

        // Posso usar qualquer serviço que implemente Logger
        Logger fsLogger = new FileSystemLogger();
        ut.setLogger(fsLogger);

        ut.askUser();
    }
}
```

====

Exemplo de DI em Javascript

Utlizando _Contructor injection_

```javascript
function UserText(Service) {
    this.logger = Service
}

UserText.prototype.askUser = function() {
    var userInput = prompt();
    this.logger.writeLog(userInput);
}
```

Implementando o serviço

```javascript
function AlertLogger() {}

AlertLogger.prototype.writeLog = function(text) {
    alert(text);
}
```

```javascript
var logger = new AlertLogger();
var ut = new UserText(logger);
ut.askUser();
```

----
<!-- .slide: data-background="img/binoculars-trans.png" -->

# Observer

----

## Créditos da apresentação

por 

* [Paulo Diovani Gonçalves](mailto:paulo@diovani.com)
* [Sandro Schmitz](mailto:sandro.s@fevale.br)
* [Fabio Beneditto](mailto:fabiobeneditto@feevale.br)

_powered by: [reveal.js](http://lab.hakim.se/reveal-js/)_

<small>[http://lab.hakim.se/reveal-js/](http://lab.hakim.se/reveal-js/)</small>

====

### Fontes utilizadas

#### Dependency Injection

* http://stackoverflow.com/a/1638961/1712589
* http://en.wikipedia.org/wiki/Dependency_injection
* http://martinfowler.com/articles/injection.html

====

### Créditos das imagens

* adapter, binoculars http://shoptime.com.br
* injection http://wisegeek.com