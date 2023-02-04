function tempAction(){
  data = new Date()
  var hour = data.getHours()
  var header = document.querySelector('header')
  var titulo = document.querySelector('header h1')
  var imagem = document.querySelector('.gefin')
  if(hour < 18){
    header.style.backgroundColor = 'var(--global-dia)'
    imagem.src = 'imagens/GefinLogo.png'
  }else{
    header.style.backgroundColor = 'var(--global-noite)'
    imagem.src = 'imagens/GefinLogoNoite.png'
    titulo.style.color = 'white'
  }
}

function enterApp (){
  data = new Date()
  var ano = data.getFullYear()
  var inputAno = document.querySelector('#txtYear')
  var name = document.querySelector('#txtName')
  var header = document.querySelector('header')

  if(name.value == "" || name.value.length < 5){
    window.alert('Digite seu nome')
    name.focus()
  } else
    if(inputAno.value.length == 0 || inputAno.value >= ano){
      window.alert('[ERRO] A data não pode ser maior que a atual ou igual à zero')
      inputAno.focus()
    }else{
      alert(`Olá ${name.value}. Bem-vindo ao Gerenciador Financeiro`)
      var identificacao = document.createElement('p')
      identificacao.setAttribute('id','ident')
      identificacao.innerText = `${name.value} - ${ano - Number(inputAno.value)} anos`
      identificacao.style.color = 'white'
      identificacao.style.backgroundColor = 'var(--global-colorLogo)'
      identificacao.style.padding = '0px 20px'
      header.appendChild(identificacao)

      var pagePrincipal = document.querySelector('#pageMain')
      pagePrincipal.style.transition = 'width 3s ease-in-out'
      pagePrincipal.style.display = 'none'
      var pageAction = document.querySelector('#pageAction')
      pageAction.style.display = 'flex'
    }
}

function enterInformation(){
  var Descricao = document.querySelector('#txtDesc')
  var Valor = document.querySelector('#txtValor')

  if(Descricao.value == "" || Valor.value == 0){
    alert('Por favor, verifique os dados informados.')
  }else{
    var entradas = document.querySelector('#entradas')
    var saidas = document.querySelector('#saidas')
    var total = document.querySelector('#total')
    
    

    var txtTipo = document.getElementsByName('txtTipo')    
    var tipo;

      if(txtTipo[0].checked){
        tipo = "Entrada"
        entradas.innerText = `${(Number(entradas.value) + Number(Valor.value)).toFixed(2)}`



      } else if(txtTipo[1].checked){
        tipo = "Saída"
        saidas.innerText = `${(Number(saidas.value) + Number(Valor.value)).toFixed(2)}`
        
      }

      total.innerText = `${(Number(entradas.value) - Number(saidas.value)).toFixed(2)}` 



      
      var lancamento = document.createElement('tr')
      lancamento.setAttribute('class',`lcm ${tipo}`)
      var lanDescricao = document.createElement('td')
      var lanValor = document.createElement('td')
      var lanTipo = document.createElement('td')  
      var lanLixo = document.createElement('td')    

      lanDescricao.innerText = `${Descricao.value}`
      lanValor.innerText = `${(Number(Valor.value)).toFixed(2)}`
      lanTipo.innerText = `${tipo}`
      lanLixo.innerHTML = `<img src="imagens/favicon-16x16.png" class="apagar" value="X" onclick="removeLinha(this)">`

      switch (tipo){
        case "Entrada":
          lanTipo.style.color = 'var(--global-green)'
          break

        case "Saída":
          lanTipo.style.color = 'var(--global-red)'
          break
      }
      
      lancamento.appendChild(lanDescricao)
      lancamento.appendChild(lanValor)
      lancamento.appendChild(lanTipo)
      lancamento.appendChild(lanLixo)
      

      var printCab = document.querySelector('.printCab')
      printCab.appendChild(lancamento) 
      
    
    Valor.value = ""
    Descricao.value =""
    Descricao.focus()


    enterOrientacao()
  }


  

}


function removeLinha(element){
  var el = element.closest('tr');
  var index = Array.prototype.indexOf.call(el.parentNode.children, el);
  console.log(index); // mostrar posição da linha como exemplo
  //removo a linha

    var printCab = document.querySelector('.printCab')
    valor = printCab.children.item(index).children.item(1).innerText
    tipo = printCab.children.item(index).children.item(2).innerText
    var entradas = document.querySelector('#entradas')
    var saidas = document.querySelector('#saidas')
    var total = document.querySelector('#total')

    switch (tipo){
      case "Entrada":
        entradas.innerText = `${(Number(entradas.value) - Number(valor)).toFixed(2)}`
        total.innerText = `${(Number(entradas.value) - Number(saidas.value)).toFixed(2)}`
        break

      case "Saída":
        saidas.innerText = `${(Number(saidas.value) - Number(valor)).toFixed(2)}`
        total.innerText = `${(Number(entradas.value) - Number(saidas.value)).toFixed(2)}`
        break
    }

    enterOrientacao()

  el.outerHTML = '';

}


function enterOrientacao (){
  var perfil = document.querySelector('.Anality')
  var entradas = document.querySelector('#entradas')
  var saidas = document.querySelector('#saidas')

  if(entradas.value == 0 && saidas.value == 0){
    perfil.innerText = 'Não há lançamentos!'
    perfil.style.backgroundColor = 'Transparent'
    perfil.style.color = 'black'
    
  } else{
    if(total.value < 0){
      perfil.innerText = 'Perigo: Sua situação financeira inspira cuidados. Gefin sugere uma reeducação financeira e uma reestruturação de planejamento.'
      perfil.style.backgroundColor = 'var(--global-red)'
      perfil.style.color = 'white'

    } else if(total.value < 300){
      perfil.innerText = 'Alerta: Seus compromissos estão sendo cumpridos, mas você não possui margem de reserva satisfatória.'
      perfil.style.backgroundColor = 'var(--global-dia)'
      perfil.style.color = 'black'
    } else{
      perfil.innerText = 'Parabéns! Você possui um planejamento financeiro satisfatório.'
      perfil.style.backgroundColor = 'var(--global-green)'
      perfil.style.color = 'black'
    }
  }   
  var receitaDia = document.querySelector('.receitaDia')
  var despesaDia = document.querySelector('.despesaDia')

  if(entradas.value == 0 && saidas.value == 0){
    receitaDia.innerText = ""
    despesaDia.innerText = ""
  }else{
  
    receitaDia.innerText = `A média de Receitas por dia é de ${(Number(entradas.value) 
      / 30).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`

    despesaDia.innerText = `A média de Despesas por dia é de ${(Number(saidas.value)
      /30).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`

  }

  var resume = document.querySelector('.resume')


  if(entradas.value == 0 && saidas.value == 0){
    resume.innerText = ""
  }else{
    if(total.value >= 0){
      total.style.color = 'var(--global-green)'
      resume.innerText = `A cada real ganho, você está direcionando ${(Number(saidas.value
        /entradas.value)).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} para pagar despesas`
    }else{
      total.style.color = 'var(--global-red)'
      resume.innerText = 'Você não possui saldo suficiente para pagar todas as suas despesas.'

    }
  }
}

