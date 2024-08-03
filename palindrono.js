let prompt = require("prompt-sync")();

let numero = Number(prompt("Insira um numero: "));
let numeroModificado = numero;
let resultado = " ";

while (numeroModificado !== 0){
    let cifra = numeroModificado % 10; // Extrai o último dígito
    resultado += cifra;
    numeroModificado = (numeroModificado / 10) | 0; // Remove o último dígito truncando a parte decimal
}

if(resultado == numero){
    console.log(`O número ${resultado} é um palíndromo`);
}else{
    console.log(`${resultado} não é palíndromo`);
}
