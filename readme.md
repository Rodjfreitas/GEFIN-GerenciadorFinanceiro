## Gerenciador financeiro - Gefin

O objetivo deste projeto é focar na evolução do desenvolvimento da linguagem javascript. Para isso, decidi criar um gerenciador financeiro, que apresentará as despesas e receitas pessoais, e o saldo total. O usuário será capaz de inserir e excluir itens adicionados à lista.

## Ferramentas

🔨 Javascript
🔨 CSS3
🔨 HTML5

## Considerações Iniciais

Estou muito feliz de concluir este projeto. Totalmente autoral, e principalmente por ter realizado a criação e execução da linha de código javascript de forma autônoma. Desta vez, todo o conhecimento que possuo no momento sobre javascript foram colocados em práticas, sem a necessidade de "copiar e colar" códigos na internet, como no projeto anterior da calculadora.

## Desafios no Código

O primeiro código que desenvolvi para criação da lista ao submeter os lançamentos no input foram conforme observa-se abaixo:

```
      var lancamento = document.createElement('div')
      lancamento.setAttribute('class','lcm')
      lancamento.innerHTML = `<p>${Descricao.value}</p><p>${(Number(Valor.value)).toFixed(2)}</p><p>${tipo}</p>`
      lancamento.style.display = 'flex'
      lancamento.style.justifyContent = 'space-between'
      lancamento.style.fontSize = '15px'
      lancamento.style.margin = '10px 0px'
      var printInput = document.querySelector('#printInput')
      printInput.appendChild(lancamento)
```
Esse era o resultado:

![lista-modelo-inicial](https://user-images.githubusercontent.com/119018022/216669392-3dc882ad-afba-493e-9187-32c3a7b9fd84.jpg)

O grande problema, era que os lançamentos estavam sendo apresentados de forma desordenada na tela. Dependendo da descrição de cada lançamento, o texto não se alinhava com os demais, e visualmente isso era péssimo para o projeto.
Posteriormente, lembrei que poderia utilizar tabelas em html, e decidi alterar a criação de elementos por tabela. isso resolveu totalmente a questão de alinhamentos, uma vez que cada item adicionado, se alinhava exatamente conforme desejado.

```
      var lancamento = document.createElement('tr')
      lancamento.setAttribute('class','lcm')
      var lanDescricao = document.createElement('td')
      var lanValor = document.createElement('td')
      var lanTipo = document.createElement('td')

      lanDescricao.innerText = `${Descricao.value}`
      lanValor.innerText = `${(Number(Valor.value)).toFixed(2)}`
      lanTipo.innerText = `${tipo}`
      
      lancamento.appendChild(lanDescricao)
      lancamento.appendChild(lanValor)
      lancamento.appendChild(lanTipo)

      var printCab = document.querySelector('.printCab')
      printCab.appendChild(lancamento)
```
Esse foi o resultado com alteração para tabela:

![lista-modelo-tabela](https://user-images.githubusercontent.com/119018022/216669847-43de9c41-05eb-4a3e-9310-ab515eda6e7e.jpg)


Outras alterações realizadas durante o desenvolvimento do projeto, foi o desmembramento de funções. Inicialmente, todo o código estava dentro do evento clique do botão input, porém, com o decorrer, fui fazendo testes, e criando funções com os códigos que estavam dentro da função principal, e isso ajudou principalmente a não necessitar repetir o código  para a execução de outro evento.