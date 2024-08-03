let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Insira um numero: "));
let resultado = " ";

while (numero !== 0) {
    let cifra = numero % 10; // Extrai o último dígito
    resultado += cifra;
    numero = (numero / 10) | 0; // Remove o último dígito truncando a parte decimal
}
console.log(resultado);
