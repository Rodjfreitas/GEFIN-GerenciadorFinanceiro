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
      pageAction.style.display = 'block'
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
      
      var lancamento = document.createElement('div')
      lancamento.setAttribute('class','lcm')
      lancamento.innerHTML = `<p>${Descricao.value}</p><p>${(Number(Valor.value)).toFixed(2)}</p><p>${tipo}</p>`
      lancamento.style.display = 'flex'
      lancamento.style.justifyContent = 'space-between'
      lancamento.style.fontSize = '15px'
      lancamento.style.margin = '5px 0px'
      var printInput = document.querySelector('#printInput')
      printInput.appendChild(lancamento)

    
    Valor.value = ""
    Descricao.value =""
    Descricao.focus()
    
  }


  

}