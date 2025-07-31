alert("VOCÊ ACEITARÁ TUDO O QUE VAI ACONTECER A PARTIR DE AGORA");

let numeroSecreto = 29;
console.log('nummeroSecreto');
let chute = prompt("DIGITE UM NÚMERO ENTRE 1 A 50");
console.log('valor do chute', chute);
if (chute == numeroSecreto) {

    alert(`VOCÊ FOI RÁPIDO DEMAIS E ACERTOU! O NÚMERO SECRETO É ${numeroSecreto} `);
}  else {
    console.log('valor do numero secreto',numeroSecreto);
    alert("ERRADO, TENTE DE NOVO!");
}

// desafio 1
let segunda
let terca
let quarta
let quinta
let sexta
let sabado
let domingo
let diadasemana = prompt("Qual o dia da semana?");

if (diadasemana === sabado){
    prompt("Tenha um bom fim de semana")
} if (diadasemana ===domingo){
    prompt("Tenha um bom fim de semana")
} else {
    alert("Tenha uma boa semana")
}

// desafio 2
let numero1 = prompt("Digite um número");
 if (numero1 >=0){
    alert("número positivo!");
 } else {
    alert("número negativo!");
 }

// desafio 3
 alert("Bem vindo ao jogo!")

 let pontuacao = prompt("Digite a sua pontuação")

  alert(`A pontuação total foi de ${pontuacao}`)

 if (pontuacao >=100) {
    alert("Parabéns, você venceu")
 } else {
    alert("Que pena, tente novamente para ganahr!")
 }


// desafio 4
 let saldo = prompt("Olá usuário,digite o seu saldo:");

  alert(`Olá usuário, o seu saldo é : ${saldo} `)


// desafio 5
  let nome = prompt("Olá, Digite seu nome:");

  alert(`Olá ${nome}, seja bem vindo(a)!`)