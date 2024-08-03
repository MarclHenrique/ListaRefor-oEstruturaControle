let prompt = require("prompt-sync")();

let valor = Number(prompt("Digite um valor: ")); //19
let soma = 0;
do{
   let digito = valor % 10; // 9 
   soma += digito //9
   valor = (valor - digito) / 10; //1
}while(valor > 0)

console.log(soma);
