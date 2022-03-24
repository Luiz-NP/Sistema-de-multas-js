//A variável str armazenará o CPF que o usuário digitar em forma de String
let str = []
//A variável digitos armazena os 9 dígitos necessários para o primeiro dígito verificador 
let digitos = []
//verificadores guardam a soma dos 9 dígitos
let verificador1
let verificador2
//checa se tem algum dígito inválido
let check

let count = 1

str = prompt('Digite seu CPF:')

check = Number(str)

if((str.length) != 11 || isNaN(check)){

  alert("digite um CPF Válido")

}else{

  for(i = 0; i < 9; i++){

    digitos[i] = str[i] * count

    count++
  }
  
  verificador1 = (digitos[0] + 
                  digitos[1] +
                  digitos[2] + 
                  digitos[3] + 
                  digitos[4] + 
                  digitos[5] + 
                  digitos[6] +
                  digitos[7] +
                  digitos[8])%11
         
  if(verificador1 == 10){ verificador1 = 0 }
  alert("verificador1: " + verificador1)

  count = 0

  for(i = 0; i < 10; i++) {

    digitos[i] = str[i] * count

    count++
  }

  verificador2 = (digitos[0] + 
                  digitos[1] +
                  digitos[2] + 
                  digitos[3] + 
                  digitos[4] + 
                  digitos[5] + 
                  digitos[6] +
                  digitos[7] +
                  digitos[8] +
                  digitos[9])%11

  if(verificador2 == 10){ verificador2 = 0 }

  if(digitos[9] != verificador1 && digitos[10] != verificador2){
    alert('CPF inválido.')
  }else{
    alert('CPF válido.')
  }
}














