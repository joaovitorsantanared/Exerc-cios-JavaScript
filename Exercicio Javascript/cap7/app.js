function boasvindas () {
  console.log("olá mundo!");
}
boasvindas();

function olaBoasVindas (nome) {
  console.log(`olá, ${nome}`); 

}
olaBoasVindas("João Vitor");


function numeroNumerico (numero) {
  return numero * 2;
}
 let numeroDobro = numeroNumerico(5);
console.log(numeroDobro);

function numeroTriplo (numero1,numero2,numero3,) {
  return numero1 *2 +numero2*5 +numero3 *7 /3;
}
  let media = numeroTriplo(4,7,8);
  console.log(media);

  function maiorMenor (num1,num2){
    return num1 > num2 ? num1:num2

  }
  let maiorNumero = maiorMenor (5, 7);
  console.log(maiorNumero);


  function numeroParametro (numerico) {
    return numerico *numerico;
  }

  let numericoMultiplicador = numeroParametro (10,20);
  console.log(numericoMultiplicador);

