
console.log("Olá, boas vindas!")
let nome = "João";
console.log(`Seja bem vindo ${nome}`);
alert(`Olá, ${nome}`);
console.log(`Olá, ${nome}`);
let perguntalegal = prompt("Qual a sua linguagem de programação favorita?");
console.log(`A linguagem favorita é ${perguntalegal}`);

let valor1 =12;
let valor2 =13;
let resultado = valor1 + valor2;
console.log (`A soma do ${valor1} e do ${valor2} será de ${resultado}`);

let valor3 =20;
let valor4 = 40;
resultado1 = valor3 - valor4;
console.log(`A subtração do ${valor3} e do ${valor4} é de ${resultado1}`);

let idade = prompt("Digite a sua idade");
if (idade >=18) {
    alert("Maior de idade!");
}else {
    alert("Menor de idade!");
}

let numero = prompt("Digite um número");
if (numero >0) {
    alert("numero positivo");
} else if (numero <0){
    alert("numero negativo");
}else {
    alert("numero zero");
}

nota = 10;
if (nota >=7){
    console.log("aprovado");
} else if(nota = 7){
    console.log("na média");
}else {
    console.log("REPROVADO");
}


let numeroaleatorio = Math.random();
console.log(numeroaleatorio);

let numerolegal = parseInt(Math.random() *10 +1);
console.log(numerolegal);

let numerofinal = parseInt(Math.random() *1000+1);
console.log(numerofinal);