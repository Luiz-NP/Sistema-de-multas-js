//A variável CPF armazenará o CPF que o usuário digitar em forma de String
let CPF = []
//A variável digitos armazena os 9 dígitos necessários para os dígitos verificadores
let digitos = []
//verificadores guardam a soma dos dígitos
let verificador1
let verificador2
//checa se tem algum dígito inválido
let check
//número de usuários
let users = 1
//irá armazenar o total de multas
let totalM = 0

//modelo para criar novos perfis de motoristas
class Motoristas {
  constructor(nome, CPF, carteira, infração, multa, pontos){
    this.nome = nome
    this.cpf = CPF 
    this.carteira = carteira
    this.infração = infração
    this.multa = multa
    this.pontos = pontos
  }
}

//verifica se o cpf é valido
function validaCPF() {

  do{
    CPF = prompt('Digite seu CPF:')
  
    check = Number(CPF)
  
    if (CPF.length != 11 || isNaN(check)) {
      alert('digite um CPF Válido')
    } else {
      let count = 1
      for (i = 0; i < 9; i++) {
        digitos[i] = CPF[i] * count
  
        count++
      }
  
      verificador1 =
        (digitos[0] +
          digitos[1] +
          digitos[2] +
          digitos[3] +
          digitos[4] +
          digitos[5] +
          digitos[6] +
          digitos[7] +
          digitos[8]) %11
  
      if (verificador1 == 10) {
        verificador1 = 0
      }
  
      count = 0
  
      for (i = 0; i < 10; i++) {
        digitos[i] = CPF[i] * count
  
        count++
      }
  
      verificador2 =
        (digitos[0] +
          digitos[1] +
          digitos[2] +
          digitos[3] +
          digitos[4] +
          digitos[5] +
          digitos[6] +
          digitos[7] +
          digitos[8] +
          digitos[9]) %11
  
      if (verificador2 == 10) {
        verificador2 = 0
      }
  
      if (digitos[9] != verificador1 && digitos[10] != verificador2) {
        alert('CPF inválido.')
      } else {
        alert('CPF válido.')
      }
    }
  }while(CPF.length != 11 || isNaN(check))
  
  motoristas()
}

//pergunta o nome do motorista
function motoristas() {

  let user = prompt('Digite seu nome(apenas letras)')
    Number(user)
    if(!isNaN(user)){
      alert('Digite um nome válido. Se você digitou algo...')
      user = 0
      motoristas()
    }else{
      multas(user)
    }
}

//aplica multas de acordo com o nível da infração
function multas(user) {

    //Valores por infração e pontos na carteira
    let L = 88.38, LP = 3
    let M = 130.16, MP = 4
    let G = 195.23, GP = 5
    let GG = 293.47, GGP = 7

    let infração = prompt('Digite o número correspondente ao tipo de infração que ' + user + ' cometeu:\n1-Leve\n2-Média\n3-Grave\n4-Gravíssima')

    if(infração != '1' && infração != '2' && infração != '3' && infração != '4'){
      alert('Digite uma opção válida')
      multas()
    }

    switch(infração) {
      case '1':
        user = new Motoristas(user, CPF, users, 'Leve', L, LP)

        totalM += L
      break

      case '2':
        user = new Motoristas(user, CPF, users, 'Média', M, MP)

        totalM += M
      break

      case '3':
        user = new Motoristas(user, CPF, users, 'Grave', G, GP)

        totalM += G
      break

      case '4':
        user = new Motoristas(user, CPF, users, 'Gravíssima', GG, GGP)

        totalM += GG
      break

      default:
        alert('Digite uma opção válida')
        multas()
    }

    alert('Ficha:\nNome: ' + user.nome + '\nCPF: ' + user.cpf +'\nN° da carteira: ' + user.carteira + '\nTipo de infração: ' + user.infração + '\nValor a pagar: R$' + user.multa + '\nPontos na carteira: ' + user.pontos)

    replay()
  
}


//Pergunta ao usuário se deseja rodar o programa outra vez, afim de cadastrar mais um user
function replay() {
  let replay
  while(replay != 1 && replay != 2){
    replay = Number(prompt('Deseja cadastrar mais um motorista?\n1-Sim\n2-Não'))
    }
    switch(replay){
      case 1:
        users++
        validaCPF()
      break;

      case 2:
        totalArrecadado()
    }
}

//imprime o total arrecadado com as multas cobradas
function totalArrecadado() {

    alert('Valor total arrecadado com as multas: ' + totalM)
}

validaCPF()
