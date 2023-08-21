/*
* Primeiro programa em JavaScript
* João Felipe M. F.
*/

console.log("Olá mundo!");
//prompt("Qual é o seu nome?");
const VariavelA = 100;
const VariavelB = VariavelA + 50;
const VariavelC = VariavelA / VariavelB;
console.log(VariavelA);
console.log(VariavelB);
console.log(VariavelC);

//Variável let
let numero = 5;
console.log(numero);
numero = 120 +5;
console.log(numero);

//Concatenar textos;
/*
let nome = "João Felipe";
let sobreNome = "Manczenko Felicio";
let idade = 29;
console.log("Olá", nome, sobreNome, "voce tem", idade, "anos");
*/
//booleanas;
const variavelFalsa = false;
const variavelVerdadeira = true;

console.log("Variável falsa: " + variavelFalsa);
console.log("Variável verdadeira: " + variavelVerdadeira);

// Exercicio 1

let nome = "João Felipe";
let sobreNome = "Manczenko Felicio";
let idade = 29;
let estudante = true;
console.log("Seu nome é: ", nome, sobreNome, "Voce tem", idade, "anos", "e o seu status de estudante é: ", estudante);


//typeof
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);

console.log(typeof banana);
let banana = "fruta";
console.log(typeof banana);

const vazio = null;
console.log(typeof vazio);


//PROMPT

let valor = prompt("seu nome");
console.log(valor);

//  Exercicio 2

let nome = prompt("seu nome");
let idade = prompt("sua idade");
nome = "João Felipe";
idade = 29;
console.log(typeof nome, idade);
console.log(typeof nome);
console.log(typeof idade);
