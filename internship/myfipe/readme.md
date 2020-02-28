# O que é uma CLI (interface de linha de comando)?

Caso você nem imagine o que é uma interface de linha de comando (CLI), você pode obter mais informações [aqui](https://bit.ly/2T05FJ6).

# Sobre o myfipe CLI

O myfipe CLI é uma interface de linha de comando que serve para buscar informações sobre preços médios de venda de veículos (carros, motos e caminhões) no Brasil.

Ele é desenvolvido com o framework [gluegun](https://bit.ly/2T11dtw).

O myfipe CLI obtém os dados de uma API que pode ser encontrada [aqui](https://bit.ly/2Vs5GXO).

Esta API é um wrapper que utiliza como base a tabela FIPE.

# Como instalar o myfipe CLI

Com NPM ou Yarn instalado em seu computador, abra o console do seu sistema operacional e digite o seguinte comando:

```
npm i myfipe -g
```

ou

```
yarn add global myfipe
```

# Como utilizar

Após a instalação, abra o console e digite o seguinte comando para ver as opções disponíveis do myfipe CLI:

```
myfipe --help
```

Após a execução do comando acima, será exibido uma lista de comandos disponíveis em seu console.

# Customizing your CLI

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

# License

MIT - see LICENSE
