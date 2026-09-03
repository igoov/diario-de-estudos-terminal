# Documentação do projeto — Diário de Estudos

## 1. Sobre o projeto

O Diário de Estudos é um sistema desenvolvido para registrar informações sobre os estudos, como matéria, horas estudadas, nível de dificuldade e observações.

O sistema permite adicionar, listar e pesquisar matérias, além de calcular o total de horas estudadas.

## 2. Funcionalidades

- Adicionar matérias
- Listar matérias
- Pesquisar matérias
- Calcular o total de horas
- Sair do programa

## 3. Tecnologias utilizadas

- JavaScript
- Node.js
- readline

## 4. Como executar

É necessário ter o Node.js instalado no computador.

Após clonar ou baixar o projeto, abra o terminal na pasta do projeto:

cd diario-de-estudos-terminal

Para executar o programa, utilize:

node .

Ou, diretamente pelo arquivo principal:

node index.js

Após executar, o menu do Diário de Estudos será apresentado no terminal.

> Observação: o projeto utiliza o módulo `readline`, que já faz parte do Node.js. Portanto, não é necessário instalar uma dependência externa para utilizá-lo.

## 5. Estrutura dos dados

As matérias cadastradas são armazenadas em um array chamado `materias`.

Cada matéria é representada por um objeto, que contém quatro informações:

- `nome` — nome da matéria;
- `horas` — quantidade de horas estudadas;
- `dificuldade` — nível de dificuldade da matéria;
- `observacao` — observação adicionada pelo usuário.

A estrutura utilizada é:

    {
        nome: materia,
        horas: horas_estudadas,
        dificuldade: dificuldade,
        observacao: escrita
    }

Por exemplo, uma matéria cadastrada pode ser armazenada da seguinte forma:

    {
        nome: "JavaScript",
        horas: "3",
        dificuldade: 2,
        observacao: "Estudei estruturas de repetição"
    }

Todas as matérias ficam armazenadas dentro do array `materias`:

const materias = [];

Quando uma nova matéria é cadastrada, o método `push()` adiciona o objeto ao array.

Dessa forma, o programa consegue armazenar várias matérias e posteriormente percorrê-las para listar, pesquisar ou calcular o total de horas estudadas.

## 6. Funcionamento

O Diário de Estudos funciona através de um menu no terminal. O usuário escolhe uma das cinco opções disponíveis.

### 1. Adicionar matérias

A opção Adicionar matérias permite cadastrar uma nova matéria no Diário de Estudos.

O sistema solicita ao usuário:

- Nome da matéria;
- Quantidade de horas estudadas;
- Nível de dificuldade;
- Se deseja adicionar uma observação;
- A observação, caso o usuário escolha adicioná-la.

Depois de receber essas informações, o sistema cria um objeto contendo os dados da matéria e utiliza o método `push()` para adicioná-lo ao array `materias`.

Exemplo de estrutura armazenada:

    {
        nome: "JavaScript",
        horas: "3",
        dificuldade: 2,
        observacao: "Estudei estruturas de repetição"
    }

Os dados ficam armazenados no array enquanto o programa estiver em execução.

### 2. Listar matérias

A opção Listar matérias mostra todas as matérias que foram cadastradas durante a execução do programa.

Para isso, o sistema percorre o array `materias` utilizando um `for...of` e apresenta as informações de cada matéria separadamente.

São exibidos:

- Nome da matéria;
- Horas estudadas;
- Dificuldade;
- Observação.

Caso existam várias matérias cadastradas, todas serão exibidas uma após a outra.

### 3. Pesquisar matérias

A opção Pesquisar matérias permite encontrar uma matéria específica pelo seu nome.

O sistema solicita ao usuário o nome da matéria que deseja pesquisar e percorre o array `materias` procurando uma correspondência.

Quando a matéria é encontrada, suas informações são exibidas no terminal.

O sistema também utiliza uma variável de controle para verificar se alguma matéria foi encontrada. Caso nenhuma matéria corresponda à pesquisa, é exibida a mensagem:

Materia nao encontrada.

Essa lógica evita que a mensagem de matéria não encontrada seja exibida incorretamente quando existem outras matérias cadastradas.

### 4. Calcular o total de horas

A opção Calcular o total de horas soma todas as horas estudadas registradas no sistema.

Para realizar o cálculo, o sistema percorre todas as matérias utilizando um `for...of` e adiciona o valor de `horas` a uma variável chamada `totalHoras`.

Como os valores recebidos pelo `readline` são strings, é utilizado `Number()` para transformar as horas em números antes de realizar a soma.

Exemplo:

JavaScript: 3 horas
Matemática: 2 horas
Banco de Dados: 4 horas

Total de horas estudadas: 9

### 5. Sair

A opção Sair encerra a execução do programa.

Quando o usuário escolhe a opção `5`, o método `rl.close()` é utilizado para fechar a interface do `readline`.

    case "5":
        rl.close();
        break;

O `break` encerra a execução do `case` dentro do `switch`, após a chamada do `rl.close()`.

Dessa forma, o usuário consegue finalizar o programa através do próprio menu.

## 7. Observação sobre os dados

Atualmente, os dados das matérias são armazenados apenas na memória do programa, dentro do array `materias`.

Isso significa que, ao encerrar o programa, os dados cadastrados são perdidos.

Uma possível evolução do projeto é implementar um sistema de persistência de dados, utilizando, por exemplo, um arquivo JSON ou um banco de dados.

## 8. Próximos passos

Algumas funcionalidades que podem ser implementadas futuramente:

- Persistência dos dados em arquivo JSON;
- Utilização de banco de dados;
- Edição de matérias cadastradas;
- Exclusão de matérias;
- Melhor validação das entradas do usuário;
- Melhor organização do código em diferentes módulos;
- Sistema de acompanhamento do progresso dos estudos.
