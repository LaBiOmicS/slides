# Slides, por Paulo Diovani Gonçalves

Este projeto tem por finalidade criar e compartilhar slides criados com [reveal.js](https://travis-ci.org/hakimel/reveal.js).

Você pode clonar o repositório, modificar, e me enviar _pull-requests_ de melhorias nos slides ou nos fontes em geral.

Para ver todas as apresentações criadas neste repositório, acesse <big>[slides.diovani.com](http://slides.diovani.com)</big>.

## _Branch `slides`?_

O _branch_ `slides` contém uma pasta chamada `slides/` contendo os fontes (HTML + Markdown) de todas as apresentações, assim como
um Gruntfile preparado para gerar o conteúdo do branch `gh-pages` onde são guardados os slides gerados (veja abaixo).

O _branch_ `master` é uma cópia fiel do _branch_ de mesmo nome do [reveal.js](https://travis-ci.org/hakimel/reveal.js) e é mantido assim
para obter atualizações futuras ou enviar _pull-requests_ para o original.

## Gerando os slides para hospedar

Faça um clone do repositório e instale todas as dependencias.

	git clone https://github.com/paulodiovani/reveal.js-slides.git
	cd reveal.js-slides
	git checkout slides
	npm install

Você deve também ter o módulo `grunt-cli` instalado globalmente.

	sudo npm install -g grunt-cli

Com o ambiente pronto, você pode servir os slides localmente, na porta 8000, via Grunt.
	
	grunt serve

Ou gerar um site, que pode ser hospedado em qualquer servidor HTTP.

O site completo com todas as apresentações, será exportado para o diretório `gh-pages/`.
	
	grunt export

Você pode ainda gerar o site completo num arquivo `.zip`, se preferir.

	grunt package

## Exportando para o branch gh-pages

Após clonar o repositório, obtenha e inicialize o branch _gh-pages_ como um submódulo.

    git submodule init
    git submodule update

O branch _gh-pages_ é adicionado como um submódulo para permitir que os slides sejam exportados diretamente para ele.

Assim, para atualizar o gh-pages, basta executar os passos a seguir.

    # exportando os slides para a pasta gh-pages
    grunt export

    # publicando os slides no branch gh-pages
    cd gh-pages
    git add .
    git commit
    git push

