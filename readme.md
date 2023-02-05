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

## 🧾 Resumo:

⚆ Cabeçalho de página com Logo e Nome do Produto <br>
⚆ Página Inicial de identificação <br>
⚆ Página de ação com cabeçalho de valores de entradas, saídas e saldo total <br>
⚆ Página de ação com formulários de entradas de descrição, valores e tipo de lançamento <br>
⚆ Página de ação com botão de input <br>
⚆ Página de ação com lista de lançamentos

⚆ Todos os demais itens de tela, como orientação financeira, proporções de despesas e receitas por dia, proproção de despesas por real gasto, botão salvar, foram conteúdos que tive a idéia de colocar durante a execução do projeto.
 


## 🎞️ Capturas

### Tela Inicial Desktop e Mobile:

![Tela-Inicial-mobile](https://user-images.githubusercontent.com/119018022/216823139-7d65f602-c16a-48ad-a68e-ccab2fe7cd5f.jpg)
![Tela-Inicial-desktop](https://user-images.githubusercontent.com/119018022/216823140-8aaf303d-3933-4dfb-a4c1-4cd686deb4ae.jpg)

### Tela de lançamentos:

Situação Financeira Saudável:

![lançamentos-green](https://user-images.githubusercontent.com/119018022/216823223-0d26837b-7f1c-4fe8-b749-5fbef1b92ca1.jpg)

Situação Financeira Apertada:

![lançamentos-yellow](https://user-images.githubusercontent.com/119018022/216823222-b8be8f35-c55d-4b07-a93a-25a300683d6a.jpg)

Situação Financeira Preocupante:

![lançamentos-red](https://user-images.githubusercontent.com/119018022/216823224-6b162298-1639-4aae-bd49-e70262f2f35a.jpg)


### Tela de lançamentos mobile:

![lançamentos-mobile](https://user-images.githubusercontent.com/119018022/216823407-32ff8c1f-bab2-4079-b727-c5bdb2c23875.jpg)

### 💾 Arquivo salvo em .pdf

![lançamentos-pdf](https://user-images.githubusercontent.com/119018022/216823651-32770fcd-807f-474b-a5a3-636c3e3bd693.jpg)