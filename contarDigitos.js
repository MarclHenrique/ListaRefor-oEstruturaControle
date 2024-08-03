let prompt = require("prompt-sync")();

let valor = Number(prompt("Digite um valor: ")); 
let contador = 0;

do {
    
    valor = (valor - (valor % 10)) / 10;
    contador++;
} while (valor > 0); 

console.log(contador);
