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
    if(inputAno.value.length == 0 || inputAno.value > ano){
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
        tipo = "Saida"
        saidas.innerText = `${(Number(saidas.value) + Number(Valor.value)).toFixed(2)}`
        
      }

      total.innerText = `${(Number(entradas.value) - Number(saidas.value)).toFixed(2)}`
      if(total.value > 0){
        total.style.color = 'var(--global-green)'
      }else{
        total.style.color = 'var(--global-red)'
      }


      
      var lancamento = document.createElement('tr')
      lancamento.setAttribute('class','lcm')
      var lanDescricao = document.createElement('td')
      var lanValor = document.createElement('td')
      var lanTipo = document.createElement('td')      

      lanDescricao.innerText = `${Descricao.value}`
      lanValor.innerText = `${(Number(Valor.value)).toFixed(2)}`
      lanTipo.innerText = `${tipo}`

      switch (tipo){
        case "Entrada":
          lanDescricao.style.color = 'var(--global-green)'
          lanValor.style.color = 'var(--global-green)'
          lanTipo.style.color = 'var(--global-green)'
          break

        case "Saida":
          lanDescricao.style.color = 'var(--global-red)'
          lanValor.style.color = 'var(--global-red)'
          lanTipo.style.color = 'var(--global-red)'
          break
      }
      
      lancamento.appendChild(lanDescricao)
      lancamento.appendChild(lanValor)
      lancamento.appendChild(lanTipo)

      var printCab = document.querySelector('.printCab')
      printCab.appendChild(lancamento)    
    
    Valor.value = ""
    Descricao.value =""
    Descricao.focus()


    var perfil = document.querySelector('.Anality')
    if(total.value < 0){
      perfil.innerText = 'Perigo: Reveja seu planejamento financeiro. Você não está conseguindo cumprir com suas responsabilidades'
    } else if(total.value < 300){
      perfil.innerText = 'Alerta: Você cumpre com suas responsabilidades, mas seu saldo para emergências é bem apertado.'
    } else{
      perfil.innerText = 'Parabéns, sua saúde financeira é invejável'
    }
    
  }


  

}

