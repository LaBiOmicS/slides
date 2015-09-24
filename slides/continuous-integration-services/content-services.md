### Softwares e serviços analizados

- Cruise Control
- Jenkins server
- Atlassian Bamboo
- Circle CI
- Codeship
- Drone.IO
- Travis CI

====

### Metodologia

- Criadas suítes de testes em três diferentes linguagens
- Configurados serviços de integração contínua
  para executar as suítes
- Acompanhamento da execução dos testes

====

### Considerações

- Tempo de instalação e configuração
- Conhecimento específico necessário
- Facilidade de identificação de falhas
- Ações tomadas dependendo do resultado
- Particularidades ou extras

----

![cruise-control](img/logos/cruise-control.png) <!-- .element: class="no-border no-background" -->

[cruisecontrol.sourceforge.net](http://cruisecontrol.sourceforge.net/)

====

![dashboard](img/cruise-control-dashboard.jpg)

salesforce.com <!-- .element: class="credits" -->

Note:
Screenshot do Dashboard do CruiseControl

====

- Desenvolvido pela ThoughWorks®
- Open source
- Instalado em servidor próprio
- Configuração via XML

Note:
Criado em 2001.
Licença BSD-Style

====

Exemplo: _ANT Build file_

```xml
<!-- Delegating build script, used by cruisecontrol to build MY_PROJECT_1.
     Note that the basedir is set to the checked out project -->
<project name="build-MY_PROJECT_1"
        default="build"
        basedir="projects/MY_PROJECT_1">
    <target name="build">
        <!-- Get the latest from CVS -->
        <cvs command="up -d -P"/>
        <!-- Call the target that does everything -->
        <ant antfile="build.xml" target="build-everything"/>
    </target>
</project>
```

<small>`build-MY_PROJECT_1.xml`</small>

Note:
Cada projeto deve ter um ANT file como este exemplo.

====

Exemplo: Arquivo de configuração do Cruise Control

```xml
<cruisecontrol>
  <project name="MY_PROJECT_1" buildafterfailed="true">
    <listeners>
      <currentbuildstatuslistener
          file="logs/MY_PROJECT_1/status.txt"/>
    </listeners>

    <modificationset quietperiod="10">
      <cvs localworkingcopy="projects/MY_PROJECT_1"/>
    </modificationset>

    <schedule interval="60">
      <ant buildfile="build-MY_PROJECT_1.xml"
           uselogger="true"/>
    </schedule>

    <publishers>
    </publishers>
  </project>
</cruisecontrol>
```

<small>`config.xml`</small>

----

![jenkins](img/logos/jenkins.png) <!-- .element: class="no-border no-background" -->

[jenkins-ci.org](https://jenkins-ci.org/)

====

![jenkins-screenshot](img/jenkins-screenshot.png)

faseau.top <!-- .element: class="credits" -->

Note:
Screenshot da lista de projetos em teste no
Jenkins.

====

- Open source
- Instalado em servidor próprio
- Configurado via _browser_
- Flexível, muito customizável

Note:
Solução mais popular, atualmente,
para integração contínua.

1083 plugins, incluindo _triggers_,
suporte à linguagens, etc.

====

Exemplo: Start Jenkins server

```console
JENKINS_VERSION=1.609.3
curl -fL http://mirrors.jenkins-ci.org/war-stable/$JENKINS_VERSION/jenkins.war\
  -o jenkins.war
java -jar jenkins.war
```

Note:
- baixa jenkins na versão edfinida
- executa com `java -jar`

----

![bamboo](img/logos/bamboo.png) <!-- .element: class="no-border no-background" -->

[atlassian.com/software/bamboo](https://www.atlassian.com/software/bamboo)

Note:
Pela mesma empresa do BitBucket.

====

![dashboard](img/bamboo-dashboard.png)

atlassian.com <!-- .element: class="credits" -->

====

- Instalado em Amazon EC2 ou servidor próprio
- Configurado via _browser_
- Flexível, muito customizável
